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
   <h3 className="button_banner">
    To start first select your quiz preferences.
   </h3>
   <Link to="/options" className="start-btn">Quiz Options</Link>
  </div>
 );
}

export default Home;
