import React, { useCallback, useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "1234567890";
    if (character) str += "!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); 
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, number, character,setPassword]);

  useEffect(()=>{
    generatePassword();
    console.log(generatePassword);
    
  },[length,number,character,setPassword])
  return (
    <>
      <div className="min-h-[30vh] rounded-lg text-red-900 bg-slate-200  ">
        <h1 className="text-black font-bold p-2 font-serif">
          Password-generator
        </h1>
        <div className="flex items-center justify-center bg-slate-500  mx-auto min-h-[15vh] rounded-lg shadow-lg">
          <input
            className=" bg-slate-100 outline-none w-[70vh] p-2 rounded-md "
            type="text"
            placeholder="Password"
            value={password}
            readOnly
          />
          <button className="bg-blue-500 text-black font-bold p-2 rounded-md">click me</button>
        </div>
        <div className="flex my-10 justify-center items-center gap-x-1 text-black font-bold">
          <input type="range" className="cursor-pointer" min={6} max={100} value={length} onChange={(e)=>{
            setLength(e.target.value)
          }}/>
          <label >length:{`(${length})`}</label>
            <input type="checkbox" name="numberInput" id="number" 
             defaultChecked={number}
             onChange={()=>{
              setNumber((prev)=>!prev)
             }}
            />
            <label htmlFor="number">number</label>
            <input type="checkbox" name="characterInput" id="number" 
             defaultChecked={character}
             onChange={()=>{
              setCharacter((prev)=>!prev)
             }}
            />
            <label htmlFor="character">character</label>
        </div>
      </div>
    </>
  );
};

export default App;
