import React from 'react'
import Product from './Product'
import './Home.css'
import {Link} from "react-router-dom"
//import { useStateValue } from './StateProvider'
import { useState } from 'react'
import { useEffect } from 'react'


function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };
  


  return (
    <div className='home'>
        <div className='home_container'>
        
        <img  
        className='home_image' src="https://m.media-amazon.com/images/I/416jYbB3O9L._SX1500_.jpg" alt="" />
        <Link to="/Basket">
        <div className='alert'>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</div> 
        </Link>
        <div
        
        className='home_row'>
         
            <Product
            id="123"
            title="Shop Father 's Day Gifts" prize={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/FathersDay/Fuji_FathersDay22_Dash_1X._SY304_CB636880260_.jpg" rating={5}/>
            <Product
            
            id="1234"title="Health & Personal Care" prize={17.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/GW_CONS_AUS_HPC_HPCEssentials_CatCard_Desktop2x._SY608_CB627424361_.jpg" rating={4}/>
            <Product 
            id="12345"
            title="Dresses for Girl's" prize={30.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2022/February/DashboardCards/Fuji_dash_dress_2X._SY608_CB626369146_.jpg" rating={5}/>
            
           
        </div>
        <div
        className='home_row'>
            <Product 
            id="123456"
            title="Toys for kid's" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Toys_2X._SY608_CB639759849_.jpg" rating={3}/>
            <Product
            id="1234567" title="Shop activity trackers and smartwatches" prize={29.99} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_SmartWatch_2X._SY608_CB639922111_.jpg" rating={4}/>
            <Product
            id="12345678" title="Shop Laptops & Tablets" prize={78.87} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Laptops_758x608_2X_en_US._SY608_CB418608386_.jpg" rating={3}/>
            <Product 
            id="123456789"
            title="Shop Pet supplies" prize={65.34} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Pets_2X._SY608_CB639746708_.jpg" rating={5}/>
            
           
        </div>
        <div
        className='home_row'>
            <Product 
            id="2234"title="Toys for kid's" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Striplighting_758x608_2X_en_US._SY608_CB418597463_.jpg" rating={3}/>
            <Product
            id="22345" title="For your Fitness Needs" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/September/DashboardCards/Fuji_Dash_Fitness_2X._SY608_CB639748111_.jpg" rating={3}/>
            <Product
            id="223456" title="Frequently repurchased in Pet Supplies" prize={28.35} image="https://m.media-amazon.com/images/I/81Fyb8B0YtL._AC_SY390_.jpg" rating={5}/>
            
           
        </div>
        <div
        className='home_row'>
            <Product
            id="22345" title="Inspired by your browsing history" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/I/81vksiOGufL._AC_UL320_SR320,320_.jpg" rating={5}/>
            <Product
            id="223456" title="Inspired by your browsing history" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/I/91GEC--foYL._AC_UL320_SR320,320_.jpg" rating={4}/>
            <Product
            id="223456" title=" Inspired by your browsing history" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/I/91E4R4IRmIL._AC_UL320_SR320,320_.jpg" rating={3}/>
            <Product
            id="223456" title="Inspired by your browsing history" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/I/81v95DpHlIL._AC_UL320_SR320,320_.jpg" rating={3}/>
            <Product
            id="223456" title="Inspired by your browsing history" prize={28.35} image="https://images-na.ssl-images-amazon.com/images/I/71pbn4HjGfL._AC_UL320_SR320,320_.jpg" rating={3}/>
            
            <Product
            id="223456" title="Inspired by your browsing history" prize={28.35} image="image.png" rating={4}/>
            
            
           
           
        </div>
        <hr/>
        <h5 className='bottomalert'>See personalized recommendations</h5>
        <Link to='/Sign'><button className='butt'><b>Sign IN</b></button></Link>
        <hr/>
        <div className='bac'>
         
        {showButton && (<button onClick={scrollToTop}  className='write'>Back to top</button>)}
         

        </div>
        <div className='footer'>
          <div className='solid'>
          <b>Get to Know Us</b><br/>
Careers<br/>
Blog<br/>
About Amazon<br/>
Investor Relations<br/>
Amazon Devices<br/>
Amazon Science<br/></div>
<div className='solid'>
<b>Make Money with Us</b><br/>
Sell products on Amazon<br/>
Sell on Amazon Business<br/>
Sell apps on Amazon<br/>
Become an Affiliate<br/>
Advertise Your Products<br/>
Self-Publish with Us<br/>
Host an Amazon Hub<br/>
›See More Make Money with Us<br/></div>
<div className='solid'>
<b>Amazon Payment Products</b><br/>
Amazon Business Card<br/>
Shop with Points<br/>
Reload Your Balance<br/>
Amazon Currency Converter<br/>
</div>
<div className='solid'>
<b>Let Us Help You</b><br/>
Amazon and COVID-19<br/>
Your Account<br/>
Your Orders<br/>
Shipping Rates & Policies<br/>
Returns & Replacements<br/>
Manage Your Content and Devices<br/>
Amazon Assistant<br/>
Help<br/>
</div>








          
          
        </div>
       
        </div>
        

       
        
    </div>

  )
}

export default Home 