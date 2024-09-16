import React from "react";
import LastCards from "../homeSections/sections/LastCards";
import Details from "../selectedSections/scetions/Details";
import FirstBanner from "../selectedSections/scetions/FirstBanner";
import PageRoutes from "../selectedSections/scetions/PageRoutes";
import "../style/SelectedProduct.css";

const SelectedProduct = () => {
  return (
    <div className="selected-product flex-parent">
      <div className="container flex-container-column">
        <PageRoutes address="Iphone 14 Pro Max"/>
        <FirstBanner />
        <Details/>
        <LastCards title="Related Products"/>
      </div>
    </div>
  );
};

export default SelectedProduct;
