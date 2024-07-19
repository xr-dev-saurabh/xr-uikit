import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Container, Text, Root } from "@react-three/uikit";
import { Button } from "@react-three/uikit-default";
import Image1 from "../assets/Bedroom2.png";

export const Scene = ({ store }) => {
  const texture = useLoader(THREE.TextureLoader, Image1);
  const meshRef = useRef();

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[100, 64, 64]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <group position={[0, 0, -99.5]}>
        <Root pixelSize={0.001} position={[0, 0, 0.5]}>
          <Container
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button size="fit" variant="ghost" onClick={() => store.getState().session?.end()}>
              <Text
                fontSize={4880}
                fontWeight={500}
                lineHeight={4990}
                color="rgb(243,244,246)"
                flexDirection="column"
              >
                Exit VR
              </Text>
            </Button>
          </Container>
        </Root>
      </group>
    </>
  );
};

export default Scene;
