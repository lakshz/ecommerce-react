import Modal from "../UI/Modal";

function Cart({ showCart, closeCart }) {
  return (
    <Modal show={showCart} onClose={closeCart}>
      Hello from cart
    </Modal>
  );
}

export default Cart;
