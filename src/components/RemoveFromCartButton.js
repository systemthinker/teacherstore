import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShoppingBasket } from '../store/selectors'



export default function RemoveFromCartButton() {
  const dispatch = useDispatch();

  const userBasket = useSelector(selectShoppingBasket);
  function removeFromCart() {
    const action = {
      type: "REMOVE_ITEM",
      payload: 9,
    };
    dispatch(action);

    return console.log("werktdit", userBasket);
  }
  return (
    <div>
      <button onClick={removeFromCart}>Remove from cart</button>
    </div>
  );
}
