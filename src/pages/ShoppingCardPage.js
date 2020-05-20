import React from "react";
import Header from "../components/Header";
import { selectUsers } from "../store/selectors";
import ShoppingBasketCard from "../components/ShoppingBasketCard";

export default function ShoppingCartPage() {
  return (
    <div>
      <Header />
      <h1>Shoppingspreeee</h1>
      <ShoppingBasketCard />
    </div>
  );
}
