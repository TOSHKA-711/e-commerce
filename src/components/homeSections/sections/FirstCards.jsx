import React from "react";
import HomeCard from "../../Items/HomeCArd";
import "../style/FirstCards.css";
import img1 from "../../../assets/imgs/home cards/Iphone 14 pro 1.png";
import img2 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (1).png";
import img3 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (2).png";
import img4 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (3).png";
import img5 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (4).png";
import img6 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (5).png";
import img7 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (6).png";
import img8 from "../../../assets/imgs/home cards/Iphone 14 pro 1 (7).png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../Redux/Slices/CartSlice";


export default function FirstCards() {

const dispatch = useDispatch();
const cartItems = useSelector((state)=>state.CartSlice.CartItems);




  const data = [
    {
      id: 1,
      content: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
      price: 900,
      unitPrice: 900,
      img: img1,
    },
    {
      id: 2,
      content: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 399,
      unitPrice: 399,
      img: img2,
    },
    {
      id: 3,
      content: "AirPods Max Silver",
      price: 549,
      unitPrice: 549,
      img: img3,
    },
    {
      id: 4,
      content: "Samsung Galaxy Watch6 Classic 47mm Black",
      price: 369,
      unitPrice: 369,
      img: img4,
    },
    {
      id: 5,
      content: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
      price: 1799,
      unitPrice: 1799,
      img: img5,
    },
    {
      id: 6,
      content: "Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",
      price: 398,
      unitPrice: 398,
      img: img6,
    },
    {
      id: 7,
      content: "Blackmagic Pocket Cinema Camera 6k",
      price: 2535,
      unitPrice: 2535,
      img: img7,
    },
    {
      id: 8,
      content: "Galaxy Buds FE Graphite",
      price: 99.99,
      unitPrice: 99.99,
      img: img8,
    },
  ];



  const handleAddCart = (item,e)=>{
    dispatch(addItem(item));
    e.target.innerText="Added";
  }
  const handleAddWish = (item)=>{
    dispatch(addItem(item));
   
  }
  const handleRemoveCart = (id)=>{
    dispatch(removeItem(id));
  }
  

  return (
    <div className="cards flex-parent" id="first-cards">
      <div className="container flex-container-column">
        <div className="categories flex-container-row">
          <p className="active">New Arrival</p>
          <p>Bestseller</p>
          <p>Featured Products</p>
        </div>
        <div className="children flex-container-row">
          {data.map((item) => (
            <HomeCard
              key={item.id}
              id={item.id}
              price={item.price}
              unitPrice={item.unitPrice}
              content={item.content}
              img={item.img}
              className="child"
              onAddToCart={(e)=>handleAddCart(item,e)}
              onAddToWish={()=>handleAddWish(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
