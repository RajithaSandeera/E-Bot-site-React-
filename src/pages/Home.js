import React from 'react';
import Menu from '../components/Menu.js';
import { MenuList } from '../helpers/MenuList';
import { useState } from 'react';
import { BsListTask } from 'react-icons/bs';
import '../styles/Home.css';
import { Navigate, Link } from 'react-router-dom';
import Brands from '../pages/Brands';
import { useParams } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';




function Home({ authorized }) {



  const [filterTextValue, setFilterTextValue] = useState('');

  const [showBrands, setShowBrands] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const { filterValue } = useParams();



  const handleMouseEnter = () => {


    setTimeout(() => {
      setIsHovered(true);
      setShowBrands(true);
    }, 100);



  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowBrands(false);
  };

  let onFilterFunction = (event) => {

    const value = event.target.value;

    setFilterTextValue(value === "all" ? '' : value);

  }
  if (!authorized) {

    return <Navigate to="/Login" replace />;
  }


  return (
    <div>

      <div className={`container-fluid ${isHovered ? 'hover-class' : 'container-fluid'}`}>
        <h2 className='top-title pt-4'>All Products</h2>


        <div className='row' >
          
          <div className='category col-2 border rounded'>

            <div className='FilterContainer' >
              <h3 onMouseEnter={() => { setShowBrands(false) }}><BsListTask /> Categories</h3>
              <hr></hr>

              <div className='BrandsFilter'>

                <p onMouseEnter={handleMouseEnter}>
                  <BsListTask />  Brands</p>
                {showBrands && <Brands />}

              </div>
              
              <div className='FilterContainer-content' >
                <select onChange={onFilterFunction}>
                  <option value="all">All</option>
                  <option value="Robot">Robot</option>
                  <option value="Bot">Bot</option>
                  <option value="DigiMatch">Digit Match/Differ</option>
                  <option value="Asain Up/Down">Asian Up/Down</option>
                  <option value="Digit">Digit Odd/Even</option>
                  <option value="High">High/Low Ticks</option>
                  <option value="Reset">Reset Call/ Put</option>
                  <option value="Only">Only Ups/ Downs</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>
          </div>

          <div className="col-8 pt-3" onMouseLeave={handleMouseLeave}>


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


            <div className='menu-top border rounded'>
              <div className='menuBrand'>
                <div className='menu' onMouseEnter={() => { setShowBrands(false) }}>
                  <h1 className="menuTitle">Our Menu</h1>

                  <div className="menuList" onMouseEnter={() => { setShowBrands(false) }}>
                    {MenuList.filter((item) => {
                      console.log(filterValue); // Log the value of filterValue

                      return (

                        (filterTextValue === '' ? MenuList :
                          item.fullname.toLowerCase().includes(filterTextValue.toLowerCase())) ||
                        (filterValue === '' ? MenuList :
                          item.fullname.toLowerCase().includes(filterValue))
                      );



                    }).map((item, key) => (
                      <Link key={item} to={`/MenuItems/${item.fullname}`} className="link">

                        <Menu
                          key={key}
                          image={item.image}
                          price={item.price}
                          name={item.fullname}
                        />

                      </Link>

                    ))}
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
  )
}


export default Home