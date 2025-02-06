import React, {useState} from 'react';
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/feather/eye';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import './App.css';

function App() {

  const [type, setType] = useState("password");
  const [eyeToggle, setEyeToggle] = useState(eyeOff);
  
  const clickHandler = () => {
    if (type === 'password') {
      setType('text');
      setEyeToggle(eye);
    }else {
      setType('password');
      setEyeToggle(eyeOff);
    }
  }


  return (
    <div className="flex flex-row h-screen w-screen p-2 bg-rose-500 justify-center">
      <div className='flex w-screen bg-red-400 rounded p-2 justify-center items-center'>
        <input type={type} className='h-[58px] rounded w-2/6 bg-stone-200 p-2 text-center text-lime-500' placeholder='رمز عبور'></input>
        <Icon onClick={clickHandler} icon={eyeToggle} size={25} className='ml-1 hover:cursor-pointer hover:shadow-none duration-300 
        p-3 shadow-md shadow-rose-200 rounded border-2 border-rose-300'/>  

      </div>
    </div>
  );
}

export default App;
