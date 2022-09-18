import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"


function Product({id,title,image,prize,rating}) {
  const [{basket},dispatch]=useStateValue();
 // console.log('this is the basket >>>',basket)

  const addToBasket=()=>{
    
dispatch({
  type:'ADD_TO_BASKET',
  item:{
    id: id,
    title : title,
    image: image,
    prize: prize,
    rating: rating,
  },
});


  };
  return (
  
    <div className='product'>
        <div
        className='product_info'>
            <p>
            <b>{title}</b>
            </p>
            <p className='product_prize'>
                <small>$</small>
                <strong>{prize}</strong></p>
            <div
            className='product_rating'>
              {Array(rating).fill().map((_,i)=>
              (<p>⭐</p>))}
            </div></div>
<img className='img' src={image} alt="" />           
           
<button className='button' onClick={addToBasket}>Add to Basket</button>


           
            
      

      
    </div>
  )
}

export default Product
