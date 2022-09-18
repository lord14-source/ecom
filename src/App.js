
import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Basket from './Basket'
import {
  BrowserRouter as Router,
 
  Route,
  Switch
} from "react-router-dom";    
import Sign from './Sign';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
//import {authUser} from './react';
import Payment from './Payment';
//import Delivery from'./Delivery';
//bnimport Add from'./Add';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise=loadStripe(
  "pk_test_51L8e3DSGsmC6IaFPkOHXkAhPzxREe7XLAipIVpFkbsDRjfagfxtorWTyJjnaMncJbT4OQWvZYZ5vQD82otCZgVea00i42Oen1Q"
);

function App() {

  const [{},dispatch] =useStateValue(); 
  useEffect(() => {
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS>>>', authUser);

      if(authUser){
        dispatch({
          type:'SET_USER',
           user:authUser
        })

      }
      else{
        dispatch({
        type:'SET_USER', 
        user: null

      })
       }
    })
   
  }, [])
  return (
    
    <Router>
      
    
     

    <div className="App">
    
      <Switch>
      <Route path='/Sign'>
        <Sign/>
        

      </Route>
      <Route  path='/Basket'  >
      <Header/>

      <Basket />
      </Route>
      {/* <Route path='/delivery'>
        <Header/>
       
        <Delivery/>
      </Route> */}
      <Route path='/Payment'>
        <Header/>
        <Elements stripe={promise}><Payment/></Elements>
        

      </Route>
      
     
      <Route path='/'>
        <Header/>
        <Home/>
      </Route>
      
        {/* <Header/> */}

        
      

      
      
      

        
       
 

 

 
 
 </Switch>
     
    </div>
    </Router>
  );
}

export default App;
