import React, { useState } from "react";
import "./items style/HomeCard.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch } from "react-redux";
import { addWish, removeWish } from "../../Redux/Slices/WishListSlice";
import { addItem } from "../../Redux/Slices/CartSlice";

const WishItem = ({
  img,
  price,
  unitPrice,
  content,
  id,
  onAddToCart,
  onRemove,
}) => {
  const [liked, setLiked] = useState(true);
  const [payload, setPayload] = useState({
    id: id,
    img: img,
    price: price,
    unitPrice: unitPrice,
    content: content,
  });

  const dispatch = useDispatch();

  const handleRemoveWish = () => {
    dispatch(removeWish(id));
    setLiked(false); // Update liked state
  };
  const handleAddToCart = (e) => {
    dispatch(addItem(payload));
    e.target.innerText = "Added";
  };

  return (
    <div className="home-card">
      <div className="container flex-container-column">
        <div className="child heart">
          {liked ? (
            <FavoriteOutlinedIcon
              className="liked"
              onClick={handleRemoveWish}
            />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </div>
        <div className="child image">
          <img src={img} alt="Product" />
        </div>
        <div className="child content">{content}</div>
        <div className="child price">${price}</div>
        <button className="btn" onClick={(e)=>handleAddToCart(e)}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default WishItem;
