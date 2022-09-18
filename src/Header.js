import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
const [{basket,user}, dispatch ] = useStateValue();
const handleAuthentication=()=>{
    if(user){
        auth.signOut() ;
       }
}

  return (
    <div className='header'>
        <Link to="/">
        <img className='header_logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruxP2cr9ebwCcn8OgjlSLs6YKetrZCRhV4mUI2Xrf9WkexjHQdHRtcbGUKK9j-JqKqA&usqp=CAU" alt="" />
        </Link>
        <div
        className='header_search'>
            <input 
            className='header_searchgInput' type='text'/>
            <SearchIcon
            className='header_searchIcon'/>
        
        <div
        className='header_nav'>
            <Link to={!user&&"/Sign"}>
            
            <div onClick={handleAuthentication} className='header_option'>
                Hello {!user?' Guest':user.email}
                
                <span className='headeroptionlineone'>{user?'Sign Out'  :'Sign In'}</span></div>
                </Link>
                <div className='header_option'>
                    Returns
                <span className='headeroptionlinetwo'>&Orders</span></div>
                <div className='header_option'>Your
                <span className='headeroptionlineThree'>Prime</span></div>
                <Link to={!user?"/Basket":"/Basket"}>
                <div
                className='header_bucket'>
                    <ShoppingBasketIcon/>
                    <span
                    className='header_bucketcount'>{basket?.length}</span>
                </div>
                </Link>
                </div>
        </div>
    </div>
  )
}

export default Header