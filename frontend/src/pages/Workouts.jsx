import React, { Suspense, useRef, useState, forwardRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, PresentationControls,  } from '@react-three/drei';
import  Guy  from '../components/Guy';
import FormExercisePlace from '../components/FormExercisePlace';

export default function Workouts() {
  return (
    <>
      <h1>THIS IS THE 3D MODEL AREA</h1>
      <div style={{maxWidth : "400px", height : "400px"}}>
      <Canvas  >
        <ambientLight intensity={0.7} />
        <Suspense fallback={null}>
          <color attach="background" args={['#101010']} />
          <Guy />

      </Suspense>
      </Canvas>
      </div>
      <FormExercisePlace />
    </>
  );
}




