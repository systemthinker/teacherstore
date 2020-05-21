import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectShoppingBasket } from '../store/users/selectors'



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

//REMOVE ALL (SINGLE ITEM)
// case "REMOVE_ITEM":
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           basket: [
//             ...state.user.basket.filter(
//               (item, index) => item !== action.payload
//             ),
//           ],
//         },
//       };

//REMOVE COMPLETE BASKET
// case "REMOVE_ITEM":
//   return {
//     ...state,
//     user: {
//       ...state.user,
//       basket: [
//         ...state.user.basket.filter((item, index) => {
//           if (item !== action.payload) {
//             return;
//           }
//         }),
//       ],
//     },
//   };
