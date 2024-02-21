import Guy from "./Guy";
import { useRef } from "react";
import {  useFrame,} from '@react-three/fiber';

const Experience = ({ rotationX }) => {
    const guyGroup = useRef();
    let timer = useRef(0);
    useFrame((state, delta) => {
      if (guyGroup.current) {
        guyGroup.current.rotation.y = rotationX;
        guyGroup.current.rotation.x = 0 ;
        timer.current+= delta
        if(timer.current > 1){
          // console.log(state.pointer)
          timer.current = 0
        }
        // console.log(timer)
      }
    });
    return (
        <Guy ref={guyGroup}  />
    );
  };

  export default Experience