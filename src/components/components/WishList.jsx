import React, { useEffect, useState } from "react";
import "../style/WishList.css";
import WishImg from "../../assets/imgs/wishlist_9460174.png";
import { useDispatch, useSelector } from "react-redux";
import WishItem from "../Items/WishItem";

const WishList = () => {
  const [wishListFull, setWishListFull] = useState(false);
  const dispatch = useDispatch();
  const wishItems = useSelector((state) => state.WishSlice.wishList);




  // const handleRemoveItem = (id) => {
  //   dispatch(removeItem(id));
  // };

  useEffect(() => {
    if (wishItems.length === 0) {
      setWishListFull(false);
    } else {
      setWishListFull(true);
    }

    console.log(wishItems);
  }, [wishItems]);



  return (
    
    <div className="wish-list  flex-parent">
      {wishListFull ? (
        <div className="container flex-container-row">
          <div className="cards flex-parent">
            <div className="container flex-container-column">
              <div className="categories flex-container-row">
                <h1>WishList</h1>
              </div>
              <div className="children flex-container-row">
                {wishItems.map((product) => (
                  <WishItem
                    key={product.id}
                    id={product.id}
                    price={product.price}
                    unitPrice={product.unitPrice}
                    content={product.content}
                    img={product.img}
                    onAddToCart={(e) => handleAddToCart(e, product)}
         
                    className="child"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="alt-wishList flex-parent">
          <h2>Wishlist is empty !</h2>
          <img src={WishImg}></img>
        </div>
      )}
    </div>
  );
};

export default WishList;
