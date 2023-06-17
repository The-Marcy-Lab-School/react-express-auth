import EventForm from "../components/EventForm"
import { getAllEvents } from "../adapters/events-adapter";
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
const Events = () => {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    currentUser ? setIsModalOpen(true) : navigate('/login')
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents().then(setEvents);
  }, []);

  const navigate = useNavigate()

  return (
    <>
      <div>
        <h1 className='title has-text-centered'>Events</h1>
        <div className='is-flex is-justify-content-center mb-5'>
          <button className='button' onClick={openModal}>Create Event</button>
        </div>
        <div>
          {
            events.map((event) => <>
              <div className='box eventBox'>
                <div>
                  <h1 className='title'>{event.title}</h1>
                  <p>{event.borough}</p>
                  <p>{event.location}</p>
                  <p>{event.start_date === event.end_date ? event.start_date.substring(0, 10) : event.start_date.substring(0, 10) + ' - ' + event.end_date.substring(0, 10)}</p>
                  <p>{event.start_time + ' - ' + event.end_time}</p>
                </div>
                <div className='cardSec2'>
                  <button className='button is-primary'>Join Event</button>
                </div>
                <div>
                  <h1 className='is-size-5 has-text-weight-bold mt-4'>Description</h1>
                  <p>{event.description}</p>
                </div>
              </div>
            </>)
          }
        </div>
        {/* <ul>
          {
            events.map((event) => <>
              <li key={event.id}>{
                event.title
              }</li>
              <li>{
                event.description
              }</li>
            </>)
          }
        </ul> */}

      </div>
      <EventForm isOpen={isModalOpen} onClose={closeModal} />
    </>
  )
}

export default Events
