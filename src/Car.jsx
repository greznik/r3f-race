import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export function Car() {
  let mesh = useLoader(GLTFLoader, "models/car.glb").scene;

  useEffect(() => {
    mesh.scale.set(0.04, 0.04, 0.04);
    mesh.children[0].position.set(0, 1.2, 0);
  }, [mesh]);

  return (
    <primitive object={mesh} rotation-y={Math.PI} />
  )
}
