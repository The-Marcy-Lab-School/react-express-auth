import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import './styles/LandingPage.css';
import SammyPhoto from './assets/images/SammyPhoto.png';
import MarvPhoto from './assets/images/MarvPhoto.png';
import MarcyPhoto from './assets/images/MarcyPhoto.png';

function LandingPage() {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="Site">
      <header className="Site-header">
        <h1>Welcome to HealthSync</h1>
        <h2>Mission Statement</h2>
        <p>
          At HealthSync, our mission is to empower individuals in Brooklyn on
          their fitness journey by fostering a community-driven platform focused
          on exercise events, education, and personal growth.
        </p>
        {currentUser ? (
          <>
            <Link to="/community" className="Site-link">
              Community Page
            </Link>
            <Link
              to={`/users/${currentUser.id}`}
              className="Site-link"
              style={{ marginLeft: '10px' }}
            >
              Create Event
            </Link>
          </>
        ) : (
          <Link to="/sign-up" className="Site-link">
            Sign Up
          </Link>
        )}
      </header>

      <div className="bubbles-container">
        <div className="text-bubble">
          <h3>The Problem</h3>
          <p>
            Brooklyn battles obesity rates higher than many NYC areas, a
            challenge HealthSync is eager to address. We understand the unique
            hurdles Brooklynites face in achieving wellness, notably the absence
            of community support and motivation essential for starting and
            maintaining fitness journeys. Many residents find it challenging to
            access reliable information that aligns with their lifestyle,
            complicating efforts to manage weight, caloric intake, and regular
            exercise. HealthSync offers a solution: a platform that brings
            together community support, tailored information, and motivation to
            help you embark on your fitness journey with confidence.
          </p>
        </div>
        <div className="text-bubble">
          <h3>Overview</h3>
          <p>
            HealthSync is a vibrant platform where Brooklyn's community comes
            together to create, explore, and participate in local exercise
            events. It simplifies finding and joining activities with
            comprehensive event details—location, time, and type—enhanced by a
            smart tagging system for easy navigation. Perfect for beginners
            seeking to jumpstart their fitness journey, HealthSync also features
            an educational page rich with exercises filtered by type, equipment
            needs, ensuring tailored workout recommendations. Plus, a
            note-taking and journaling section allows users to track their
            progress and experiences. Dive into HealthSync to connect, stay
            motivated, and find everything you need for your wellness journey in
            one place.
          </p>
        </div>
        <div className="text-bubble">
          <h3>Who We Serve</h3>
          <p>
            Our service is tailored for individuals in Brooklyn who are new to
            fitness, particularly those with little to no prior exercise
            experience or knowledge, offering a nurturing community,
            easy-to-follow guidance, and accessible resources to confidently
            embark on their fitness journey.
          </p>
        </div>
      </div>

      <div className="founders-section">
        <h2>Founders</h2>
        <div className="founders-container">
          <div className="founder">
            <img src={SammyPhoto} alt="Sammy" />
            <p>
              <a
                href="https://www.linkedin.com/in/samuel-pickering-1a0913288/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-link"
              >
                Samuel Pickering
              </a>
            </p>
          </div>
          <div className="founder">
            <img src="/path-to-founder2-image.jpg" alt="Kory the Allegory" />
            <p>
              <a
                href="https://www.linkedin.com/in/kory-telesford-039467177/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-link"
              >
                Kory Telesford
              </a>
            </p>
          </div>
          <div className="founder">
            <img src={MarcyPhoto} alt="Aj" />
            <p>
              <a
                href="https://www.linkedin.com/in/ajenebartonfullstack/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-link"
              >
                Ajene Barton
              </a>
            </p>
          </div>
          <div className="founder">
            <img src={MarvPhoto} alt="Hey Siri" />
            <p>
              <a
                href="https://www.linkedin.com/in/marvin-siri/"
                target="_blank"
                rel="noopener noreferrer"
                className="founder-link"
              >
                Marvin Siri
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
