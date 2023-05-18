import React from 'react';
import '../styles/Review.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CiStar } from 'react-icons/ci';
import { useState } from 'react';



function Review( {open , close  } ) {
  
        const [hoverRating, setHoverRating] = useState('0');
        const [Rating, setRating] = useState(null);
        

       
  return  !open ? null  : (
    <div className='Popup'>
      <div className='Popup-inner'>
          <h2>Review this</h2>
        

          <div className="modal-body">
          <ul className="stars">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <div key={i}>
                  <CiStar
                    className="star"
                    onMouseEnter={() => setHoverRating(ratingValue)}
                    onMouseLeave={() => setHoverRating(null)}
                    onClick={()=> setRating(ratingValue)}

                    style={{ color: ratingValue <= (Rating || hoverRating) ?  'red' : "black" }}
                    size={32}
                  />
                </div>
              );
            })}
          </ul>

          <h4>
              Rating is: {Rating}
          </h4>
               
          </div>
          <button className='Review-Btn' onClick={close} >Submit</button>
          <button className='close' onClick={close}><AiOutlineCloseCircle/></button>
      </div>

      

      
    </div>
  )
}


export default Review
