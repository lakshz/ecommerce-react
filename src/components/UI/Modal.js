import React from "react";
import "./Modal.css";
import { createPortal } from "react-dom";

const Modal = ({ children, show, onClose }) => {
  if (!show) {
    return null;
  }

  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
