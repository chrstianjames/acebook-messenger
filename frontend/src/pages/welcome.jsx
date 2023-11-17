import React from 'react';
import Navbar from '../components/navbar/navbar';
import LogInForm from '../components/auth/LoginForm';
const Welcome = ({navigate}) => {


  // Fetch user-specific data based on userId and render content accordingly
  // Example: Fetch user details, posts, etc. using userId

  return (
    <div>
    <Navbar/>
      <h1>Welcome to Acebook</h1>
      <p>Please Sign in</p> 
      <LogInForm navigate={navigate}/>
      {/* Render user-specific content */}
      {/* You can fetch user data and display it here */}
    </div>
  );
};

export default Welcome;
