import { useState,useCallback,useEffect,useRef} from 'react'



function App() {
  const [length,setLength]=useState(8);
  const [CopyVariable,setCopy]=useState('Copy')
  const [numberAllowed,setisAlphabetAllowed]=useState(false);
  const [isCharAllowed,setisCharAllowed]=useState(false);
  const[Password,setPassword]=useState("");
  const createPassword=useCallback(
    () => {
      var pass='';
      var str="ABCDEFGHIJKLMNOPQRSTabcdefghijklmnopqrst";
     
        if(numberAllowed) str+='0123456789'
        if(isCharAllowed) str+='?/.,<>{}[]()*&^%$#@!|/'
        for(let i=1;i<=length;i++)
        {
          var char=Math.floor(Math.random()*str.length+1)
          pass+=str.charAt(char);
        }
        setPassword(pass);
    },
    [length,numberAllowed,isCharAllowed,setPassword]
  )
  const copytoClipBoard=useCallback(()=>{
    getRef.current?.select()
    setCopy("Copied!");
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(() =>{createPassword()}, [length,isCharAllowed,numberAllowed,createPassword])
  const getRef=useRef(null)
  
  
  

  return (
    <div className='w-full h-screen bg-black '>
    
      <h1 className= ' bg-gray-200 flex justify-center text-2xl  p-3 rounded-xl'>Password Generator</h1>
      <div className="w-full bg-gray-600 max-h-m px-4 py-4 flex flex-col items-center rounded-2xl my-3" >
        <div className="w-fit flex justify-self-center px-4 py-4 self-center" >
          <input className="outline-none w-96 bg-gray-200 p-2 rounded-l text-m text-orange-500" 
          type="text" 
          name="password" id="password"
          value={Password}
          placeholder='Password'
          readOnly 
          ref={getRef}/>
          <button className="bg-blue-400 p-2 text-xl text-white" onClick={copytoClipBoard}>{CopyVariable}</button>
        </div>
        <div className='w-fit flex justify-self-center px-3 py-3 self-center'>
        <div className='p-3 '>
          
          <input
            type="range"  
            min={6} 
            max={100} 
            value={length}
            onChange={(e)=>setLength(e.target.value)} />
          <label className="p-3  text-red-400 font-bold text-2xl" htmlFor="">Length:{length}</label>
          <input className="p-3 " 
          type="checkbox" name="Numbers" 
          id="numbers" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setisAlphabetAllowed((prev)=>!prev);
          }}/>
          <label className="p-3 text-red-400  font-bold text-2xl"htmlFor="numbers">Numbers</label>
          <input className="p-3 " 
          onChange={()=>
          {
            setisCharAllowed((prev)=>!prev);
          }}
          defaultChecked={isCharAllowed}
          type="checkbox" name="Characters" id="characters" />
          <label className="p-3 text-red-400  font-bold text-2xl"htmlFor="characters">Characters</label>

        </div>

      </div>
      </div>
    </div>
  )
}

export default App
