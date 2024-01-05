import React from "react";
import heroImage from "../assets/images/christian-bolt-VW5VjskNXZ8-unsplash.jpg";

const Hero = () => {
  return (
    <div>
      <div className="heroFlex">
        <div className="heroText">
          <h2>MEGA SALE</h2>
          <h2>35% OFFER</h2>
          <h3>
            Discover extraordinary savings on your favorite products during our
            exclusive sale event
          </h3>
          <button>BUY NOW</button>
        </div>
        <img
          src={heroImage}
          alt="woman holding her shirt, from 
      Ian Dooley Unsplash"
        />
      </div>
      <div>
        <h4>FREE SHIPPING</h4>
        <h3>ON ORDERS OVER $55.00</h3>
        <h4>24/7</h4>
        <h3>LIVE SUPPORT</h3>
        <div>
          <h2>50% FLAT OFFER</h2>
          <h3>PRODUCTS</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
