import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => setShowCart(true);
  const closeCart = () => setShowCart(false);

  return (
    <div className="App">
      <Header showCart={showCart} onCartClick={openCart} />
      <Products />
      <Cart showCart={showCart} closeCart={closeCart} />
    </div>
  );
}

export default App;
