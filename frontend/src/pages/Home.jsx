import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function HomePage() {
  return (
    <Parallax pages={4}>
      {/* Background Image */}
      <ParallaxLayer style={{ backgroundImage: `url("https://cdn.dribbble.com/users/2213143/screenshots/7971141/media/184cdea9758c029d9feef05432222403.gif")`, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* Welcome Content */}
      <ParallaxLayer offset={0} speed={0.5} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '100px' }}>
        <div style={{ textAlign: 'right', alignItems: 'center', display: 'flex'}}>
          <div>
          <h1>Welcome to our website</h1>
          </div>
          <div>
            <br />
           <h2>Please work</h2>
           </div>
           <p>I'm not</p>
          </div>
      </ParallaxLayer>
      {/* Trying My Best Content */}
      <ParallaxLayer offset={1} speed={0.5}>
        <h2>I'm trying my best lol</h2>
      </ParallaxLayer>
      </ParallaxLayer>
    </Parallax>
      
      
  )
}




