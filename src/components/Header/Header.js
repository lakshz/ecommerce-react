import React from "react";
import "./Header.css";

function Header({ onCartClick }) {
  return (
    <header className="header">
      <h1>My React Store</h1>
      <button className="cart-button" onClick={onCartClick}>
        Cart
      </button>
    </header>
  );
}

export default Header;
