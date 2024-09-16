import React, { useEffect, useRef } from "react";
import "../style/Posters.css";
import ps5Img from "../../../assets/imgs/PlayStation.png";
import headPhoneImg from "../../../assets/imgs/headphone.png";
import appleVision from "../../../assets/imgs/apple vision.png";
import macImg from "../../../assets/imgs/MacBook Pro 14.png";
import headphone2 from "../../../assets/imgs/home cards/last card 2.png";
import appleVision2 from "../../../assets/imgs/home cards/image 36.png";
import ps5Img2 from "../../../assets/imgs/home cards/PlayStation.png";
import macImg2 from "../../../assets/imgs/home cards/Screen.png";



export default function Posters() {
  return (
    <div className="posters flex-parent">
      <div className="container">
        <div className="poster ps5">
          <img  src={ps5Img} className="big" />
          <img src={ps5Img2} className="small" />
          <div  className="poster-info">
            <h2>Playstation 5</h2>
            <p>
              Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
              will redefine your PlayStation experience.
            </p>
          </div>
        </div>
        <div className="poster head-phone">
          <img src={headPhoneImg} className="big" />
          <img src={headphone2} className="small" />
          <div className="poster-info">
            <h2>
              Apple
              <br /> AirPods <span>Max</span>{" "}
            </h2>
            <p>Computational audio. Listen, it's powerful</p>
          </div>
        </div>
        <div className="poster vision">
          <img src={appleVision} className="big" />
          <img src={appleVision2} className="small" />
          <div className="poster-info">
            <h2>
              Apple
              <br /> Vision <span>Pro</span>{" "}
            </h2>
            <p>An immersive way to experience entertainment</p>
          </div>
        </div>
        <div className="poster mac">
          <img src={macImg} className="big" />
          <img src={macImg2} className="small" />
          <div className="poster-info">
            <h2>
              Macbook <span>Air</span>{" "}
            </h2>
            <p>
              The new 15‑inch MacBook Air makes room for more of what you love
              with a spacious Liquid Retina display.
            </p>
            <a href="#first-cards">
              <button className="btn">Shop Now</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
