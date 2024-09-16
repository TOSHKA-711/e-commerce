import React from "react";
import "../style/PageRoutes.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const PageRoutes = ({address}) => {
  return (
    <div className="selected-routes flex-parent">
      <div className="container flex-container-row">
        <p>Home</p>
        <p>
          {" "}
          <KeyboardArrowRightIcon />{" "}
        </p>
        <p>Catalog</p>
        <p>
          {" "}
          <KeyboardArrowRightIcon />{" "}
        </p>
        <p className="active">{address}</p>
      </div>
    </div>
  );
};

export default PageRoutes;
