import React, { useEffect, useState } from "react";
import "../style/Cart.css";
import CartItem from "../Items/CartItem";
import AltImg from "../../assets/imgs/cart_16545412.png";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../Redux/Slices/CartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartSlice.CartItems);
  const [cartItemsFull, setCartItemsFull] = useState(false);

  console.log(cartItems);

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    if (cartItems.length > 0) {
      setCartItemsFull(true);
    } else {
      setCartItemsFull(false);
    }
  }, [cartItems]);

  return (
    <div className="cart flex-parent">
      {cartItemsFull ? (
        <div className="container flex-container-row">
          <div className="products child flex-container-column">
            <div className="title">
              <h2>Shopping Cart</h2>
            </div>

            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  content={item.content}
                  img={item.img}
                  price={item.price}
                  unitPrice={item.unitPrice}
                  onAdd={() => handleAddItem(item)}
                  onRemove={() => handleRemoveItem(item.id)}
                />
              );
            })}
          </div>
          <div className="summary child flex-container-column">
            <div className="title ">
              <h2>Order Summary</h2>
            </div>
            <div className="inputs ">
              <TextField
                fullWidth
                label="Discount code / Promo code"
                id="fullWidth"
              />
              <TextField
                fullWidth
                label="Your bonus Card Number"
                id="fullWidth"
              />
            </div>
            <div className="total child ">
              <span>
                <p>Subtotal</p>
                <h4>
                  $
                  {cartItems
                    .reduce((acc, item) => acc + item.price, 0)
                    .toFixed(2)}
                </h4>
              </span>

              <span>
                <p>Estimated Tax</p>
                <h4>$50</h4>
              </span>
              <span>
                <p>Estimated Shipping & Handling</p>
                <h4>$29</h4>
              </span>
              <span>
                <p className="final">Total</p>
                <h4>
                  ${" "}
                  {cartItems
                    .reduce((acc, item) => acc + item.price, 79)
                    .toFixed(2)}
                </h4>
              </span>
            </div>
            <Link className=" flex-container-row" to="/payment">
              <button className="btn">Checkout</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="alt-img flex-parent">
          <h1>Empty cart !</h1>
          <img src={AltImg}></img>
        </div>
      )}
    </div>
  );
};

export default Cart;
