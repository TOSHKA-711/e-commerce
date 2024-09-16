import React from "react";
import "../style/Payment.css";
import imageCard from "../../assets/imgs/Credit Card.png";
import PageRoutes from "../selectedSections/scetions/PageRoutes";
import PaymentProduct from "../Items/PaymentProduct";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const Payment = () => {
  const CartItems = useSelector((state) => state.CartSlice.CartItems);

  return (
    <>
      <div className="payment flex-parent">
        <div className="container flex-container-column">
          <PageRoutes address="Payment" />
          <div className="content flex-container-row">
            <div className="summary child flex-container-column">
              <div className="title">Summary</div>

              {CartItems.map((item) => {
                return (
                  <PaymentProduct
                    key={item.id}
                    content={item.content}
                    price={item.price}
                    img={item.img}
                  />
                );
              })}

              <div className="details flex-container-column">
                <p className="title">Address</p>
                <p>1131 Dusty Townline, Jacksonville, TX 40322</p>
                <p className="title">Shipment method</p>
                <p>Free</p>
              </div>
              <div className="cost flex-container-column">
                <span>
                  <p>Subtotal</p>
                  <p>${
                    CartItems.reduce((acc , item)=> acc + item.price , 0)
                  }</p>
                </span>
                <span>
                  <p>Estimated Tax</p>
                  <p>$50</p>
                </span>
                <span>
                  <p>Estimated Shipping & Handing</p>
                  <p>$50</p>
                </span>
                <span>
                  <p className="final">Total</p>
                  <p>${
                    CartItems.reduce((acc , item)=> acc + item.price , 100)
                  }</p>
                </span>
              </div>
            </div>
            <div className="pay child flex-container-column">
              <div className="title">Payment</div>
              <div className="catalogs flex-container-row">
                <p className="active">Credit Card</p>
                <p>paypal</p>
                <p>paypal credit</p>
              </div>
              <div className="credit-img">
                <img src={imageCard} alt="card"></img>
              </div>
              <Box sx={{ width: "100%", maxWidth: "100%" }}>
                <TextField fullWidth label="Cardholder Name" id="fullWidth" />
                <TextField fullWidth label="Card Name" id="fullWidth" />
                <div className="inputs flex-container-row">
                  <TextField fullWidth label="Exp Date" id="fullWidth" />
                  <TextField fullWidth label="CVV" id="fullWidth" />
                </div>
              </Box>
              <div className="pay-btns flex-container-row">
                <button className="btn btn1">Back</button>
                <button className="btn btn2">Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
