import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/Businessman-amico.png";
import Navbar from "./Navbar";
import Cookies from "js-cookie";
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate();

  const uploadAadharFrontImg = (event) => {
    event.preventDefault()

  }

  const frontImageUploadOnChange = (event) => {
    console.log('upload', event.target.value)

  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    window.location.href = "/login";

    // navigate("/", { replace: true })
  }
  // else if (jwtToken) {
  //   window.location.href = "/home";
  // }

  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">Character Check</h1>
          <p className="primary-text">
            Please use below button to Upload Aadhaar or Pan card
          </p>
          <form onSubmit={uploadAadharFrontImg}>
            <div>
              <label>
                <span class="csv-file">
                  Upload Aadhar Front Image</span>
                <input
                  id="pricingMat"
                  type="file"
                  size="60"
                  accept=".png,.jpeg"
                  onChange={frontImageUploadOnChange}

                />
                {/* <div class="file-name d-flex flex-wrap">
                                        {{ pricingMatrixFileNames }}
                                    </div> */}
              </label>
            </div>
            <button
              // disabled="frontImageBtnStatus"
              type="submit"
              class="btn btn-primary btn-common rounded-pill save mt-4"
            >
              {/* <span v-if="importPricingSaveButton">
                                    Saving...
                                </span> */}
              <span> Save </span>
            </button>
          </form>

          <button className="secondary-button">Submit</button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div >
      {/* <Display />
      <Footer /> */}
    </div >
  );
};

export default Home;
