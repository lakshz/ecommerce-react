import React from "react";
import "./Header.css";

function Header({ onCartClick, onAddProductClick }) {
  return (
    <header className="header">
      <h1>My React Store</h1>
      <div>
        <button
          className="yellow-button"
          onClick={onAddProductClick}
          style={{ marginRight: "20px" }}
        >
          Add Product
        </button>
        <button className="yellow-button" onClick={onCartClick}>
          Cart
        </button>
      </div>
    </header>
  );
}

export default Header;
