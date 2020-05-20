import React from "react";
import { Link } from "react-router-dom";
import { selectUsers } from "../store/selectors";
import { useSelector } from "react-redux";
import './header.css'

export default function Header() {
  const user = useSelector(selectUsers);

  return (
    <div>
      <header className="header">
        <Link to="/">
          <button>Home</button>
        </Link>
        <p>Hallo {user.name}</p>
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        <p>Shoppingcart contains {user.basket.length} items</p>
      </header>
    </div>
  );
}
