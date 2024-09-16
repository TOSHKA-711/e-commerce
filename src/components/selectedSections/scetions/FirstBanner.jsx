import React from "react";
import "../style/FirstBanner.css";
import Image from "../../../assets/imgs/Selected products/Image.png";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MemoryIcon from "@mui/icons-material/Memory";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded";
import CameraswitchRoundedIcon from "@mui/icons-material/CameraswitchRounded";
import BatteryCharging20Icon from "@mui/icons-material/BatteryCharging20";

const FirstBanner = () => {
  return (
    <div className="first-banner flex-parent">
      <div className="container flex-container-row">
        <div className="img child flex-container-row">
          <img src={Image}></img>
        </div>
        <div className="content child flex-container-column">
          <h1>Apple iPhone 14 Pro Max</h1>
          <p className="price">$1399</p>
          <div className="colors flex-container-row">
            <p>Select color :</p>
            <div className="color-balls flex-container-row">
              <span className="f"></span>
              <span className="s"></span>
              <span className="th"></span>
              <span className="fo"></span>
              <span className="fi"></span>
            </div>
          </div>
          <div className="storage flex-container-row">
            <p>128GB</p>
            <p>256GB</p>
            <p>512GB</p>
            <p className="active">1TB</p>
          </div>
          <div className="details">
            <div className="child flex-container-row">
              <PhoneAndroidIcon className="icon" />
              <div className="content">
                <p>Screen size</p>
                <h4>6.7"</h4>
              </div>
            </div>
            <div className="child flex-container-row">
              <MemoryIcon className="icon" />
              <div className="content">
                <p>Cpu</p>
                <h4>Apple A16 Bionic</h4>
              </div>
            </div>
            <div className="child flex-container-row">
              <HubRoundedIcon className="icon" />
              <div className="content">
                <p>Number of Cores</p>
                <h4>6</h4>
              </div>
            </div>
            <div className="child flex-container-row">
              <CameraAltRoundedIcon className="icon" />
              <div className="content">
                <p>Main camera</p>
                <h4>48-12 -12 MP</h4>
              </div>
            </div>
            <div className="child flex-container-row">
              <CameraswitchRoundedIcon className="icon" />
              <div className="content">
                <p>Front-camera</p>
                <h4>12 MP</h4>
              </div>
            </div>
            <div className="child flex-container-row">
              <BatteryCharging20Icon className="icon" />
              <div className="content">
                <p>Battery capacity</p>
                <h4>4323 mAh</h4>
              </div>
            </div>
          </div>
          <div className="summary flex-container-row">
            <p>
              Enhanced capabilities thanks toan enlarged display of 6.7
              inchesand work without rechargingthroughout the day. Incredible
              photosas in weak, yesand in bright lightusing the new systemwith
              two cameras more...
            </p>
          </div>
          <div className="buy-btns flex-container-row">
        <button className="btn btn1">ِAdd to Wishlist</button>
        <button className="btn btn2">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstBanner;
