import React, { useEffect } from "react";
import Menu from "../components/Menu.js";
import { MenuList } from "../helpers/MenuList";
import { useState } from "react";
import { BsListTask } from "react-icons/bs";
import "../styles/Home.css";
import {  Link } from "react-router-dom";
import Brands from "../pages/Brands";
import { useParams } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';

function Home( ) {

  const [filterDropValue, setFilterDropValue] = useState("");
  const [filterFinal, setFilterFinal] = useState("");
  const [urlFilteredProduct, setUrlFilteredProduct] = useState(MenuList);
  const { brand } = useParams();

      console.log(brand);
      useEffect(() => {
        console.log("useEffect working", brand);
        filtering(atob(brand));
        console.log("useEffect working two", atob(brand));
      }, [brand]);

      const filtering = (arg) => {
        const filteredProduct = MenuList.filter((item) => item.brand === arg);
        setUrlFilteredProduct(filteredProduct);

        const dropDownFilter = MenuList.filter(
          (item) => item.fullname === filterDropValue
        );
        setFilterFinal(dropDownFilter);
      };

      let onFilterFunction = (event) => {
        const value = event.target.value;

        setFilterDropValue(value === "all" ? "" : value);
        console.log(value);
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
                  <option value="all">All</option>

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
                    {urlFilteredProduct.map((item, index) => {
                      const filter = filterFinal[index];

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
                          filter={filter}
                        />
                      </Link>
                      )})}
                  </div>
                </div>
              </div>

              <div className="grid-container">
                <div>1</div>
                <div>2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
