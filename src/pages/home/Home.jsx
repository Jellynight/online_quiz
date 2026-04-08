/** @format */
import React from "react";
import { Link } from "react-router-dom";
import "./home.css"
function Home() {
 return (
  <div className="home_container">
   <header className="header">
    <h1 className="welcome">
     Welcome to Quiz<span>IQ</span>u
    </h1>
   </header>
   <h2 className="button_banner">
    To start, go to options and select your preferences.
   </h2>
   <Link to="/options" className="start-btn">Quiz Options</Link>
   <br></br>
   <h3>Click to lean about me and why I built the project!</h3>
   <br></br>
   <Link to="/about" className="about-btn">About</Link>
  </div>
 );
}

export default Home;
