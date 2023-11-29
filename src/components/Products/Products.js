import React from "react";
import productsData from "../../data/products.json";
import "./Products.css";

export function Product({ id, name, image }) {
  return (
    <div key={id} className="product">
      <img src={require(`../../assets/${image}`)} alt={name} />
      <div className="product-name">{name}</div>
      <button>Add to cart</button>
    </div>
  );
}

function Products() {
  return (
    <div className="products-container">
      {productsData.map((product) => (
        <Product id={product.id} name={product.name} image={product.image} />
      ))}
    </div>
  );
}

export default Products;
