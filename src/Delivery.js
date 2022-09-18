
import { Link } from 'react-router-dom';
import './Delivery.css';
import React, { useState, useEffect } from 'react';


function Delivery() {
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
    <div className='delivery_containter'>
        <div className='delivery_logo'>
            <Link to='/'>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/x-locale/checkout/checkout-spc-address-banner._CB485947649_.gif" alt="" /></Link>
            
        </div>
        <h1 className='title_delivery'>Select a dilevery address</h1>
        <h5 className='be'>Is the address you'd like to use displayed below? If so, click the corresponding "Deliver to this address" button.<h5>Or you can enter a new delivery address.  </h5></h5>
        { showButton && <button  >xxx</button>}
            {showButton && (<button type='scroll'onClick={scrollToTop}  className='write'>Back to top</button>)} 
        
            <div className='back'>
         
         {showButton && (<button onClick={scrollToTop}  className='writ'>Back to top</button>)}
          
 
         </div>
         <div className='div'>
<input className='in' type={'checkbox'}/>
<h3 className='ss'></h3>
</div>
        
      
    </div>
  )}

export default Delivery

