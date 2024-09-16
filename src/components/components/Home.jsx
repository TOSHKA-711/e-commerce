import React from "react";
import Banner from "../homeSections/sections/Banner2";
import FirstCards from "../homeSections/sections/FirstCards";
import HomeCategories from "../homeSections/sections/HomeCategories";
import HomeIntro from "../homeSections/sections/HomeIntro";
import LastCards from "../homeSections/sections/LastCards";
import Posters from "../homeSections/sections/Posters";
import SecondCards from "../homeSections/sections/SecondCards";
import "../style/Home.css";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <>
     
      <HomeIntro />
      <Posters />
      <HomeCategories />
      <FirstCards />
      <SecondCards/>
      <LastCards title="Discounts up to -50%"/>
      <Banner/>
    </>
  );
}
