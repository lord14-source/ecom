import React from 'react'
import "./Basket.css"


import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link} from "react-router-dom"


function Basket() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='Basket'>
      <div className='Basket_left'>
      <img className='Basket_ad' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.jpg" alt="" />

<div>
  <h3>Hello,{!user?<h2>Login Your Account <Link to='/sign'><button className='xx'>Sign In</button></Link></h2>:user.email}</h3>
  <h2 className='Basket_title'>{!basket.length?<h2>Your shopping Basket is Empty now 👎 </h2>:<h2>Your Shopping basket 👍</h2>}</h2>
   {basket.map(item=>(
    <CheckoutProduct
    id={item.id}
    title={item.title}
    image={item.image}
    prize={item.prize}
    rating={item.rating}
    />
  ))}
  {/* <CheckoutProduct/> 
  */}
</div>
<footer className='footer'>
<div className='solid'>
          <b>Get to Know Us</b><br/>
Careers<br/>
Blog<br/>
About Amazon<br/>
Investor Relations<br/>
Amazon Devices<br/>
Amazon Science<br/></div>
<div className='sol'>
<b>Make Money with Us</b><br/>
Sell products on Amazon<br/>
Sell on Amazon Business<br/>
Sell apps on Amazon<br/>
Become an Affiliate<br/>
Advertise Your Products<br/>
Self-Publish with Us<br/>
Host an Amazon Hub<br/>
›See More Make Money with Us<br/></div>
<div className='so'>
<b>Amazon Payment Products</b><br/>
Amazon Business Card<br/>
Shop with Points<br/>
Reload Your Balance<br/>
Amazon Currency Converter<br/></div>
      </footer>
      </div>
      <div className='Basket_right'>
       <Subtotal/>
       
      </div>
      
      
     </div>
  )
}

export default Basket