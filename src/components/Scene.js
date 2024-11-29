import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { Container, Text, Root, Image } from "@react-three/uikit";
import { Button } from "@react-three/uikit-default";
import Image1 from "../assets/Bedroom2.png";
import IconClose from "../assets/closeIcon.png";

const textLines = [
  "Hello wudcnnv wvkn ceevjk vwvkj vwevkjn vvekvj  wewek",
  "Hello wudcnnv wvkn ceevjk vwvkj vwevkjn vvekvj  wewek",
  "Hello wudcnnv wvkn ceevjk vwvkj vwevkjn vvekvj  wewek",
  "Hello wudcnnv wvkn ceevjk vwvkj vwevkjn vvekvj  wewek",
  "World",
  "We",
  "Are",
  "Here",
  "To",
  "Do",
  "Some",
  "Test",
];

export const Scene = ({ store }) => {
  const texture = useLoader(THREE.TextureLoader, Image1);
  const meshRef = useRef();

  return (
    <>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[25, 64, 64]} />
        <meshBasicMaterial map={texture} side={THREE.BackSide} />
      </mesh>
      <group position={[0, 0, -20.5]}>
        <Root>
          <Container
            zIndexOffset={20}
            positionType="static"
            inset={10}
            display="flex"
            flexDirection={"column"}
            backgroundColor={"#ffffff"}
            maxWidth={800}
            maxHeight={600}
            alignItems="flex-start"
            borderRadius={18}
            overflow={"scroll"}
          >

          <Image
                   
                    src={IconClose}
                    positionType="absolute"
                    positionTop={0}
                    positionRight={0}
                    width={70}
                    height={70}
                    cursor="pointer"
                  ></Image>

            {textLines.map((line, index) => {
              console.log("Line:", line);
              console.log("Index:", index);
              return (
                <Text
                  key={index}
                  positionType="relative"
                  display={"flex"}
                  fontSize={69}
                  overflow={"scroll"}
                  color="#000000"
                  marginTop={index === 0 ? 50 : 0}
                  letterSpacing={0}
                  marginLeft={18}
                  
                >
                  {line}
                </Text>
              );
            })}
          </Container>
        </Root>
      </group>
    </>
  );
};

export default Scene;
