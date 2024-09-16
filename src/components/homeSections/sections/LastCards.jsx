import React from "react";
import HomeCard from "../../Items/HomeCard";
import "../style/LastCards.css";
import img1 from "../../../assets/imgs/home cards/last card 1.png";
import img2 from "../../../assets/imgs/home cards/last card 2.png";
import img3 from "../../../assets/imgs/home cards/last card 3.png";
import img4 from "../../../assets/imgs/home cards/last card 4.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../../Redux/Slices/CartSlice";

export default function LastCards({ title }) {
  const data = [
    {
      id: 9,
      content: "Apple iPhone 14 Pro 512GB Gold (MQ233)",
      price: 1437,
      unitPrice: 1437,
      img: img1,
    },
    {
      id: 10,
      content: "AirPods Max Silver",
      price: 549,
      unitPrice: 549,
      img: img2,
    },
    {
      id: 11,
      content: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
      price: 399,
      unitPrice: 399,
      img: img3,
    },
    {
      id: 12,
      content: "Apple iPhone 14 Pro 1TB Gold (MQ2V3)",
      price: 1499,
      unitPrice: 1499,
      img: img4,
    },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.CartSlice.CartItems);

const handleAddToCart = (e,item) => {
  dispatch(addItem(item));
  e.target.innerText="Added";
}


  return (
    <div className="cards flex-parent">
      <div className="container flex-container-column">
        <div className="categories flex-container-row">
          <p>{title}</p>
        </div>
        <div className="children flex-container-row">
          {data.map((product) => (
            <HomeCard
              key={product.id}
              price={product.price}
              unitPrice={product.unitPrice}
              content={product.content}
              img={product.img}

              onAddToCart={(e)=>handleAddToCart(e,product)}
              className="child"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
