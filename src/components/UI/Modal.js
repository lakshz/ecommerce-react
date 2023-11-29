import React from "react";
import "./Modal.css";

const Modal = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
