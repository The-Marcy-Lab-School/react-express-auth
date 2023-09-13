import React from 'react';
import './cards.css';

function MyCard() {
  return (
    <div className="container">
      <div className="card">
        <div className="title">
          <h1>Umur Köse</h1>
          <h2>"Frontend Developer"</h2>
        </div>
        <div className="content">
          <div className="social">
            <i className="fab fa-codepen"></i>
            <a href="https://codepen.io/umurkose/" target="_blank">
              codepen.io/umurkose
            </a>
          </div>

          <div className="social">
            <i className="fab fa-linkedin"></i>
            <a href="https://www.linkedin.com/in/bada55-umurkose" target="_blank">
              linkedin.com/in/umurkose
            </a>
          </div>

          <div className="social">
            <i className="fas fa-globe-europe"></i>
            <a href="https://umurkose.com" target="_blank">
              umurkose.com
            </a>
          </div>
        </div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default MyCard;
