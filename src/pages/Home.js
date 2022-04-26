import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/benth.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}> Car Rental </h1><br />
        <p>CAR AT A CLICK</p>
        <Link to="/cars">
          <button> BOOK NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
