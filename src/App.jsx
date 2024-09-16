import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import "./App.css";
import Cart from "./components/components/Cart";
import Footer from "./components/components/Footer";
import Home from "./components/components/Home";
import NavBar from "./components/components/NavBar";
import Payment from "./components/components/Payment";
import SelectedProduct from "./components/components/SelectedProduct";
import WishList from "./components/components/WishList";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>

      <NavBar />
      <Routes>
        <Route path="/e-commerce/" element={<Home />} />
        <Route path="/e-commerce/selectedProduct" element={<SelectedProduct />} />
        <Route path="/e-commerce/payment" element={<Payment />} />
        <Route path="/e-commerce/cart" element={<Cart />} />
        <Route path="/e-commerce/wishList" element={<WishList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
