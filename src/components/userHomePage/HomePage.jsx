import Navbar from "components/Navbars/AdminNavbar";
import React, { Fragment } from "react";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import "../../App.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AboutPage from "./AboutPage";
import ResourcesPage from "./ResourcesPage";
import Footer from "components/Footers/Footer";

const HomePage = () => {
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
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100 me-5 ml-5 text-light fs-5">
          <div className="Logo">
            <Link to="#"> ART Gallery </Link>
          </div>
          <div>
            {token ? (
              <>
              {/* <Link to='/about'> */}
                <button onClick={handleScrollToAbout} type="button" class="btn btn-danger me-5">
                  About Us
                </button>
              {/* </Link> */}
                <button type="button" class="btn btn-danger me-5" onClick={handleScrollToResources}>
                  Resources
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
        <Link to="/gallery" className={classes.buttn}>
          Explore
        </Link>
      </div>
    </div>
    <div  id='AboutSection'>

    <AboutPage  />
    </div>
    <div id='resourcesSection'>
      <ResourcesPage />
    </div>
    <Footer />
    </div>
    </Fragment>
  );
};

export default HomePage;

