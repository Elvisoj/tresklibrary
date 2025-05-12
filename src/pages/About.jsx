import React from "react";
import "../style/about.css";
import assets from "../assets/assets";

function About() {
  return (
    <div className="about">
      <div className="about-wrapper">
        <div className="about-us">
          <div className="about-us-wrapper">
            <h1>TRESK LIBRAY...</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda molestias nihil reiciendis sequi. Similique quis maxime
              ipsam, cum at officiis voluptates sapiente rem soluta repellat
              quidem atque expedita? Obcaecati explicabo autem saepe odit quae
              repudiandae eos illum. Voluptates exercitationem culpa fugit
              placeat, aperiam, quasi esse at cum consequuntur quod aspernatur.
            </p>
          </div>
        </div>

        <div className="about-us">
          <div className="about-us-wrapper">
            <h1>ABOUT US...</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda molestias nihil reiciendis sequi. Similique quis maxime
              ipsam, cum at officiis voluptates sapiente rem soluta repellat
              quidem atque expedita? Obcaecati explicabo autem saepe odit quae
              repudiandae eos illum. Voluptates exercitationem culpa fugit
              placeat, aperiam, quasi esse at cum consequuntur quod aspernatur.
            </p>
          </div>
        </div>

        <div className="testimonies">
          <h1>Testimonies...</h1>
          <div className="testimonies-wrapper">
            <div className="testimonies-feed">
              <img src={assets.user_icon} />
              <div className="info">
                <h2>Oghumu Peter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  omnis ipsam non tenetur. Totam quasi quis ratione? Vitae, vero
                  voluptates.
                </p>
              </div>
            </div>

            <div className="testimonies-feed">
              <img src={assets.user_icon} />
              <div className="info">
                <h2>Oghumu Peter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  omnis ipsam non tenetur. Totam quasi quis ratione? Vitae, vero
                  voluptates.
                </p>
              </div>
            </div>

            <div className="testimonies-feed">
              <img src={assets.user_icon} />
              <div className="info">
                <h2>Oghumu Peter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  omnis ipsam non tenetur. Totam quasi quis ratione? Vitae, vero
                  voluptates.
                </p>
              </div>
            </div>

            <div className="testimonies-feed">
              <img src={assets.user_icon} />
              <div className="info">
                <h2>Oghumu Peter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  omnis ipsam non tenetur. Totam quasi quis ratione? Vitae, vero
                  voluptates.
                </p>
              </div>
            </div>

            <div className="testimonies-feed">
              <img src={assets.user_icon} />
              <div className="info">
                <h2>Oghumu Peter</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  omnis ipsam non tenetur. Totam quasi quis ratione? Vitae, vero
                  voluptates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
