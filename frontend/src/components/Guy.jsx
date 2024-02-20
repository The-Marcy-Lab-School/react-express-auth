import React, { forwardRef, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export const Guy = forwardRef((props, ref,) => {
  const { nodes, materials } = useGLTF("/Tibby.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.175}>
        <skinnedMesh
          geometry={nodes.Arm_L.geometry}
          material={materials.Body_M}
          skeleton={nodes.Arm_L.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Arm_R.geometry}
          material={materials.Body_M}
          skeleton={nodes.Arm_R.skeleton}
        />
        <skinnedMesh
          geometry={nodes.ArmPart_L.geometry}
          material={materials.Body_M}
          skeleton={nodes.ArmPart_L.skeleton}
        />
        <skinnedMesh
          geometry={nodes.ArmPart_R.geometry}
          material={materials.Body_M}
          skeleton={nodes.ArmPart_R.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Bicep_L.geometry}
          material={materials.Body_M}
          skeleton={nodes.Bicep_L.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Bicep_R.geometry}
          material={materials.Body_M}
          skeleton={nodes.Bicep_R.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Front.geometry}
          material={materials.Body_M}
          skeleton={nodes.Front.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair__Body_M001.geometry}
          material={materials["Body_M.001"]}
          skeleton={nodes.Hair__Body_M001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair__Body_M002.geometry}
          material={materials["Body_M.001"]}
          skeleton={nodes.Hair__Body_M002.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Hair__Body_M003.geometry}
          material={materials["Body_M.001"]}
          skeleton={nodes.Hair__Body_M003.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Torso.geometry}
          material={materials.Body_M}
          skeleton={nodes.Torso.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Torso_Back.geometry}
          material={materials.Body_M}
          skeleton={nodes.Torso_Back.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Torso_Bottom.geometry}
          material={materials.Body_M}
          skeleton={nodes.Torso_Bottom.skeleton}
        />
        <primitive object={nodes.nw4f_root} />
        <skinnedMesh
          geometry={nodes.Mesh004.geometry}
          material={materials["Body_M.001"]}
          skeleton={nodes.Mesh004.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Mesh004_1.geometry}
          material={materials.Body_M}
          skeleton={nodes.Mesh004_1.skeleton}
        />
      </group>
    </group>
  );
})
export default Guy
useGLTF.preload("/Tibby.glb");
