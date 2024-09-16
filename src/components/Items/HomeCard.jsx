import React, { useState } from "react";
import "./items style/HomeCard.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import { useDispatch } from "react-redux";
import { addWish, removeWish } from "../../Redux/Slices/WishListSlice";

const HomeCard = ({ img, price, unitPrice, content, onAddToCart, id }) => {
  const [liked, setLiked] = useState(false);
  const [payload, setPayload] = useState({
    id: id,
    img: img,
    price: price,
    unitPrice: unitPrice,
    content: content,
  });

  const handleLike = () => {
    setLiked(!liked);
    if (liked) {
      dispatch(removeWish(id));
    } else {
      dispatch(addWish(payload));
    }
  };

  const dispatch = useDispatch();

  return (
    <div className="home-card">
      <div className="container flex-container-column">
        <div className="child heart" onClick={handleLike}>
          {liked ? (
            <FavoriteOutlinedIcon className="liked" />
          ) : (
            <FavoriteBorderOutlinedIcon />
          )}
        </div>
        <div className="child image">
          <img src={img} alt="Product" />
        </div>
        <div className="child content">{content}</div>
        <div className="child price">${price}</div>
        <button className="btn" onClick={onAddToCart}>
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default HomeCard;
