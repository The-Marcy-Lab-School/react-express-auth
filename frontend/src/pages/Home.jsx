import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function HomePage() {
  return (
    <Parallax pages={4} style={{ backgroundColor: "#fbf4d4"}}>
      {/* Background Image */}
      <ParallaxLayer offset={0.05} style={{ backgroundImage: `url("https://cdn.dribbble.com/users/2213143/screenshots/7971141/media/184cdea9758c029d9feef05432222403.gif")`, display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      {/* Welcome Content */}
      <ParallaxLayer offset={0} speed={0.05} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '100px' }}>
        <div style={{display: 'flex', textAlign: 'right', alignItems: 'center', flexDirection: 'column', paddingRight: '100px' }}>
          <div>
          <h1>Welcome to our website</h1>
          </div>
          <div>
            <br />
           <h2>Please work</h2>
           </div>
           <p>I'm not</p>
           <div>
          <button> Get Start</button>
          </div>
          </div>
      <ParallaxLayer offset={1}  speed={0.5} style={{ backgroundColor: "#ff965e",  backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: "#ff965e",  backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h1 style={{ color: 'white' }} >Mission Statement</h1>
          <h2 style={{ color: 'white' }} > Mission stuff goes here to show that we attempting our best</h2>
        </div>
      </ParallaxLayer>
      </ParallaxLayer>
      {/* Trying My Best Content */}

      <ParallaxLayer offset={2} speed={0.5} style={{ backgroundImage: `url(https://cdn.dribbble.com/users/1129235/screenshots/10972507/media/aceb35a835198886faeaa8fa5e0836fb.gif)`, display: 'flex', textAlign: 'right', alignItems: 'center', backgroundPosition: "right", width: "50%" }}>
        <h2>I'm trying my best lol</h2>
      </ParallaxLayer>

      </ParallaxLayer>
    </Parallax>
      
      
  )
}




