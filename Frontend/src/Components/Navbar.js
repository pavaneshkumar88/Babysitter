/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";


const Navbar = () => {

 const onClickLogout = () =>{
    Cookies.remove('jwt_token')
    window.location.href = "/login";
  }

  return (
    <nav>
      <div className="nav-logo-container">
        <h2>Employee Character Check</h2>
      </div>
      <div className="navbar-links-container">
        {/* <Link to = {"/login"}> */}

        <button onClick ={onClickLogout}className="primary-button">Logout</button>
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
