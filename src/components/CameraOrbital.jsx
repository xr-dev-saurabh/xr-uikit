import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const CameraOrbital = () => {
  const { camera, gl } = useThree();
  const orbitControlsRef = useRef();

  useEffect(() => {
    // Set the initial camera position to be inside the sphere
    const position = new THREE.Vector3(0, 0, 0.5); // Adjust the Z value as needed to ensure it's inside the sphere
    camera.position.copy(position);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
  }, [camera]);

  return (
    <OrbitControls
      ref={orbitControlsRef}
      args={[camera, gl.domElement]}
      enableDamping={true}
      dampingFactor={0.03}
      enableZoom={true}
      minDistance={0} // Minimum distance the camera can move towards the center of the scene
      maxDistance={0.04} // Maximum distance the camera can move away from the center of the scene
      enablePan={false}
    />
  );
};

export default CameraOrbital;
