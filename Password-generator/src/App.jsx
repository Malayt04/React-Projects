import { useEffect, useCallback, useState, useRef } from "react";

function App() {

const [length,setLength]=useState(8);
const [numberAllowed,setNumberAllowed]=useState(false);
const[charactersAllowed,setCharactersAllowed] = useState(false);
const [password,setPassword]=useState("");

const passwordGenerator=useCallback(()=>{
  let pass="";
  let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if(numberAllowed)  {
    str=str+"123456789";
}
if(charactersAllowed){
  str=str+"!@#$%&'()*+,-./:;<=>?"
}

for(let i=1; i<=length; i++){
  let char=Math.floor(Math.random()*str.length+1);
  pass=pass+str.charAt(char);
}

setPassword(pass);

},[length, numberAllowed, charactersAllowed, setPassword])

useEffect(()=>{
  passwordGenerator()
}, [length, numberAllowed, charactersAllowed, setPassword, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow--md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
    <h1 className="text-white text-center my-3">Password Generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={password} className="outline-none w-full py-1 px-3" placeholder="password" readOnly></input>
      <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}} className="cursor-pointer"/>
        <label>Length:{length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultValue={numberAllowed} onChange={()=>{setNumberAllowed((prev)=>!prev)}} className="cursor-pointer"/>
        <label>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox" defaultValue={charactersAllowed} onChange={()=>{setCharactersAllowed((prev)=>!prev)}} className="cursor-pointer"/>
        <label>Characters</label>
      </div>
    </div>

    </div>
  )
}

export default App
