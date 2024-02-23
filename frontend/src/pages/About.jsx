import Paginations from '../components/Pagination';
import WorkoutsForm from '../components/WorkoutsForm';
import { useWorkoutStore } from '../store/store';
import FormExercisePlace from '../components/FormExercisePlace';
import imgParallax from './assets/images/img_parallax.jpg';
import { useState, useEffect } from 'react'; 
import SammyPhoto from './assets/images/SammyPhoto.png';
import MarvPhoto from './assets/images/MarvPhoto.png';
import MarcyPhoto from './assets/images/MarcyPhoto.png';
import logo from './assets/images/Union.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CurrentUserContext from '../contexts/current-user-context';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import Spline from '@splinetool/react-spline';

export default function Workouts() {
  const { workout, setWorkout } = useWorkoutStore((state) => state.workout);
  const counters = [26.6];
  const { currentUser } = useContext(CurrentUserContext);

  
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const speed =9000; 
    
  
    useEffect(() => {
      const inc = target / speed;
      if (count < target) {
        const timer = setTimeout(() => setCount(Math.ceil(count + inc)), 1);
        return () => clearTimeout(timer);
      } else {
        setCount(target);
      }
    }, [count, target, speed]);
  
    return <h1 data-target={target} className='counter text-9xl mt-7'>{count.toFixed(1)}%</h1>;
  };

  return (
    
    <>

		  <Navigation currentUser={currentUser} />
      
      <div>
      {/* {backgroundImage: `url(${imgParallax})`, backgroundAttachment: 'fixed'} */}
   

      {/* style={ {backgroundColor: '#ff6961'}} */}
           <div className="h-screen bg-center bg-no-repeat bg-cover relative bg-red-300" >

           <div class="relative top-20 left-0 ml-24 font-semibold text-2xl">
              <p>About</p>
            </div>
          
           <Spline className="h-screen bg-center bg-no-repeat bg-cover relative" scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode" />

        
           
           {/* transform translate-x-2 translate-y-28 */}
           
              <h1 className="absolute left-7 bottom-32 text-9xl mb-7">About Our</h1>
              <h1 className="absolute left-7 bottom-12 text-8xl">
                <span className="text-red-600">Website</span>
                <span className="text-black">.</span>
              </h1>

           </div>
           {/* bg-red-500 */}
            <div className="h-[1000px] bg-white text-lg">
              <div class="relative top-32 left-0 ml-40 font-semibold text-lg w-50">
                <p>So, why did we decide to make this website?</p>
                <p className='text-base mt-2'>What issue are we trying to solve?</p>
              </div>

              <div class="relative top-44 left-0 ml-40 font-sm text-3xl leading-loose">
                <h1> At HealthSync, our mission is to empower individuals in Brooklyn on their fitness journey by fostering a community-driven platform focused on exercise events, education, and personal growth. </h1>
              </div>

              <div class="relative top-64 left-0 ml-20 font-sm text-3xl leading-loose">
                <img class="rounded-sm" src="https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Smiley face" width="900" height="900" />
              </div>
            </div>
            <div className="h-[1000px] bg-red-100 text-lg">
            <div class="relative top-28 left-0 ml-40 text-lg font-medium w-50">
                {/* <img class="rounded-sm" src="https://cdn0.iconfinder.com/data/icons/fat-obese-overweight-woman-stick-figure/251/fat-obese-obesity-woman-12-1024.png" alt="Smiley face" width="52" height="40" /> */}
                <div className='font-medium'>
                  <p className='text-gray-500 text-base'>The Problem.</p>
                  <h1 className='counter text-9xl mt-7 text-red-600'>  
                    {counters.map((target, index) => (
                      <Counter key={index} target={target} />
                    ))} 
                  </h1>
                  <p className='text-5xl'> Of Brooklyn is considered obese </p>
                  <p class="text-lg mt-12 leading-loose w-11/12">Brooklyn, a vibrant borough in New York City, grapples with higher obesity rates compared to many other neighborhoods. At HealthSync, we recognize the unique obstacles faced by Brooklynites on their wellness journeys. The lack of community support and motivation often hinders individuals from kickstarting and sustaining their fitness endeavors. Additionally, accessing reliable information that aligns with their lifestyle can be a challenge.</p>
                </div>
              
                {/* <p className='text-8xl mt-2'>OBEsity</p> */}
              
                
              </div>
              <div className='relative top-12 left-0 font-medium' style={{ width: '99vw',
                  marginLeft: '-calc((-100vw + 100%) / 2)',
                  marginRight: '-calc((-100vw + 100%) / 2)',  }}>
                  <section class="early">
                  <article>
                    <p class="right">A study by the U.S. Centers for Disease Control and Prevention (CDC) revealed an “alarming” increase in obesity among American children and teenagers during the COVID-19 pandemic. Before the pandemic, children who were a healthy weight gained an average of 3.4 pounds per year. However, during the pandemic, this increased to 5.4 pounds. The rate of obesity rose significantly in kids aged 6 to 11, who were more dependent on their parents and may have been affected when schools suspended in-person classes.</p>
                  </article>
                  <article>
                    <p class="left">A study released by the National Institute on Aging in 2022 highlighted that obesity rates among adults over 65 have doubled since the 1990s. Obesity is now the second leading cause of preventable death in the United States, with an estimated annual toll as high as 400,000.</p>
                    
                    <p class="right">According to recent state Department of Health figures, nearly 59% of adults in Brooklyn are either overweight or obese. This startling statistic has prompted legislative efforts, such as Senator Kirsten Gillibrand’s proposal to ban trans-fats in public schools to combat childhood obesity, which often leads to adult obesity. </p>
                  </article>

                  <article>
                    <marquee behavior="scroll" direction="left">According to recent state Department of Health figures, nearly 59% of adults in Brooklyn are either overweight or obese. This startling statistic has prompted legislative efforts, such as Senator Kirsten Gillibrand’s proposal to ban trans-fats in public schools to combat childhood obesity, which often leads to adult obesity.</marquee>

                    <marquee behavior="scroll" direction="right">A study by the U.S. Centers for Disease Control and Prevention (CDC) revealed an “alarming” increase in obesity among American children and teenagers during the COVID-19 pandemic. Before the pandemic, children who were a healthy weight gained an average of 3.4 pounds per year. However, during the pandemic, this increased to 5.4 pounds. The rate of obesity rose significantly in kids aged 6 to 11, who were more dependent on their parents and may have been affected when schools suspended in-person classes. </marquee>
                  </article>
              
                  </section>
                </div>
              
            </div>

            <div className="h-[580px] bg-white text-lg">
              <div className='mt-10 ml-40'>
                <p className='text-gray-500 text-base '>Who we Serve.</p>
                <p class="text-2xl mt-5 leading-loose w-11/12">Our service is tailored for individuals in Brooklyn who are new to fitness, particularly those with little to no prior exercise experience or knowledge, offering a nurturing community, easy-to-follow guidance, and accessible resources to confidently embark on their fitness journey.</p>
              </div>
             
              <div class="relative top-16 left-0 font-sm text-3xl leading-loose ml-20">
                <img class="rounded-sm" src="https://nationworldnews.com/wp-content/uploads/2023/03/Why-is-the-US-the-most-obese-country-in-the.jpg" alt="Smiley face" width="500" height="500" />
              </div>
            </div>

            <div className="h-[100%] bg-red-100 text-lg">
              <div class="relative top-32 left-0 ml-40 font-semibold text-lg w-50">
                <p className='text-5xl mb-20'>Meet the Founders.</p>
                {/* <p className='text-base mt-2'>What issue are we trying to solve?</p> */}
                <div class="flex flex-col">
                  <div class="flex">
                    <div class="w-1/2">
                      <img className='rounded-lg' src={MarvPhoto} alt="Sammy" />
                    </div>
                    <div class="w-1/2">
                      <p><a href="" target="_blank" rel="noopener noreferrer" class="founder-link ml-8"></a>Marvin</p>
                      <p class="text-black ml-8">
                          Full-Stack Developer & <span class="text-red-600">Team Lead</span>
                      </p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-1/2 left-0">
                      <p><a href="" target="_blank" rel="noopener noreferrer" class="founder-link"></a>Samuel</p>
                      <p class="text-black">Full-Stack Developer</p>
                    </div>
                    <div class="w-1/2 ml-auto">
                      <img className='rounded-lg' src={SammyPhoto} alt="" />
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-1/2">
                      <img className='rounded-lg' src={MarcyPhoto} alt="Aj" />
                    </div>
                    <div class="w-1/2">
                      <p><a href="" target="_blank" rel="noopener noreferrer" class="founder-link ml-8"></a>Aj</p>
                      <p class="text-black ml-8">Full-Stack Developer</p>

                    </div>
                  </div>
                </div>

              </div>
{/* 
              <div class="relative top-44 left-0 ml-40 font-sm text-3xl leading-loose">
                <h1> At HealthSync, our mission is to empower individuals in Brooklyn on their fitness journey by fostering a community-driven platform focused on exercise events, education, and personal growth. </h1>
              </div> */}

             
            </div>

            <Footer />
          
      </div>

      {/* <FormExercisePlace /> */}
    </>
  );
}
