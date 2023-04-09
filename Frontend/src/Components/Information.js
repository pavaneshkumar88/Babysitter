import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/Visual data-pana.png";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import { useNavigate, Link } from 'react-router-dom'

const Information = () => {

  const navigate = useNavigate();

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    window.location.href = "/login";
  }

  return (
    <div >
    <Navbar />
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img
          className="about-section-image"
          src={AboutBackgroundImage}
          alt=""
        />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Display</p>
        <h1 className="primary-heading">Image Details</h1>
        <p className="primary-text">
          Optical Character Recognition (OCR) is the process that converts an
          image of text into a machine-readable text format. For example, if you
          scan a form or a receipt, your computer saves the scan as an image
          file
        </p>
        {/* <p className="primary-text">
          Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
          facilisis at fringilla quam.
        </p> */}
        <div  className="about-buttons-container" >
          <Link  Style="text-decoration: none" to ={"/backgroundcheck"}>
          <button className="secondary-button">Background Check</button>
          </Link>
          <Link   Style="text-decoration: none" to ={"/quickcheck"}>
          <button className="secondary-button"Style="margin-left:50px">Quick Check</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Information;
