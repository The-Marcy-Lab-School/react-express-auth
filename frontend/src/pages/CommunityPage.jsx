import { useState, useEffect, useContext } from 'react';
import Spline from '@splinetool/react-spline';
import { destroyEvent } from '../adapters/event-adapter';
import { fetchJoinedEvents } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context';
import Event from '../components/Event';
import EventForm from '../components/EventForm';
import { useEventsStore, useHotStore } from '../store/store';
import Navigation from '../components/Navigation';
import './styles/popup.css';
import Footer from '../components/Footer';

export default function CommunityPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [joinedEvents, setJoinedEvents] = useState({});
  const { events, setRecentEvents, filterEvents, setUserEvents } =
    useEventsStore((state) => state);
  const { hotEvent, setHotEvent } = useHotStore((state) => state);

  // loading all events
  useEffect(() => {
    if (currentUser) {
      setRecentEvents();
      setUserEvents(currentUser.id);
    }
  }, [currentUser]);

  // populating hashmap of events joined by user
  const loadJoinedEvents = async () => {
    if (currentUser) {
      const signedEvents = await fetchJoinedEvents(currentUser.id);
      const obj = {};
      signedEvents.forEach((event) => {
        obj[event.id] = true;
      });
      setJoinedEvents(obj);
    }
  };

  useEffect(() => {
    loadJoinedEvents();
  }, [currentUser]);

  const deleteEvent = async (ev_id) => {
    destroyEvent({ event_id: ev_id });
    setRecentEvents();
  };

  // logic for setting a hot event
  useEffect(() => {
    if (events[0]) {
      const max = events.reduce((a, b) =>
        a.attendee_count > b.attendee_count ? a : b
      );
      setHotEvent(max);
    }
  }, [events]);

  // search filter for events based on location
  const onFilter = (event) => {
    if (event.target.value.trim().length) {
      filterEvents(event.target.value);
    } else {
      setRecentEvents();
    }
  };

  const myDialogModal = document.querySelector('#dialogModal');
  const myOpenModalBtn = document.querySelector('#openModalBtn');
  const myCloseModalBtn = document.querySelector('#closeModalBtn');

  if (myDialogModal) {
    myOpenModalBtn &&
      myOpenModalBtn.addEventListener('click', () => myDialogModal.showModal());

    myCloseModalBtn &&
      myCloseModalBtn.addEventListener('click', () => myDialogModal.close());
  }

  const styles2 = {
    background: 'linear-gradient(225deg, #fed7aa, #eab308)',
    boxShadow: '-11px 11px 18px #cacaca, 11px -11px 18px #f6f6f6',
  };

  return (
    <>
      <div className="flex">
        <dialog id="dialogModal" className="modalev">
          <h1 className="text-xl font-bold text-center">Create an Event</h1>
          {currentUser ? (
            <EventForm
              id={currentUser.id}
              loadUserEvents={() => setRecentEvents()}
            />
          ) : (
            <div>Loading...</div>
          )}

          <button id="closeModalBtn" className="modalev-close-btn text-xl">
            X
          </button>
        </dialog>
      </div>

      <Navigation currentUser={currentUser} />

      <div className="h-[380px] bg-center bg-no-repeat bg-cover relative bg-orange-200">
        <Spline
          className="h-screen bg-center bg-no-repeat bg-cover relative"
          scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode"
        />

        <h1 className="absolute left-7 bottom-28 text-8xl mb-7">
          Excercise with
        </h1>
        <h1 className="absolute left-7 bottom-24 text-4xl">
          <span className="text-orange-600">Others</span>
          <span className="text-black">.</span>
        </h1>

        <div className="absolute left-0 -bottom-1">
          <div
            className="p-8 w-full bg-white"
            style={{
              clipPath: 'polygon(93% 0, 0% 0%, 0% 100%, 100% 100%)',
              width: '58vw',
            }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative w-96 h-16 mt-9 border border-gray-200 shadow-md bg-white rounded-full">
          <input
            onChange={onFilter}
            className="absolute inset-0 m-3 ml-5 outline-none text-base"
            type="text"
            placeholder="Location..."
          />
          <button
            className="absolute inset-y-0 right-0 w-14 h-5/6 mt-1 rounded-full bg-transparent border-none outline-none"
            type="submit"
            name="searchQuerySubmit"
          >
            <div className="w-10 h-10 m-2 bg-orange-200 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#ffff"
                  d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className="mt-8 h-0.5  w-full   bg-gray-100"></div>

      <div className="h-full">
        <div className="grid grid-cols-4 left-0 h-4/5 ml-7">
          {hotEvent && (
            <div className="mt-8 mb-10" style={{ border: '3px solid red' }}>
              <Event
                key={hotEvent.id - 800}
                deleteEvent={() => deleteEvent(hotEvent.id)}
                event={hotEvent}
                loadJoinedEvents={loadJoinedEvents}
                joinedEvents={joinedEvents}
              />
            </div>
          )}
        </div>

        <div className="grid grid-cols-4 left-0 h-4/5 ml-7 mb-28">
          {currentUser && console.log(currentUser.id)}
          {events[0] &&
            events.map((event) => (
              <Event
                key={event.id - 800}
                deleteEvent={() => deleteEvent(event.id)}
                event={event}
                loadJoinedEvents={loadJoinedEvents}
                joinedEvents={joinedEvents}
              />
            ))}
        </div>

        <div className="relative">
          <button
            style={styles2}
            id="openModalBtn"
            className="fixed bottom-5 right-5 mb-4 mr-4 text-5xl bg-orange-200 hover:bg-orange-500 text-white font-bold py-6 px-8 rounded-full z-50"
          >
            <p className="text-center"> + </p>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
