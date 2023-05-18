import React from 'react'

 function Menu({ name,image,price }) {
  return (
    <div className='menuItem'>
   
      <div>{<img src={image} alt="selling goods"></img>}</div>
      <h4>{name}</h4>  
      <p>{price}</p>
    </div>
  )
}
export default Menu


