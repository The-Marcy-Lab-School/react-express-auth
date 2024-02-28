import React, { Suspense, useRef, useState, forwardRef, useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PresentationControls, Html   } from '@react-three/drei';
import CurrentUserContext from '../contexts/current-user-context';

import  Guy  from '../components/Guy';
import FormExercisePlace from '../components/FormExercisePlace';
import { usePartStore } from '../store/store';
import Experience from '../components/Experience';
import Navigation from '../components/Navigation';

// import './styles/root.css'

export default function Workouts() {
  const [rotationX, setRotationX] = useState(0)
  const { 
    partSelected, setPartSelected
  } = usePartStore((state) => state);

  const { currentUser } = useContext(CurrentUserContext);



 

  
  // const Experience = ({ rotationX }) => {
  //   const guyGroup = useRef();
  //   let timer = useRef(0);
  //   useFrame((state, delta) => {
  //     if (guyGroup.current) {
  //       guyGroup.current.rotation.y = rotationX;
  //       guyGroup.current.rotation.x = 0 ;
  //       timer.current+= delta
  //       if(timer.current > 1){
  //         // console.log(state.pointer)
  //         timer.current = 0
  //       }
  //       // console.log(timer)
  //     }
  //   });
  //   return (
  //       <Guy ref={guyGroup}  />
  //   );
  // };

  const rotateGuy = (value) => {
    setRotationX(value);
  };
  return (
    <>
      {/* <h1>THIS IS THE 3D MODEL AREA</h1> */}
      {/* style={{position: 'relative'}} */}
      <Navigation currentUser={currentUser} />

      <div className='relative w-screen h-screen flex items-center justify-center'>
        {/* <h5>Part selected: {partSelected}</h5> */}
        <div className='w-full h-screen grid grid-cols-2 w-full w-3/4 gap-2 mx-12'>
          {/* style={{maxWidth : "400px", height : "400px"}} */}
          <div className='max-w-full max-h-screen' >
            <div className='z-10 w-full text-white flex justify-center items-center font-semibold text-5xl'>
              <h5 className='pt-12'  style={{position: 'absolute', zIndex: 2}}>{partSelected}</h5>

            </div>

            <Canvas  >
            <ambientLight intensity={1.4} />
              <Suspense fallback={null}>
                <color attach="background" args={['#101010']} />
                <Experience rotationX={rotationX} />

              </Suspense>
              <Html position={[0, -3, 0]} center>
              <div style={{
                marginTop : "50px",
                width: "300px",
                fontSize: "10px",
                borderRadius: "5px"
              }} className='flex justify-center items-center'
              >
              <input
                type="range"
                min={-Math.PI}
                max={Math.PI}
                step={0.01}
                value={rotationX}
                onChange={(e) => rotateGuy(parseFloat(e.target.value))}
                style={{   maxWidth : "200px" }}
              />
            </div>
            </Html>
            </Canvas>
          </div>
          
          <FormExercisePlace />
        </div>
      </div>
    </>
  );
}




