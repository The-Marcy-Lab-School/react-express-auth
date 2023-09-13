import React, { useState } from 'react';
import './PrettyModal.css'; // Import your custom CSS for styling

function PrettyModal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="pretty-modal-container">
      <button onClick={openModal} className="open-modal-button">
        Open Modal
      </button>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal-button" onClick={closeModal}>
              Close
            </button>
            <h2 className="modal-title">Pretty Modal</h2>
            <p className="modal-text">
              This is a simple and pretty modal. You can customize the styling
              to make it look even better.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PrettyModal;
