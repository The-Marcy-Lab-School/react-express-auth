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
          <h1 style={{color: '#ff965e', fontSize: '35px'}}>Welcome to Language Hub </h1>
          </div>
          <br/>
          <a href="#_" class="relative px-6 py-3 font-bold text-black group">
          <span class="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-300 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full border-4 border-black"></span>
          <span class="relative">Get Started</span>
          </a>
          </div>
      <ParallaxLayer offset={1}  speed={0.5} style={{ backgroundColor: "#ff965e",  backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ backgroundColor: "#ff965e",  backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
          <h1 style={{ color: 'white' , fontSize: '35px'}} >Mission Statement</h1>
          <br/>
          <h2 style={{ color: 'white', fontSize: '25px'}} > our mission is to bridge linguistic barriers and enrich lives through the power of language. We are dedicated to providing an immersive and personalized learning experience that empowers individuals to master different languages and connect with the world.
</h2>
        </div>
      </ParallaxLayer>
      </ParallaxLayer>
      {/* Trying My Best Content */}

      <ParallaxLayer offset={2} speed={0.5} style={{ width: "100%", height: "100%" }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
    <div style={{ flex: 1, padding: '2rem' }}>
      <h1 style={{fontSize: '35px', color: 'black', textAlign: 'center', color: '#ff965e'}}> Fun Fact:</h1>
      <br/>
      <p style={{fontSize: '25px', color: 'black', color: '#ff965e' }}>Learning a new language can enhance your problem-solving skills and creativity. Bilingual or multilingual individuals often have improved cognitive abilities, such as better problem-solving, multitasking, and creative thinking. </p>
    </div>
    <div style={{ flex: 1, background: `url(https://cdn.dribbble.com/users/1129235/screenshots/10972507/media/aceb35a835198886faeaa8fa5e0836fb.gif) right / cover no-repeat`, height: '100%' }}></div>
  </div>
</ParallaxLayer>





      </ParallaxLayer>
    </Parallax>
      
      
  )
}



