import React, { useEffect, useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [token, setToken] = useState(window.localStorage.getItem("token"));

  
  const logout = () => {
    window.localStorage.removeItem("token")
  }

  
    if(token) {
      return(
        <div class="topnav">
        <a href='/timeline'>Home</a>
        <a href='/new_post'>Create a Post</a>
        <a href='/countdown'> Token Timer</a>
        <a href='/' class="right" onClick={logout}>Log-Out</a>
        
        </div>
      )
    } else {
      return (
        <div class="topnav">
        <a href='/timeline'>HomePage</a>
        {/* To Be Removed in time - This Section exists only for testing navigation  */}
        <a href='/posts'>Feed</a>
        <a href='/new_post'>Create a Post</a>
        <a href='/countdown'> Token Timer</a>
        {/* To Be Removed -  ^^^^ */}
        <a href='/login' class="right" >Login</a>
        </div>
      )
    }}

export default Navbar;