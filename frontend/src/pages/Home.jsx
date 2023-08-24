import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function HomePage() {
  return (
    <Parallax pages={4}>
      <ParallaxLayer speed={1} style={{ backgroundImage: `url("https://cdn.dribbble.com/users/2213143/screenshots/7971141/media/184cdea9758c029d9feef05432222403.gif")`,  display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={1.5} style={{  justifyContent: 'flex-end' }}>
          <div>
          <h1>Welcome to our website</h1>
        <div>
          <h2>Please work</h2>
        </div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5}>
        <h2>I'm trying my best lol</h2>
      </ParallaxLayer>
    </Parallax>
  )
}
