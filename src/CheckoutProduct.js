import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';
 

function CheckoutProduct({id,image,title,prize,rating}) {

    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
            
        })

    }
  return (
    <div className='checkoutproduct'>
        <img className='checkoutproduct_image' src={image} alt=""  />
        <div className='checkout_product_info'>
            {/* <p className='checkout_product_id'>{id}</p> */}
            <p className='checkproduct_title'>{title}</p>
            <p className='checkoutproduct_prize'>
                <small>$</small>
                <strong>{prize}</strong>
            </p>
            <div
            className='product_rating'>
              {Array(rating)
              .fill()
              .map((_,i)=> 
              (<p>⭐</p>))}
            </div>
            <button onClick={removeFromBasket} className='but'>Remove from Basket</button>

        </div>
      
    </div>
  )
}

export default CheckoutProduct
