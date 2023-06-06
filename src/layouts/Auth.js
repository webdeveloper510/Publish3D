import React, { useContext, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Login from "views/auth/Login.js";
import Register from "views/auth/Register.js";
import Forgot from "views/auth/Forgot";
import Gallery from "components/Artgallery/artGalery";

// Art Gallery
// import HomeView from "components/userHomePage/HomePage";
import HomePage from "components/userHomePage/HomePage";
import AboutPage from "components/userHomePage/AboutPage";
import { contextObject } from "components/context/ContextAPI";
const Token = !!localStorage.getItem("Token")
// const Token = localStorage.setItem("Token" , 12345)
export default function Auth() {

  const ctx=useContext(contextObject)
  
  let endPoint;

  useEffect(() => {
   const url = window.location.href;
    const endpointArr = url.split('/')

    console.log(url,'<=====================');

     endPoint=endpointArr[endpointArr.length-1];

    console.log(endpointArr[endpointArr.length-1],'END POINT<<<==========');  // Output: "/login"
  }, []);

return (
  <>
    {!ctx.isToken ? 
    <>
    <main>
      <section className={`${
          endPoint==='login' ? 'relative w-full h-full py-40' : ''
        }`}>
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage:
              "url(" + require("assets/img/register_bg_2.png") + ")",
              zIndex:'-2'
          }}
        ></div>
        <Switch>
        <Route path="/home" exact component={HomePage}/>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Redirect from="/" to="/home" />
        </Switch>
       {endPoint==='login' && <FooterSmall absolute />}
      </section>
    </main>

    </>
    :
    <>
    <Switch>
    <Route path="/home" exact component={HomePage}/>
   
      <Route path="/forgot" exact component={Forgot} />
      <Route path="/gallery" exact component={Gallery}/>
      <Redirect from="/" to="/home" />
    </Switch>
    </>
}
  </>
);
}
