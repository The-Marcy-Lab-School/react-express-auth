import React from 'react';
import { NavLink } from 'react-router-dom';
import Spline from '@splinetool/react-spline';
import logo from '../pages/assets/images/Group_1.png';
import '../pages/styles/bar.css'
import './styles/hoverA.css'


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
        <div className='w-50 h-50'>
            <img className="fixed rounded-sm z-50 -top-5 left-20" src={logo} alt="Smiley face 2" width="140" height="140" />
        </div>

        <div className='navigation'>
            <div className="fixed -translate-y-3">
                <img className="absolute rounded-sm ml-24 mt-5" src={logo} alt="Smiley face" width="72" height="72" />
            </div>

            <div className='h-full w-full bg-center bg-no-repeat bg-cover relative'>
                <div className="ham-btn" onClick={showNav}>
                    <span className="rounded-sm"></span>
                    <span className="rounded-sm"></span>
                 </div>
                 <div className=' h-full w-[98.8%]'>
                    <Spline className="spline h-full w-full " scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />
                 </div>

            </div>
           
            <div className="links ">
                <div className="link"  onMouseOver={() => showSpline("community")} onMouseOut={() => showSpline("community")}>
                  <NavLink to="/community" >Events</NavLink>
                </div>
                <div className="link-2" onMouseOver={() => showSpline("workouts")} onMouseOut={() => showSpline("workouts")}>
                 <NavLink  to="/workouts">Workouts</NavLink>
                </div>
                <div className="link-3" onMouseOver={() => showSpline("profile")} onMouseOut={() => showSpline("profile")}>
                 {currentUser && <NavLink  to={`/users/${currentUser.id}`}>Profile</NavLink>}
                </div>
                <div className="link-4" onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")}>
                  <NavLink  to="/about">About</NavLink>
                </div>
                <div className="link-5" onMouseOver={() => showSpline("about")} onMouseOut={() => showSpline("about")}>
                  <NavLink  to="/">Home</NavLink>
                </div>
            </div>
            </div>
    </div>
   
  );
};

export default Navigation;
