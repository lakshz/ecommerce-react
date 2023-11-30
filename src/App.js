import { useState } from "react";
import productData from "./data/products.json";

import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import AddProduct from "./components/AddProduct/AddProduct";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState(productData);

  const [showCart, setShowCart] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  const openAddProduct = () => setShowAddProduct(true);
  const closeAddProduct = () => setShowAddProduct(false);

  const handleAddToCart = (productId, productName, productImg) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id === productId
    );
    if (productInCartIndex === -1) {
      setCartItems((prev) => [
        ...prev,
        { id: productId, name: productName, image: productImg, quantity: 1 },
      ]);
    } else {
      const newCartItems = [...cartItems];
      newCartItems[productInCartIndex].quantity += 1;
      setCartItems(newCartItems);
    }
  };

  const handleIncreaseQuantity = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    if (productIndex === -1) return;
    const newCartItems = [...cartItems];
    newCartItems[productIndex].quantity += 1;
    setCartItems(newCartItems);
  };

  const handleDecreaseQuantity = (productId) => {
    const productIndex = cartItems.findIndex((item) => item.id === productId);
    if (productIndex === -1) return;
    let newCartItems = [...cartItems];
    if (newCartItems[productIndex].quantity === 1) {
      newCartItems = newCartItems.filter((item) => item.id !== productId);
    } else {
      newCartItems[productIndex].quantity -= 1;
    }
    setCartItems(newCartItems);
  };

  const handleAddProduct = (productName) => {
    setProducts((prev) => [
      ...prev,
      { id: prev.length + 1, name: productName, image: "default_product.png" },
    ]);
    closeAddProduct();
  };

  return (
    <>
      <Header
        showCart={showCart}
        onCartClick={openCart}
        onAddProductClick={openAddProduct}
      />
      <Products products={products} onAddToCart={handleAddToCart} />
      <Cart
        showCart={showCart}
        closeCart={closeCart}
        cartItems={cartItems}
        onDecQuantity={handleDecreaseQuantity}
        onIncQuantity={handleIncreaseQuantity}
      />
      <AddProduct
        showAddProduct={showAddProduct}
        closeAddProduct={closeAddProduct}
        onAddProduct={handleAddProduct}
      />
    </>
  );
}

export default App;
