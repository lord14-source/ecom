import React,{useState,useEffect} from 'react'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { useStateValue } from './StateProvider'
//import {Link} from 
import {Link,useHistory} from "react-router-dom"
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js"
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios';

function Payment() {
  const[{basket,user},dispatch]=useStateValue()
  const history=useHistory();
  const stripe=useStripe();
  const elements=useElements();
  const [succeeded,setSucceeded]=useState(false);
  const [processing,setProcessing]=useState("");
  const [error,setError]=useState(null);
  const [disabled,setDisabled]=useState(true);
  const [clientSecret,setClientSecret]=useState(true);

  useEffect(() => {
     const getClientSecret =async ()=>{
       const response = await axios({
         method:'post',
         url:`/payments/create?total=${getBasketTotal(basket)*100}`
       });
       setClientSecret(response.data.clientSecret)
     }
     getClientSecret();
      
  }, [basket])

  const handleSubmit= async (event)=>{
    event.preventDefault();
    setProcessing(true);
    const payload =await stripe.confirmCardPayment(clientSecret,
      {
        payment_method:{ card:elements.getElement(CardElement)
  }
}).then(({paymentIntent})=>
{
  setSucceeded(true);
  setError(null);
  setProcessing(false);

  history.replace('/orders')

})



  }
  const handleChange=event=>{
    setDisabled(event.empty);
    setError(event.error?event.message:"");


  } 

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h2>CheckOut ({<Link to='/basket'>{basket?.length} items)</Link>                                      }</h2>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>

          </div>
          <div className='payment_address'><p>
            {user?.email}</p>          <p> Vill-Pachokhar</p> 
           <p> Pst-Ramdayalganj</p><p>Dst-Jaunpur,Pincode-222105</p>
            </div>


        </div>
        <div className='payment_section'>
          <div className='title'>{basket.length===0?<h3>Your Basket is empty yet 👎
            <Link to="/"> <button className='back'>Back to home</button> </Link></h3>:<h3>Review items and delivery 👍</h3>}</div>
          <div className='payment_items'>
            {basket.map(item=>(
              <CheckoutProduct
              id={item.id}
    title={item.title}
    image={item.image}
    prize={item.prize}
    rating={item.rating}
    /> 
            ))}
          </div>
        </div>
        <div className='payment_section'>
          <div className='payment_title'>
            <h3 className='well'>Payment Method </h3>
            
          </div>
          <div className='payment_details'>
            <h4 className='trt '>Card Details</h4>
            <form onSubmit ={handleSubmit}>
              <CardElement onChange={handleChange}/>
              <div className='payment_pricecom'>
                <CurrencyFormat
                renderText={(value)=>(
                  <>
                <h3>Order total: {value}</h3></>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}/>
                <button className='bbtt' disabled={processing||disabled||succeeded}>
                  <span>{processing?<p>Processing</p>:""}Buy Now</span>
                </button>
                 
              </div>
              {error&&<div>{error}</div>}

            </form>
          </div>
        </div>
      </div>
         
      
    </div>
  )
}

export default Payment

