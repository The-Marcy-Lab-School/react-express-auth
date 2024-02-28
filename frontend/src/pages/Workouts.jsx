import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import FormExercisePlace from '../components/FormExercisePlace';
import { usePartStore } from '../store/store';
import Experience from '../components/Experience';

export default function Workouts() {
  const [rotationX, setRotationX] = useState(0);
  const { partSelected } = usePartStore((state) => state);

  const rotateGuy = (value) => {
    setRotationX(value);
  };
  return (
    <>
      <h1>THIS IS THE 3D MODEL AREA</h1>
      <h5>Part selected: {partSelected}</h5>
      <div style={{ maxWidth: '400px', height: '400px' }}>
        <Canvas>
          <ambientLight intensity={1.4} />
          <Suspense fallback={null}>
            <color attach="background" args={['#101010']} />
            <Experience rotationX={rotationX} />
          </Suspense>
          <Html position={[0, -3, 0]} center>
            <div
              style={{
                marginTop: '50px',
                width: '300px',
                fontSize: '10px',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              <input
                type="range"
                min={-Math.PI}
                max={Math.PI}
                step={0.01}
                value={rotationX}
                onChange={(e) => rotateGuy(parseFloat(e.target.value))}
                style={{ maxWidth: '200px' }}
              />
            </div>
          </Html>
        </Canvas>
      </div>

      <FormExercisePlace />
    </>
  );
}
