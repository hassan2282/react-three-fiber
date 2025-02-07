import React, {useRef, useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye';
import './App.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import { useControls } from 'leva';
import { SpotLightHelper } from 'three';
// import { FirstPersonControls } from '@react-three/drei';

function App() {

  function LightWithHelper () {
    const light = useRef();
    const {angle, penumbra} = useControls({
      angle: Math.PI / 8,
      penumbra: {
        value: 0.0,
        min: 0.0,
        max: 1.0,
        step: 0.1
      }
    })
    
    useHelper(light, SpotLightHelper, 'orange');
    return (
    <spotLight castShadow ref={light} penumbra={penumbra} angle={angle} intensity={80} color={0xffea00} position={[0,5,7]}/>
    )
  }
  
  function AnimatedBox () {

    
    const {speed, color} = useControls({

      color: 'red',
      speed: {
        value: 0.005,
        min: 0.0,
        max: 0.03,
        step: 0.001
      }
    })
    
    const boxRef = useRef()
    
    useFrame(()=>{
      boxRef.current.rotation.x += speed;
      boxRef.current.rotation.y += speed;
      boxRef.current.rotation.z += speed;
    })

    return (
      <mesh ref={boxRef} castShadow>
        <boxGeometry args={[2,2,2]}/>
        <meshStandardMaterial color={color}/>
      </mesh>
    );
  }

  return (
    <div className={`flex flex-row h-screen w-screen bg-zinc-900 justify-center`}>
      <Canvas shadows className='w-32 h-32' camera={{position: [4,2,1]}}>



        {/* <mesh position={[-2,2,-1]} rotation={[0,0,Math.PI]} scale={[2, 2.5,2]}> */}
          {/* <sphereGeometry args={[3,8,8]} /> */}
          {/* <boxGeometry args={[2,3,2]}/> */}
          {/* <torusKnotGeometry args={[1.7, 0.3, 256, 256]}/> */}
          {/* <meshBasicMaterial color="gold"/> */}
          {/* <meshPhongMaterial color="gold"/> */}
        {/* </mesh> */}
          
          {/* <FirstPersonControls movementSpeed={3}/> */}
          <OrbitControls />
          <AnimatedBox />
          {/* <directionalLight position={[2,5,1]}/> */}
          <ambientLight intensity={0.2} color={"gold"}/>
          <directionalLight intensity={0.1} color={0xfcfcfc} position={[2,5,1]}/>
          <LightWithHelper />
          {/* <pointLight intensity={50} position={[2,5,1]}/> */}
          <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry args={[20,20]} />
            <meshStandardMaterial />
          </mesh>
      </Canvas>
    </div>
  );
}

export default App;
