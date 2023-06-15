import Navbar from "components/Navbars/AdminNavbar";
import React, { Fragment, useState } from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import "../../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";
import Footer from "components/Footers/Footer";
import ContactUs from "./ContactUs";

const HomePage = () => {
  const [SelectedGallery , selectAGallery] = useState(null)
  const history = useHistory()
  const token = !!localStorage.getItem("Token");
  const handleLogout=() =>{
    localStorage.clear()
    history.push('/login') 
  }

  const loginHandler=()=>{
    console.log('loginHandler Called');
    history.push('/login')

  }
// function to scroll to about section
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('AboutSection');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // function to scroll to resources section
  const handleScrollToResources = () => {
    const resourcesSection = document.getElementById('resourcesSection');
    if (resourcesSection) {
      resourcesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

    // function to scroll to contact us section
    const handleScrollToContactUs = () => {
      const contactSection = document.getElementById('contactUsSection');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };



  // Select the Galllery -------------------------------->

  const checktheValue =(e)=>{
    selectAGallery(e.target.value);
  }
  console.log(SelectedGallery)
  return (
    <Fragment>
      <div  style={{
        backgroundColor:'white',
        zIndex:'-1'
      }}>
    <div
      className="main w-100 vh-100"
      style={{
        backgroundImage: "url(" + require("assets/img/artgallery.jpg") + ")",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        paddingTop: "40px",
      }}
    >
      <div className="home-container">
        <div className="d-flex align-items-center justify-content-between w-100 me-5 ml-5 text-light fs-5">
          <div className="Logo">
            <Link to="#"> ART Gallery </Link>
          </div>
          <div>
            {token ? (
              <>
           
                <button onClick={handleScrollToAbout} type="button" class="btn btn-danger me-5">
                  About Us
                </button>
                <button type="button" class="btn btn-danger me-5" onClick={handleScrollToResources}>
                  Info
                </button>
                <button type="button" class="btn btn-danger me-5" onClick={handleScrollToContactUs}>
                  Contact Us 
                </button>
                <button type="button" class="btn btn-danger me-5" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
              <a href='/login'>

                <button type="button" class="btn btn-danger me-5" onClick={loginHandler}>
                  Log In
                </button>
              </a>
              <a href="/register">

                <button type="button" class="btn btn-danger me-5">
                  Sign Up
                </button>
              </a>
              </>
            )}
          </div>
        </div>
        <div className="text-light mt-12 ml-3 mb-5 banner">
          <p className="banner-text">Explore The Art Around The World !</p>
        </div>
        <select className="select-gallery" id="gallery"  onChange={checktheValue}>
        <option value="">--Please choose an option--</option>
          <option value="artGallery-1" > Art Gallery One</option>
          <option value="artGallery-2" > Art Gallery Two</option>
          <option value="artGallery-3" > Art Gallery Three</option>
          <option value="artGallery-4" > Art Gallery Four</option>
        </select>
        <Link to={`/gallery/${SelectedGallery}`} className={classes.buttn}>
          Explore
        </Link>
      </div>
    </div>
    <div  id='AboutSection' className="mt-4">

    <AboutPage  />
    </div>
    <div id='resourcesSection' className="mt-4">
      <ResourcesPage />
    </div>
    <div id="contactUsSection">
      <ContactUs />
    </div>
    <Footer />
    </div>
    </Fragment>
  );
};

export default HomePage;

