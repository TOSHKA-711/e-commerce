import React from "react";
import "../style/HomeIntro.css";
import IphoneImg from "../../../assets/imgs/home Iphone Image.png";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function HomeIntro() {

useGSAP(()=>{
  gsap.from(".img",{
    y : -20,
    opacity : 0,
    duration : 1.5,
  }),
  gsap.from(".home-intro .text",{
    x : -20,
    opacity : 0,
    duration : 1.5,
  })
})

  return (
    <>
      <div className="home flex-parent">
        <div className="container flex-container-column">
          <div className="home-intro flex-container-row">
            <div className="text child flex-container-column">
              <p>Pro.Beyond.</p>
              <h2>
                IPhone 14 <span>Pro</span>{" "}
              </h2>
              <h5>Created to change everything for the better. For everyone</h5>
              <a href="#first-cards">
                <button className="btn">Shop Now</button>
              </a>
            </div>
            <div className="img child">
              <img src={IphoneImg} alt="Iphone 14 Pro" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
