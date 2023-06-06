/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

// components

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  function isAuthenticated() {
    const token = localStorage.getItem("Token");
    // verify the token
    if (token) {
      // return true if the token is valid
      return true;
    } else {
      // return false if the token is invalid or not present
      return false;
    }
  }
  const authenticated = isAuthenticated();
  return (
    <div className='d-flex align-items-center justify-content-between w-100 border border-primary me-5 ml-5'>
    {/* for logo */}
    <div>
    3D React
    </div>
    {/* for nav button */}
    <div className='d-flex align-items-center justify-content-center w-50 border border-dark'>
      <div className='me-5'>Home</div>
      <div className='me-5'>About</div>
      <div className='me-5'>Explore</div>
    </div>
    {/* for login/logout */}
    <div>
    <button type="button" class="btn btn-primary">Logout</button>
    </div>

  </div>
  );
}
