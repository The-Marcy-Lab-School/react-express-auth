import { useState, useEffect, useContext } from 'react';

import Spline from '@splinetool/react-spline';
import { useWorkoutStore } from '../store/store';
import SammyPhoto from './assets/images/SammyPhoto.png';
import MarvPhoto from './assets/images/MarvPhoto.png';
import MarcyPhoto from './assets/images/MarcyPhoto.png';
import logo from './assets/images/Union.png';
import CurrentUserContext from '../contexts/current-user-context';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import './styles/bar.css';

export default function Workouts() {
  const { workout, setWorkout } = useWorkoutStore((state) => state.workout);
  const counters = [26.6];
  const { currentUser } = useContext(CurrentUserContext);

  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const speed = 9000;

    useEffect(() => {
      const inc = target / speed;
      if (count < target) {
        const timer = setTimeout(() => setCount(Math.ceil(count + inc)), 1);
        return () => clearTimeout(timer);
      }
      setCount(target);
    }, [count, target, speed]);

    return (
      <h1 data-target={target} className="counter text-9xl mt-7">
        {count.toFixed(1)}%
      </h1>
    );
  };

  return (
    <>
      <Navigation currentUser={currentUser} />

      <div>
        <div className="h-screen bg-center bg-no-repeat bg-cover relative bg-red-300">
          <Spline
            className="h-screen bg-center bg-no-repeat bg-cover relative"
            scene="https://prod.spline.design/267PHsT9Kp1A2iJ6/scene.splinecode"
          />

          <h1 className="absolute left-7 bottom-32 text-9xl mb-7">About Our</h1>
          <h1 className="absolute left-7 bottom-12 text-8xl">
            <span className="text-red-600">Website</span>
            <span className="text-black">.</span>
          </h1>
        </div>

        <div className="h-[1000px] bg-white text-lg">
          <div className="relative top-32 left-0 ml-28 font-bold text-2xl w-50">
            <p>So, why did we decide to make this website?</p>
          </div>

          <div className="relative top-44 left-0 ml-28 font-sm text-4xl max-w-[1750px] font-bold leading-loose">
            <h1>
              At HealthSync, our mission is to empower individuals in Brooklyn
              on their fitness journey by fostering a community-driven platform
              focused on exercise events, education, and personal growth.
            </h1>
          </div>

          <div className="relative top-64 left-0 ml-20 font-sm text-3xl leading-loose">
            <img
              className="rounded-sm"
              src="https://images.pexels.com/photos/944690/pexels-photo-944690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt="Smiley face"
              width="900"
              height="900"
            />
          </div>
        </div>
        <div className="h-[1580px] bg-red-100 text-lg">
          <div className="relative top-28 left-0 ml-40 text-lg font-medium w-50">
            <div className="font-medium">
              <p className="text-gray-500 text-2xl">The Problem.</p>
              <h1 className=" text-9xl mt-7 text-red-600">
                {counters.map((target, index) => (
                  <Counter key={index} target={target} />
                ))}
              </h1>
              <p className="text-5xl"> Of Brooklyn is considered obese </p>
              <p className="text-4xl mt-12 leading-loose w-11/12">
                Brooklyn, a vibrant borough in New York City, grapples with
                higher obesity rates compared to many other neighborhoods. At
                HealthSync, we recognize the unique obstacles faced by
                Brooklynites on their wellness journeys. The lack of community
                support and motivation often hinders individuals from
                kickstarting and sustaining their fitness endeavors.
                Additionally, accessing reliable information that aligns with
                their lifestyle can be a challenge.
              </p>
            </div>
          </div>
          <div
            className="relative top-52 mt-8 left-0 font-medium text-2xl"
            style={{
              width: '98vw',
              marginLeft: '-calc((-100vw + 100%) / 2)',
              marginRight: '-calc((-100vw + 100%) / 2)',
            }}
          >
            <section className="early">
              <article>
                <p className="right">
                  A study by the U.S. Centers for Disease Control and Prevention
                  (CDC) revealed an “alarming” increase in obesity among
                  American children and teenagers during the COVID-19 pandemic.
                  Before the pandemic, children who were a healthy weight gained
                  an average of 3.4 pounds per year. However, during the
                  pandemic, this increased to 5.4 pounds. The rate of obesity
                  rose significantly in kids aged 6 to 11, who were more
                  dependent on their parents and may have been affected when
                  schools suspended in-person classes.
                </p>
              </article>
              <article>
                <p className="left">
                  A study released by the National Institute on Aging in 2022
                  highlighted that obesity rates among adults over 65 have
                  doubled since the 1990s. Obesity is now the second leading
                  cause of preventable death in the United States, with an
                  estimated annual toll as high as 400,000.
                </p>

                <p className="right">
                  According to recent state Department of Health figures, nearly
                  59% of adults in Brooklyn are either overweight or obese. This
                  startling statistic has prompted legislative efforts, such as
                  Senator Kirsten Gillibrand’s proposal to ban trans-fats in
                  public schools to combat childhood obesity, which often leads
                  to adult obesity.{' '}
                </p>
              </article>

              <article>
                <marquee behavior="scroll" direction="left">
                  According to recent state Department of Health figures, nearly
                  59% of adults in Brooklyn are either overweight or obese. This
                  startling statistic has prompted legislative efforts, such as
                  Senator Kirsten Gillibrand’s proposal to ban trans-fats in
                  public schools to combat childhood obesity, which often leads
                  to adult obesity.{' '}
                </marquee>

                <marquee behavior="scroll" direction="right">
                  A study by the U.S. Centers for Disease Control and Prevention
                  (CDC) revealed an “alarming” increase in obesity among
                  American children and teenagers during the COVID-19 pandemic.
                  Before the pandemic, children who were a healthy weight gained
                  an average of 3.4 pounds per year. However, during the
                  pandemic, this increased to 5.4 pounds. The rate of obesity
                  rose significantly in kids aged 6 to 11, who were more
                  dependent on their parents and may have been affected when
                  schools suspended in-person classes.
                </marquee>
              </article>
            </section>
          </div>
        </div>

        <div className="h-[580px] bg-white text-lg">
          <div className="mt-10 ml-40">
            <p className="text-gray-500 text-2xl ">Who we Serve.</p>
            <p className="text-4xl mt-5 leading-loose w-11/12">
              Our service is tailored for individuals in Brooklyn who are new to
              fitness, particularly those with little to no prior exercise
              experience or knowledge, offering a nurturing community,
              easy-to-follow guidance, and accessible resources to confidently
              embark on their fitness journey.
            </p>
          </div>

          <div className="relative top-16 left-0 font-sm text-3xl leading-loose ml-20">
            <img
              className="rounded-sm"
              src="https://nationworldnews.com/wp-content/uploads/2023/03/Why-is-the-US-the-most-obese-country-in-the.jpg"
              alt="Smiley face"
              width="500"
              height="500"
            />
          </div>
        </div>

        <div className="h-[100%] bg-red-100 text-lg">
          <div className="mt-28 ml-20 mr-20 font-semibold text-lg w-50 pb-28">
            <p className="text-5xl pt-28 pb-20">Meet the Founders.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 max-w-full">
              <div className="flex flex-col max">
                <div className=" w-full">
                  <img
                    className="rounded-lg"
                    width={'full'}
                    height={'full'}
                    src={MarvPhoto}
                    alt="Sammy"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-link"
                    ></a>
                    Marvin
                  </p>
                  <p className="text-black">
                    Full-Stack Developer &{' '}
                    <span className="text-red-600">Scrum Master</span>
                  </p>
                </div>
              </div>

              <div className="flex flex-col max">
                <div className=" w-full">
                  <img
                    className="rounded-lg"
                    width={'full'}
                    height={'full'}
                    src={SammyPhoto}
                    alt="Sammy"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-link"
                    ></a>
                    Sammuel
                  </p>
                  <p className="text-black">Full-Stack Developer</p>
                </div>
              </div>

              <div className="flex flex-col max">
                <div className=" w-full">
                  <img
                    className="rounded-lg"
                    width={'full'}
                    height={'full'}
                    src={MarcyPhoto}
                    alt="Sammy"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-link"
                    ></a>
                    Aj
                  </p>
                  <p className="text-black">Full-Stack Developer</p>
                </div>
              </div>

              <div className="flex flex-col max">
                <div className=" w-full">
                  <img
                    className="rounded-lg"
                    width={'full'}
                    height={'full'}
                    src={logo}
                    alt="Sammy"
                  />
                </div>
                <div className="flex flex-col text-center">
                  <p>
                    <a
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      className="founder-link"
                    ></a>
                    K
                  </p>
                  <p className="text-black">Full-Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
