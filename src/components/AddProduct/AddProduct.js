import { useState } from "react";
import Modal from "../UI/Modal";

import "./AddProduct.css";

function AddProduct({ showAddProduct, closeAddProduct, onAddProduct }) {
  const [productName, setProductName] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (productName.trim().length === 0) return;
    onAddProduct(productName);
    setProductName("");
  };

  return (
    <Modal show={showAddProduct} onClose={closeAddProduct}>
      <div className="add-product-container">
        <p className="add-product-heading">Add Product</p>
        <form onSubmit={handleSubmit} className="add-product-form">
          <label htmlFor="productName" className="form-label">
            Enter Product Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={productName}
            onChange={handleProductNameChange}
            className="form-input"
          />
          <button type="submit" className="submit-button">
            Add Product
          </button>
        </form>
      </div>
    </Modal>
  );
}

export default AddProduct;
