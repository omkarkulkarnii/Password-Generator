
import { useCallback, useEffect, useState, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numALlowed, setNumAllowed] = useState(false);
  const [charALlowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  // ()=>{ } similar to this we have a callback function
  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numALlowed) { str += "0123456789" }
    if (charALlowed) { str += "!@#$%^&*(){}[]-_+=:;<>,.~/" }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numALlowed, charALlowed, setPassword])

//copy to clipboard function , useRef was used for this only
const copytoclip = useCallback(() => {
passwordRef.current?.select();
window.navigator.clipboard.writeText(password)
window.alert('Copied Password : ' + password);

} , [password])

    //New hook here after generating the UI
    useEffect(()=>{passGen()} , [passGen , length , numALlowed , charALlowed])



  return (
    <>


      <div className="w-full max-w-md rounded-lg text-orange-500 text-2xl bg-gray-700 mx-auto px-4 my-8 shadow-md py-4">
        <h1 className=" text-center text-white my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4" >
          <input
            type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />

          <button onClick={copytoclip} className="bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex text-sm gap-x-2'>
            <input type="range"
            min = {6}
            max = {30}
            value = {length}
            className='cursor-pointer' 
            onChange={(e) => {
              setLength(e.target.value)
            }}  />
            <label>Length : {length}</label>

          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"
           defaultChecked = {numALlowed}
           id='numberInput'
          onChange={() => {
              setNumAllowed((prev) => !prev);
            }}  />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input type="checkbox"
           defaultChecked = {charALlowed}
           id='characterInput'
          onChange={() => {
              setcharAllowed((prev) => !prev);
            }}  />
            <label htmlFor='characterInput'>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
