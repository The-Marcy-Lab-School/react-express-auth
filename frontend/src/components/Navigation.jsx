import React from 'react';
import { NavLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import logo from '../pages/assets/images/Union.png';


const Navigation = ({ currentUser}) => {

    const showNav = () => {
        const navigationElement = document.getElementsByClassName("navigation")[0];
        navigationElement.classList.toggle("active");
        const ham = document.getElementsByClassName("ham-btn")[0];
        ham.classList.toggle("bg-orange-200");
        
      }
    
      const showSpline = (value) => {
        // var spline = document.createElement('div');
        // spline.className = "h-screen bg-center bg-no-repeat bg-cover relative";
        // spline.innerHTML = '<Spline scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />';
        // document.body.appendChild(spline);
        const navigationElement = document.getElementsByClassName("navigation")[0];
        // const splineElement = document.getElementsByClassName("spline")[0];
        // console.log(splineElement.className); 
        // splineElement.classList.toggle("hidden")
        console.log("test")
        switch (value) {
          case 'about':
            navigationElement.classList.toggle("bg-red-300");
            break;
          case 'community':
            navigationElement.classList.toggle("bg-orange-300");
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          case 'workouts':
            navigationElement.classList.toggle("bg-green-300");
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          case 'profile':
              navigationElement.classList.toggle("bg-blue-200");
              // Expected output: "Mangoes and papayas are $2.79 a pound."
              break;
          default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
    
    
        
      }
  
  return (
    <div className='flex flex-row'>
        <div>
            <img className="fixed rounded-sm z-50 left-24 top-2" src={logo} alt="Smiley face 2" width="72" height="72" />
        </div>

        <div className='navigation'>
            <div className="fixed -translate-y-3">
                <img className="absolute rounded-sm ml-24 mt-5" src={logo} alt="Smiley face" width="72" height="72" />
                <Spline className="spline h-screen bg-center bg-no-repeat bg-cover relative" scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />
            </div>
            <div>
                <div className="ham-btn" onClick={showNav}>
                    <span className="rounded-sm"></span>
                    <span className="rounded-sm"></span>
                 </div>
            </div>
           
            <div className="links">
                <div className="link">
                <NavLink onMouseOver={() => showSpline("community")} onMouseOut={() => showSpline("community")} to="/community">Events</NavLink>
                </div>
                <div className="link">
                <NavLink onMouseOver={() => showSpline("workouts")} onMouseOut={() => showSpline("workouts")} to="/workouts">Workouts</NavLink>
                </div>
                <div className="link">
                {currentUser && <NavLink onMouseOver={() => showSpline("profile")} onMouseOut={() => showSpline("profile")} to={`/users/${currentUser.id}`}>Profile</NavLink>}
                </div>
                <div className="link">
                <NavLink onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")} to="/about">About</NavLink>
                </div>
            </div>
            </div>
    </div>
   
  );
};

export default Navigation;
