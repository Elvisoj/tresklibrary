import React, { useState } from "react";
import assets from "../assets/assets";
import { UseAccountContext } from "../config/AccountContext";

function HomeSlide() {
  const { session } = UseAccountContext();
  const slide = [
    assets.main_1,
    assets.main_2,
    assets.main_3,
    assets.main_4,
    assets.main_5,
    assets.main_6,
    assets.main_7,
    assets.main_8,
    assets.main_9,
  ];
  const index = Math.floor(Math.random() * slide.length - 1);
  const [bg, setBg] = useState(slide[index]);

  const handleClick = () => {
    console.log("HomeSlideRef");
  };
  return (
    <div className="home-slides">
      <img className="overlay-image" src={bg} alt="" />
      <div className="home-slides-wrapper">
        <div className="slides container">
          <h3>
            Empowering students with easy access to academic resources and
            personal guidance — from PDFs and past questions to one-on-one
            tutoring. Learn smarter, grow faster.
          </h3>
          <h2>Hello {session.user.user_metadata.name}</h2>
          <h1>Tresk Lib</h1>
          <button className="btn" onClick={handleClick}>
            Search Library ➡️
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSlide;
