import React, { useContext, useState, useEffect, useRef  } from 'react';
import { Link,  useNavigate, Navigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
// import './styles/LandingPage.css';
import './styles/landingpage2.css'
// import './styles/ball.scss'
import SammyPhoto from './assets/images/SammyPhoto.png';
import MarvPhoto from './assets/images/MarvPhoto.png';
import MarcyPhoto from './assets/images/MarcyPhoto.png';

import Spline from '@splinetool/react-spline';
import style from './styles/popup2.css'
import Form from '../components/formloginandout'


const Landing2 = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [visitedBefore, setVisitedBefore] = useState(false);
  const [activeTab, setActiveTab] = useState('events');


  useEffect(() => {
    const hasVisitedBefore = localStorage.getItem('visitedBefore');
    if (hasVisitedBefore) {
      setVisitedBefore(true);
    } else {
      localStorage.setItem('visitedBefore', 'true');
    }
  }, []);

  const blackDivRef = useRef();

  const startFuncs = () => {
    const timer = setTimeout(() => {
      blackDivRef.current.classList.add('fade-out');
      document.querySelector('.move-me').classList.add('move-me-start');
    }, 1000);
    return () => clearTimeout(timer);
  }

  startFuncs();
 


  const handleClick = () => {
    blackDivRef.current.classList.add('fade-out');
    document.querySelector('.move-me').classList.add('move-me-start');

    // const timer = setTimeout(() => {
    //   blackDivRef.current.classList.add('hidden');
    // }, 8000);
    // return () => clearTimeout(timer);
  };
  
  
  
  const [animationCompleted, setAnimationCompleted] = useState(false);

  useEffect(() => {
    if (animationCompleted) {
      console.log('Animation completed!');
      blackDivRef.current.classList.add('hidden');
    }
  }, [animationCompleted]);

  const handleAnimationEnd = () => {
    setAnimationCompleted(true);
  };

  const modalBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const modal = document.querySelector('.modal');
    const modalWrap = document.querySelector('.modal-wrap');

    const openModal = () => {
      modal.style.opacity = 1;
      modal.style.pointerEvents = 'auto';
      modalWrap.style.opacity = 1;
      modalWrap.style.transform = 'scale(1)';
    }

    const closeModal = () => {
      modal.style.opacity = 0;
      modal.style.pointerEvents = 'none';
      modalWrap.style.opacity = 0;
      modalWrap.style.transform = 'scale(0.6)';
    }

    const modalBtn = modalBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (modalBtn) {
      modalBtn.addEventListener('click', openModal);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    return () => {
      if (modalBtn) {
        modalBtn.removeEventListener('click', openModal);
      }

      if (closeBtn) {
        closeBtn.removeEventListener('click', closeModal);
      }
    };
  }, []); 

    const textOptions = [
      'Welcome to Health Sync!',
      'Stay healthy and synced!',
      'Your health, our priority!',
    ];

    const [randomText, setRandomText] = useState('');

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * textOptions.length);
      setRandomText(textOptions[randomIndex]);
  
      const interval = setInterval(() => {
        const newIndex = (randomIndex + 1) % textOptions.length;
        setRandomText(textOptions[newIndex]);
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }, []); 

    const textOptions22 = [
      'You came back! Im proud of you!',
      'Another work out?',
      'Youre doing amazing, keep going!',
    ];

    const [randomText2, setRandomText2] = useState('');

    useEffect(() => {
      const randomIndex = Math.floor(Math.random() * textOptions22.length);
      setRandomText2(textOptions22[randomIndex]);
  
      const interval = setInterval(() => {
        const newIndex = (randomIndex + 1) % textOptions22.length;
        setRandomText2(textOptions22[newIndex]);
      }, 5000);

      return () => {
        clearInterval(interval);
      };
    }, []); 

    const navigate = useNavigate();

    const handleClick2 = () => {
      navigate('/community');

    };

  return (
    <div className="p-0">

      <div class="section full-height">
        {/* <button id="modal-btn" class="modal-btn">Open Modal <i class="uil uil-expand-arrows"></i></button> */}
          <div class="modal">    
            <div class="modal-wrap"> 
              <button ref={closeBtnRef} id="close-btn"> X </button>
                <Form />
            </div>
          </div>
        </div>

      
        <div class="move-me">
            <img src="https://th.bing.com/th/id/R.08fd7b34ffdb61ed1cfae2cec5f0b1e8?rik=PlMfMNLrZFdIBQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fred_cross_logo.png&ehk=edF%2fR1nH05RapyGxme3UnxfKMgkN6Bo2cRtVg2Lka30%3d&risl=&pid=ImgRaw&r=0" alt="Girl in a jacket" width="80" height="80" />
        </div>

        <div className="black" id="black-div" onTransitionEnd={handleAnimationEnd} ref={blackDivRef} onClick={handleClick}> </div>


        <div className="relative flex flex-col items-center justify-center h-screen">
          <Spline scene="https://prod.spline.design/JvPhrjIbn8g8tMx1/scene.splinecode" />
          {/* <img className='absolute z-0' src="https://th.bing.com/th/id/R.08fd7b34ffdb61ed1cfae2cec5f0b1e8?rik=PlMfMNLrZFdIBQ&riu=http%3a%2f%2flofrev.net%2fwp-content%2fphotos%2f2016%2f06%2fred_cross_logo.png&ehk=edF%2fR1nH05RapyGxme3UnxfKMgkN6Bo2cRtVg2Lka30%3d&risl=&pid=ImgRaw&r=0" alt="Girl in a jacket" width="300" height="300" /> */}
          {/* <h1 className="text-8xl font-bold mr-28 z-10">Health</h1>
          <h1 className="text-8xl font-bold ml-28 mb-10 z-10">Sync</h1> */}
        
          <div className='absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center'>
            {visitedBefore ? (
              <h2 className='text-xl z-10 font-semibold'>{randomText2}</h2>
            ) : (
              <h2 className='text-2xl z-10'>{randomText}</h2>
            )}
            
            {currentUser ? (
              <div className='flex items-center justify-center text-white w-36 z-10 mt-5'>
                <button onClick={handleClick2} className='button w-full h-12 font-bold'>Jump Back In </button>
              </div>
            ) : (
              <div className='flex items-center justify-center text-white w-36 z-10 mt-5'>
              <button ref={modalBtnRef} id="modal-btn" className='button w-full h-12 font-bold'>Join Us</button>
              </div>
            )}
           
          </div>
        </div>
        {/* <h2>Mission Statement</h2>
        <p>At HealthSync, our mission is to empower individuals in Brooklyn on their fitness journey by fostering a community-driven platform focused on exercise events, education, and personal growth.</p>

      */}



    </div>
  );
}

export default Landing2;