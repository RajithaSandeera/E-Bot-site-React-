import React, { useEffect } from "react";
import Menu from "../components/Menu.js";
import { MenuList } from "../helpers/MenuList";
import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Brands from "../pages/Brands";
import { useParams } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

function Home() {
  const [urlFilteredProduct, setUrlFilteredProduct] = useState(MenuList);
  const { brand } = useParams();
  const [filterDropValue, setFilterDropValue] = useState('All');
  const [filterFinal, setFilterFinal] = useState([]);



  // useEffect(() => {
   
  // }, [brand]);

  useEffect(() => {
    filtering(atob(brand));
    dropDownFilter();
  }, [brand,filterDropValue, urlFilteredProduct]);

  const filtering = (arg) => {
    const filteredProduct = MenuList.filter((item) => item.brand === arg);
    setUrlFilteredProduct(filteredProduct);
  };

    const dropDownFilter = () => {
   const dropDownFilter = urlFilteredProduct.filter((item) => item.fullname === filterDropValue);
    setFilterFinal(dropDownFilter);
    
  };

   console.log("final:", filterFinal); // Added console.log here
 

  let onFilterFunction = (event) => {
    const value = event.target.value;
    setFilterDropValue(value);
  };

  const filteredItems = filterFinal.length > 0 ? filterFinal : urlFilteredProduct;
  return (
    <div>
      <div className="">
        <h2 className="top-title pt-4">All Products</h2>

        <div className="row">
          <div className="category col-2 border rounded">
            <div className="FilterContainer">
              <h3>
                <BsListTask /> Categories
              </h3>
              <hr></hr>

              <div className="BrandsFilter">
                <p className="brandCardButton">
                  <Brands />
                  <BsListTask /> Brands
                </p>
              </div>
              <div className="FilterContainer-content">
                <select onChange={onFilterFunction}>
                  <option value="All">All</option>

                  {urlFilteredProduct.map((item) => (
                    <option value={item.fullname}>{item.fullname}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="col-8 pt-3">
            <div className="input-group">
              <div class="wrap">
                <div class="search">
                  <input type="text" class="searchTerm" placeholder="What are you looking for?" />
                  <button type="submit" class="searchButton">
                    <BsSearch/>
                  </button>
                </div>
              </div>
            </div>

            <div className="menu-top border rounded">
              <div className="menuBrand">
                <div className="menu">
                  <h1 className="menuTitle">Our Menu</h1>

                  <div className="menuList">
                    {filteredItems.map((item, index) => {
                      return(
                        <Link
                          key={`${item.fullname}-${index}`} // Append index value to ensure uniqueness
                          to={`/MenuItems/${item.fullname}`}
                          className="link"
                        >
                          <Menu
                            image={item.image}
                            price={item.price}
                            name={item.fullname}
                            
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
