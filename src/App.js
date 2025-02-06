import React, {useRef, useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';

function App() {

  function AnimatedBox () {
    const boxRef = useRef()
    
    useFrame(()=>{
      boxRef.current.rotation.x += 0.005;
      boxRef.current.rotation.y += 0.005;
      boxRef.current.rotation.z += 0.005;
    })

    return (
      <mesh ref={boxRef}>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color="gold" />
      </mesh>
    );
  }

  return (
    <div className="flex flex-row h-screen w-screen bg-zinc-800 justify-center">
      <Canvas className='w-32 h-32' camera={{position: [2,2,2]}}>



        {/* <mesh position={[-2,2,-1]} rotation={[0,0,Math.PI]} scale={[2, 2.5,2]}> */}
          {/* <sphereGeometry args={[3,8,8]} /> */}
          {/* <boxGeometry args={[2,3,2]}/> */}
          {/* <torusKnotGeometry args={[1.7, 0.3, 256, 256]}/> */}
          {/* <meshBasicMaterial color="gold"/> */}
          {/* <meshPhongMaterial color="gold"/> */}
        {/* </mesh> */}

          <AnimatedBox />
          <directionalLight position={[2,5,1]}/>
      </Canvas>
    </div>
  );
}

export default App;
