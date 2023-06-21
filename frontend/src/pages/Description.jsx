import React, { useState } from 'react';

function Description() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
      setIsModalOpen(true);
    };

    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <div>
        <button onClick={openModal}>Description</button>
  
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal} >
          <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
                <p class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
                </p>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
            </div>
          <button onClick={closeModal}>Close Modal</button>
        </Modal>

      </div>
    );
  }

  export default Description