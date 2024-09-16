import React from "react";
import "./items style/PaymentProduct.css";
// import Image from "../../assets/imgs/home cards/Iphone 14 pro 1.png";

const PaymentProduct = ({img,content,price}) => {
  return (
    <div className="pay-product flex-container-row">
      <div className="child flex-container-row">
        <img src={img}></img>
        <p>{content} </p>
      </div>
      <div className="child flex-container-row">
        <p className="price">${price}</p>
      </div>
    </div>
  );
};

export default PaymentProduct;
