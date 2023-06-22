
import React from 'react';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Button from 'react-bootstrap/Button';

const WelcomeButton = () => {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(-150px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 900 },
  });

  return (
    
    <section id="button">
      <div className="home-container">
      <animated.div style={fadeAnimation}>
        <h1>Money.Money.Money</h1>
        <br></br>
        <h2>Embark on a shared journey towards financial prosperity</h2>
        {/* <animated.div style={fadeAnimation}> */}
        <br />
          <Button variant="primary">
            <Link to="/about" className="btn-get-started scrollto">
              Welcome
            </Link>
          </Button>
        </animated.div>
      </div>
    </section>
  );
};

export default WelcomeButton;


    