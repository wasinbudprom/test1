import React, { useState } from "react";
import "./Modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>เปิด Modal</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <p>นี่คือเนื้อหาของ Modal</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
