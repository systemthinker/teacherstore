import React from "react";
import { Link } from "react-router-dom";
import { selectUsers } from "../store/users/selectors";
import { useSelector } from "react-redux";
import './header.css'

export default function Header() {
  const users = useSelector(selectUsers);
  

  return (
    <div>
      <header className="header">
        <Link to="/">
          <button>Home</button>
        </Link>
        Hallo {users.map((user)=>{
            return<p key={user.id}>{user.name}</p>
        })}
        <Link to="/cart">
          <button>Cart</button>
        </Link>
        <p>Shoppingcart contains {users[0].basket.length} items</p>
      </header>
    </div>
  );
}
