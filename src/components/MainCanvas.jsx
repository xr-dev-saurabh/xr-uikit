import React from "react";
import { Canvas } from "@react-three/fiber";
import { XR, createXRStore, XROrigin } from "@react-three/xr";
import { PiVirtualReality } from "react-icons/pi";
import CameraOrbital from "./CameraOrbital";
import Scene from "./Scene";


const store = createXRStore(
    { controller: { rayPointer: { rayModel: { maxLength: 100000 } } } }
);

export const MainCanvas = () => {
  return (
    <div id="canvas-container" className="w-full h-screen relative">
      <Canvas>
        <XR store={store}>
          <XROrigin position={[0, 0.05, 0]} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <CameraOrbital />
          <Scene store={store} />
        </XR>
      </Canvas>

      <button
        id="vr-button"
        onClick={() => store.enterVR()}
        className="fixed  bottom-8 right-4  bg-white text-black px-2 py-1 rounded"
      >
        <PiVirtualReality size={35} />
      </button>
    </div>
  );
};

export default MainCanvas;
