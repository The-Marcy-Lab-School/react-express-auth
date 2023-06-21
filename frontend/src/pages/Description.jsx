// import React, { useState } from 'react';

// function Description() {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const openModal = () => {
//       setIsModalOpen(true);
//     };

//     const closeModal = () => {
//       setIsModalOpen(false);
//     };
  
//     return (
//       <div>
//         <button onClick={openModal}>Description</button>
//         <Modal
//           isOpen={isModalOpen}
//           onRequestClose={closeModal} >
//           <div class="modal">
//             <div class="modal-background"></div>
//             <div class="modal-content">
//               {/* <!-- Any other Bulma elements you want --> */}
//             </div>
//             <button class="modal-close is-large" aria-label="close"></button>
//           </div>
//           <button onClick={closeModal}>Close Modal</button>
//         </Modal>
//       </div>
//     );
//   }

//   export default Description