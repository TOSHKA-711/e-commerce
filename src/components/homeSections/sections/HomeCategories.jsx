import React from "react";
import "../style/HomeCategories.css";
import WatchIcon from "@mui/icons-material/Watch";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";

export default function HomeCategories() {
  return (
    <div className="home-cats flex-parent">
      <div className="container flex-container-column">
        <div className="title">Browse By Category</div>
        <div className="childs flex-container-row">
          <div className="child flex-container-column">
            <PhoneAndroidIcon className="icon" />
            <p>Phones</p>
          </div>
          <div className="child flex-container-column">
            <WatchIcon className="icon" />
            <p>Smart Watches</p>
          </div>
          <div className="child flex-container-column">
            <CameraAltOutlinedIcon className="icon" />
            <p>Cameras</p>
          </div>
          <div className="child flex-container-column">
            <HeadphonesOutlinedIcon className="icon" />
            <p>Headphones</p>
          </div>
          <div className="child flex-container-column">
            <DesktopWindowsOutlinedIcon className="icon" />
            <p>Computers</p>
          </div>
          <div className="child flex-container-column">
            <VideogameAssetOutlinedIcon className="icon" />
            <p>Gaming</p>
          </div>
        </div>
      </div>
    </div>
  );
}
