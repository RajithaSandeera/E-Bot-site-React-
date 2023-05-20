import React, { useEffect } from "react";
import Menu from "../components/Menu.js";
import { MenuList } from "../helpers/MenuList";
import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import Brands from "../pages/Brands";
import { BsSearch } from 'react-icons/bs';


function Home() {
  const [filterDropValue, setFilterDropValue] = useState('All');
  const [dropValue, setDropValue] = useState([]);


  useEffect(() => {
    filtering();
  }, [filterDropValue]);

  const filtering = () => {
    const dropDownFilter = MenuList.filter( (item) => item.fullname === filterDropValue);
    filterDropValue === "All" ? setDropValue(MenuList) : setDropValue(dropDownFilter)
    // console.log("filtered value",dropValue);
    }
  let onFilterFunction = (event) => {
    const value = event.target.value;
    setFilterDropValue(value);
  };

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

                  {MenuList.map((item) => (
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
                    {dropValue.map((item, index) => (
                      <Link
                        key={`${item.fullname}-${index}`} // Assuming `item.id` is a unique identifier
                        to={`/MenuItems/${item.fullname}`}
                        className="link"
                      >
                        <Menu          
                             
                          image={item.image}
                          price={item.price}
                          name={item.fullname}
                        />
                      </Link>
                    ))}
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
