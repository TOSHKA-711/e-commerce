import React from "react";
import "../style/Details.css"

const Details = () => {
  return (
    <div className="details-sec flex-parent">
      <div className="container flex-container-column">
        <div className="detail flex-container-column bar">
          <h3 className="title">Details</h3>
          <p className="content">
            Just as a book is judged by its cover, the first thing you notice
            when you pick up a modern smartphone is the display. Nothing
            surprising, because advanced technologies allow you to practically
            level the display frames and cutouts for the front camera and
            speaker, leaving no room for bold design solutions. And how good
            that in such realities Apple everything is fine with displays. Both
            critics and mass consumers always praise the quality of the picture
            provided by the products of the Californian brand. And last year's
            6.7-inch Retina panels, which had ProMotion, caused real admiration
            for many.
          </p>
        </div>
        <div className="screen bar">
          <div className="title">
            <h3>Screen</h3>
          </div>
          <div className="content">
            <span>
              <p>Screen diagonal</p>
              <p>6.7"</p>
            </span>
            <span>
              <p>The screen resolution</p>
              <p>2796x1290</p>
            </span>
            <span>
              <p>The screen refresh rate</p>
              <p>120 Hz</p>
            </span>
            <span>
              <p>The pixel density</p>
              <p>460 ppi</p>
            </span>
            <span>
              <p>Screen type</p>
              <p>OLED</p>
            </span>
        
          </div>
        </div>
        <div className="cpu bar">
          <div className="title">
            <h3>CPU</h3>
          </div>
          <div className="content">
            <span>
              <p>CPU</p>
              <p>A16 Bionic</p>
            </span>
            <span className="last">
              <p>Number of cores</p>
              <p>6</p>
            </span>
          </div>
        </div>
        <button className="btn">View More </button>
      </div>
    </div>
  );
};

export default Details;
