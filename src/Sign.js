import React from 'react'
import './Sign.css'
import {Link,useHistory} from "react-router-dom"
import { useState } from 'react';
import {auth} from "./firebase";


function Sign() {
  const history=useHistory();

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const signin=e=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then(auth =>{
      history.push('/')
    })
    .catch(error=>alert(error.message))

  }
  const register =e=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
      console.log(auth);
      if(auth){
        history.push('/')

      }

    })
    .catch(error => alert(error.message))

  }
  return (
    <div className='signin'>
      <Link to='/'>
        <img className='sign_logo' src="https://th.bing.com/th/id/OIP.A2w-XnU0K6aYXr0IFCzILQHaCO?w=342&h=105&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        </Link>
        <div className='sign_container'>
       
         <h1> Sign in</h1>
         <form>
           <h5>E-mail</h5>
           <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>

           <h5>Password</h5>
           <input type='password' value={password}
           onChange={e=>setPassword(e.target.value)}/>
           <button className='sign_but' onClick={signin} type='submit'>Continue</button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
        
        <h6>New to Amazon </h6>
        <button onClick={register} type='submit'
         className='register_container'>Create Your Amazon Account</button>

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
  )
}

export default Sign