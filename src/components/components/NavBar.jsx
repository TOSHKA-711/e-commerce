import React from "react";
import "../style/NavBar.css";
import logo from "../../assets/imgs/Logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ComputerIcon from "@mui/icons-material/Computer";
import SmartButtonIcon from "@mui/icons-material/SmartButton";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadsetOutlinedIcon from "@mui/icons-material/HeadsetOutlined";
import VideogameAssetOutlinedIcon from "@mui/icons-material/VideogameAssetOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const NavBar = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  useGSAP(() => {
    gsap.from(".logo", {
      x: -20,
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(".nav-search", {
      opacity: 0,
      duration: 1.5,
    });
    gsap.from(".nav-links ", {
      y: 20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
    });
    gsap.from(".nav-icons ", {
      x: 20,
      opacity: 0,
      duration: 1.5,
      stagger: 0.1,
    });
    // gsap.from(".nav-icons ", {
    //   x: 20,
    //   opacity: 0,
    //   duration: 1.5,
    //   stagger: 0.1,
    // });
  });

  return (
    <>
      <div className="navbar flex-parent">
        <div className="container flex-container-row">
          <div className="logo">
            <Link className=" flex-container-row" to="/">
              <img src={logo} />
            </Link>
          </div>
          <div className="nav-search">
            <Box
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label=""
                variant="outlined"
                placeholder="Search"
              />
            </Box>
          </div>
          <div className="nav-links flex-container-row">
            <Link to="/" className="nav-link flex-container-row">
              <p className="active">Home</p>
            </Link>
            <p href="#">About</p>
            <a href="tel:+201228099652">
              <p href="#">Contact Us</p>
            </a>
            <p href="#">Blog</p>
          </div>
          <div className="nav-icons flex-container-row">
            <Link className="flex-container-row" to="/wishList">
              <FavoriteBorderIcon className="icon" />
            </Link>
            <Link className="flex-container-row" to="/cart">
              <ShoppingCartOutlinedIcon className="icon" />
            </Link>
            <Link className="flex-container-row">
              <PermIdentityOutlinedIcon className="icon" />
            </Link>
          </div>
          {toggleNav ? (
            <CloseIcon className="menu-icon" onClick={handleToggleNav} />
          ) : (
            <MenuIcon className="menu-icon" onClick={handleToggleNav} />
          )}
        </div>

        <div
          className={`toggle-layer ${
            toggleNav ? "toggled" : ""
          } flex-parent transition`}
        >
          <div className="container flex-container-column">
            <div className="toggle-nav-links nav-links flex-container-row">
              <Link onClick={handleToggleNav} to="/">
                <p className="active">Home</p>
              </Link>

              <p href="#">About</p>
              <a href="tel:+201228099652">
                <p href="#">Contact Us</p>
              </a>
              <p href="#">Blog</p>
            </div>
            <div className="toggle-nav-search nav-search">
              <Box
                component="form"
                sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label=""
                  variant="outlined"
                  placeholder="Search"
                />
              </Box>
            </div>
          </div>
        </div>
      </div>

      {/* sub nav  */}
      <div className="sub-nav flex-parent">
        <div className="container flex-container-row">
          <div className="child">
            <p>Phones</p>
            <PhoneIphoneIcon />
          </div>
          <div className="child">
            <p>Computers</p>
            <ComputerIcon />
          </div>
          <div className="child">
            <p>Smart Watches</p>
            <SmartButtonIcon />
          </div>
          <div className="child">
            <p>Cameras</p>
            <CameraAltOutlinedIcon />
          </div>
          <div className="child">
            <p>Headphones</p>
            <HeadsetOutlinedIcon />
          </div>
          <div className="child latest">
            <p>Gaming</p>
            <VideogameAssetOutlinedIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
