import React, { useState } from "react";
import "./items style/cartItem.css";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { updateItemQuantity } from "../../Redux/Slices/CartSlice";

const CartItem = ({ id, img, content, price,unitPrice, onAdd, onRemove }) => {
  const [itemNum, setItemNum] = useState(1);


  const dispatch = useDispatch();

  const handleNumberChange = (operation) => {
    let newItemNum = itemNum;

    if (operation === "+") {
      newItemNum = itemNum + 1;
    } else if (operation === "-" && itemNum > 1) {
      newItemNum = itemNum - 1;
    }

    setItemNum(newItemNum);

    dispatch(updateItemQuantity({ id, unitPrice , quantity: newItemNum }));
  };

  return (
    <div className="cart-item flex-container-row">
      <div className="cart-item-image">
        <img src={img} alt="item image" />
      </div>
      <div className="cart-item-name">
        <h4>{content}</h4>
      </div>

      <div className="cart-item-number flex-container-row">
        <p onClick={() => handleNumberChange("-")} className="decrease">
          -
        </p>
        <span>{itemNum}</span>
        <p onClick={() => handleNumberChange("+")} className="increase">
          +
        </p>
        <h5 className="price">${price.toFixed(2)}</h5>
        <CloseIcon className="icon" onClick={onRemove} />
      </div>
    </div>
  );
};

export default CartItem;
