import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShoppingBasket } from '../store/selectors'



export default function AddToCartButton() {
  const dispatch = useDispatch();

  const userBasket = useSelector(selectShoppingBasket);
  function addToCart() {
    const action = {
      type: "ADD_ITEM",
      payload: 9,
    };
    dispatch(action);
  }
  return (
    <div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}
