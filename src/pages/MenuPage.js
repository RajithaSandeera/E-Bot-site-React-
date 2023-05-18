import { Rating } from '@mui/material';
import React, { useState } from 'react'
import Review from '../components/Review';
import '../styles/MenuPage.css';
import { MenuList } from '../helpers/MenuList';
import { useParams } from 'react-router-dom';



export default function MenuPage({RatingValue}) {


let [Count, setCount] = useState(0);
let[isOpen,setOpen] = useState(false);


const increment=()=>{
    setCount(Count > 9 ? Count === '9' : Count +1) 
}

const decrement=()=>{
    setCount(Count < 1 ? Count === '0' : Count -1 )
}


    const { name } = useParams();
    const filterValue = name?.replace('/', ''); 

    const product = MenuList.find((item) => item.fullname === filterValue);

    if (!product) {
    console.log('Product not found.');
    return <p>Product not found.</p>;
    }

    const { fullname, image, brand, price, BrandImage ,Description} = product;


  return (
       



<div className="container-menu">
<div className="row justify-content-around">
    
    <div className="col-12 col-lg-5 img-fluid " id="product_image">
    <img src={image} alt="brandImage" width="500" height="400"></img>
    </div>
    


<div className="col-12 col-lg-5 mt-5 items">
   
    <h2>Product {fullname}</h2>
    <p id="product_id">Brand {brand}</p>

    <hr/>

    <div className="rating-outer">
        <div className="rating-inner"></div>
    </div>
    <span id="no_of_reviews">{RatingValue} Reviews </span>

    <hr/>

    <p id="product_price">{price}</p>
    <div className="stockCounter d-flex align-items-center">
    <span className="btn btn-danger minus" onClick={decrement}>-</span>
    <input type="number" className="form-control count mx-2" value={Count} readOnly />
    <span className="btn btn-primary plus " onClick={increment}>+</span>
    <button type="button" id="cart_btn" className="btn ms-4">Add to Cart</button>
    </div>

    <hr/>

    <p>Status: <span id="stock_status">In Stock</span></p>

    <hr/>

    <h4 className="mt-2">Description:</h4>
    <Review open={isOpen} close={()=>{setOpen(false)}} RatingValue={Rating} >
         Review is here
    </Review>

    <p>{Description}</p>
    <hr/>


    <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>
  
    <button id="review_btn" type="button" onClick={()=>setOpen(true)} className="btn mt-4" data-toggle="modal" data-target="#ratingModal">
      
                Submit Your Review
    </button>
    <hr/>
    <br/>
    <br/>

   

          
     
 </div>
</div>
</div>

)
}
