// import React, { forwardRef, useRef, useState } from "react";
// import { useGLTF } from "@react-three/drei";

// export const Guy = forwardRef((props, ref,) => {
//   const { nodes, materials } = useGLTF("/Tibby.glb");
//   return (
//     <group {...props}  ref={ref} dispose={null}>
//       <group rotation={[Math.PI / 2, 0, 0]} scale={0.175}>
//         <skinnedMesh
//           geometry={nodes.Arm_L.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Arm_L.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Arm_R.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Arm_R.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.ArmPart_L.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.ArmPart_L.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.ArmPart_R.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.ArmPart_R.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Bicep_L.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Bicep_L.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Bicep_R.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Bicep_R.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Front.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Front.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Hair__Body_M001.geometry}
//           material={materials["Body_M.001"]}
//           skeleton={nodes.Hair__Body_M001.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Hair__Body_M002.geometry}
//           material={materials["Body_M.001"]}
//           skeleton={nodes.Hair__Body_M002.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Hair__Body_M003.geometry}
//           material={materials["Body_M.001"]}
//           skeleton={nodes.Hair__Body_M003.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Torso.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Torso.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Torso_Back.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Torso_Back.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Torso_Bottom.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Torso_Bottom.skeleton}
//         />
//         <primitive object={nodes.nw4f_root} />
//         <skinnedMesh
//           geometry={nodes.Mesh004.geometry}
//           material={materials["Body_M.001"]}
//           skeleton={nodes.Mesh004.skeleton}
//         />
//         <skinnedMesh
//           geometry={nodes.Mesh004_1.geometry}
//           material={materials.Body_M}
//           skeleton={nodes.Mesh004_1.skeleton}
//         />
//       </group>
//     </group>
//   );
// })
// export default Guy
// useGLTF.preload("/Tibby.glb");
import React, { forwardRef, useRef, useState } from "react";
import { useGLTF, Html } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three"; 

const Guy = forwardRef((props, ref,) => {
  // const { nodes, materials, scene } = useGLTF("/Gipp.gltf");
  const { camera } = useThree();
  const raycaster =  useRef(useThree((state) => state.raycaster))
  // const raycaster = useRef();
  const [clickPosition, setClickPosition] = useState(null);
  const [partSelected, setPartSelected] = useState("none")
  const [isLeftLowerArmHovered, setIsLeftLowerArmHovered] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const [isLeftUpperArmHovered, setIsLeftUpperArmHovered] = useState(false)
  const [isHovered4, setIsHovered4] = useState(false)
  const [isHovered5, setIsHovered5] = useState(false)
  const [isHovered6, setIsHovered6] = useState(false)
  const [isHovered7, setIsHovered7] = useState(false)
  const [isHovered8, setIsHovered8] = useState(false)
  const [isHovered9, setIsHovered9] = useState(false)
  const [isHovered10, setIsHovered10] = useState(false)
  const [isHovered11, setIsHovered11] = useState(false)
  const [isHovered12, setIsHovered12] = useState(false)
  const [isHovered13, setIsHovered13] = useState(false)
  const [isHovered14, setIsHovered14] = useState(false)
  const [isHovered15, setIsHovered15] = useState(false)


console.log(setPartSelected)


  const handleClick = (event) => {
    
    console.log('Click position:', clickPosition);
  };



  const { nodes, materials } = useGLTF("/Tibby.glb");
  return (
    <>    <group {...props} ref={ref} dispose={null}>
    <group rotation={[Math.PI / 2, 0, 0]} scale={0.175}>
      {console.log(props)}
      <skinnedMesh
      geometry={nodes.Arm_L.geometry}
      material={materials.Body_M}
      skeleton={nodes.Arm_L.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsLeftLowerArmHovered(true);
        setPartSelected(" Left lower arm");
      }}
      onPointerLeave={() => setIsLeftLowerArmHovered(false)}
    >
      {isLeftLowerArmHovered && <meshStandardMaterial color={isLeftLowerArmHovered ? "pink" : "pink"} />}
    </skinnedMesh>
    <skinnedMesh
      geometry={nodes.Arm_R.geometry}
      material={materials.Body_M}
      skeleton={nodes.Arm_R.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered2(true);
        setPartSelected("upper arm");
      }}
      onPointerLeave={() => setIsHovered2(false)}
    >
      {isHovered2 && <meshStandardMaterial color={isHovered2 ? "green" : "green"} />}
    </skinnedMesh>
    <skinnedMesh
      geometry={nodes.ArmPart_L.geometry}
      material={materials.Body_M}
      skeleton={nodes.ArmPart_L.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsLeftUpperArmHovered(true);
        setPartSelected("Left Upper Arm");
      }}
      onPointerLeave={() => setIsLeftUpperArmHovered(false)}
    >
      {isLeftUpperArmHovered && <meshStandardMaterial color={isLeftUpperArmHovered ? "orange" : "lightblue"} />}
    </skinnedMesh>
    <skinnedMesh
      geometry={nodes.ArmPart_R.geometry}
      material={materials.Body_M}
      skeleton={nodes.ArmPart_R.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered4(true);
        setPartSelected("Right Upper Arm");
        console.log("WOW OK")
      }}
      onPointerLeave={() => setIsHovered4(false)}
    >
      {isHovered4 && <meshStandardMaterial color={isHovered4 ? "yellow" : "lightblue"} />}
    </skinnedMesh>
    <skinnedMesh
      geometry={nodes.Bicep_L.geometry}
      material={materials.Body_M}
      skeleton={nodes.Bicep_L.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered15(true);
        setPartSelected("Left shoulder");
      }}
      onPointerLeave={() => setIsHovered15(false)}
    >
      {isHovered15 && <meshStandardMaterial color={isHovered15 ? "orange" : "lightblue"} />}
    </skinnedMesh>
    <skinnedMesh
      geometry={nodes.Bicep_R.geometry}
      material={materials.Body_M}
      skeleton={nodes.Bicep_R.skeleton}
      onPointerEnter={(event) => {
        event.stopPropagation();
        setIsHovered5(true);
        setPartSelected("Left Shoulder");
      }}
      onPointerLeave={() => setIsHovered5(false)}
    >
      {isHovered5 && <meshStandardMaterial color={isHovered5 ? "orange" : "lightblue"} />}
    </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Front.geometry}
        material={materials.Body_M}
        skeleton={nodes.Front.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered6(true), setPartSelected("torso")))}
        onPointerLeave={() => setIsHovered6(false)}
      >
        {isHovered6 && <meshStandardMaterial color={isHovered6? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Hair__Body_M001.geometry}
        material={materials["Body_M.001"]}
        skeleton={nodes.Hair__Body_M001.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered7(true), setPartSelected("Upper Legs")))}
        onPointerLeave={() => setIsHovered7(false)}
      >
        {isHovered7 && <meshStandardMaterial color={isHovered7? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Hair__Body_M002.geometry}
        material={materials["Body_M.001"]}
        skeleton={nodes.Hair__Body_M002.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered8(true), setPartSelected("Lower Legs")))}
        onPointerLeave={() => setIsHovered8(false)}
      >
        {isHovered8 && <meshStandardMaterial color={isHovered8? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Hair__Body_M003.geometry}
        material={materials["Body_M.001"]}
        skeleton={nodes.Hair__Body_M003.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered9(true), setPartSelected("cardio")))}
        onPointerLeave={() => setIsHovered9(false)}
      >
        {isHovered9 && <meshStandardMaterial color={isHovered9? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Torso.geometry}
        material={materials.Body_M}
        skeleton={nodes.Torso.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered10(true) , setPartSelected("idk what this is")))}
        onPointerLeave={() => setIsHovered10(false)}
      >
        {isHovered10 && <meshStandardMaterial color={isHovered10? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Torso_Back.geometry}
        material={materials.Body_M}
        skeleton={nodes.Torso_Back.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered11(true) , setPartSelected("back?")))}
        onPointerLeave={() => setIsHovered11(false)}
      >
        {isHovered11 && <meshStandardMaterial color={isHovered11? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Torso_Bottom.geometry}
        material={materials.Body_M}
        skeleton={nodes.Torso_Bottom.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered12(true) , setPartSelected("waist?")))}
        onPointerLeave={() => setIsHovered12(false)}
      >
        {isHovered12 && <meshStandardMaterial color={isHovered12? "orange" : "lightblue"} />}
      </skinnedMesh>
      <primitive object={nodes.nw4f_root} />
      <skinnedMesh
        geometry={nodes.Mesh004.geometry}
        material={materials["Body_M.001"]}
        skeleton={nodes.Mesh004.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setPartSelected("Hair"), setIsHovered13(true)))}
        onPointerLeave={() => setIsHovered13(false)}
      >
        {isHovered13 && <meshStandardMaterial color={isHovered13? "orange" : "lightblue"} />}
      </skinnedMesh>
      <skinnedMesh
        geometry={nodes.Mesh004_1.geometry}
        material={materials.Body_M}
        skeleton={nodes.Mesh004_1.skeleton}
        onPointerEnter={((event) => (event.stopPropagation(), setIsHovered14(true), setPartSelected("Face")))}
        onPointerLeave={() => setIsHovered14(false)}
      >
        {isHovered14 && <meshStandardMaterial color={isHovered14? "orange" : "lightblue"} />}
      </skinnedMesh>
    </group>
  </group>
  <Html >  <h1
            style={{   color: "blue",position: 'absolute', top: '1%', left: '60%', transform: 'translate(-50%, -50%)' }}
            >{partSelected}</h1>
          </Html>
  </>

  );

});

export default Guy;

useGLTF.preload("/Gipp.gltf");