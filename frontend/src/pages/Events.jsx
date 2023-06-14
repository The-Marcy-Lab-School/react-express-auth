import EventForm from "../components/EventForm"
import { useState } from 'react'
const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div>
        <button className='button' onClick={openModal}>Create Event</button>
        <h1>Events Page</h1>
      </div>
      <EventForm isOpen={isModalOpen} onClose={closeModal}/>
    </>
  )
}

export default Events
