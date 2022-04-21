import React from "react";
import MultiplePizzas from "../assets/buggati.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          From this website you can book any branded car at a low cost.
         There are many cars with different models. And you can  contact us for advance booking and for any queries.
         And there is 24/7 services are available from our side. Book your car and have a great fun ride. And you can touch 
         with us by social websites like facebook, instagram and twitter. You can get any branded cars 
         including forigen cars, sports cars, luxury cars and everything.

        </p>
      </div>
    </div>
  );
}

export default About;
