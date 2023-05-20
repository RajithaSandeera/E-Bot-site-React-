import React from 'react';
import { BrandList }  from '../helpers/BrandList';
import '../styles/Brands.css';
import { Link } from 'react-router-dom';

function Brands() {
  return (
    <div className='brandCard'>
        <div className='container-brand'>
        <div className='Brand-Title'>
            <p>Top Brands</p>
        </div>
            <div className='TopBrand'>
           
                {BrandList.map((item)=>(
                        <Link key={item} to={`/product/${btoa(item.BrandName)}`} className="brandStyle">
                             <div key={item} >   
                            {<img src={item.BrandImage} alt="brandImage" width="150px"></img>}
                           
                           
                        </div>
                        </Link>
                       
                        ))}

                        
            </div>
           
        </div>
      


    </div>
  )
}

export default Brands
