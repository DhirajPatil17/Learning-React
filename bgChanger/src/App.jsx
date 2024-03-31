import { useState } from 'react'
import Color from './Components/color.jsx'


function App() {
  const [Colors, setColor] = useState('olive') 
  let color_name=['Red','Green','Yellow','White','Gray','Blue','Brown','Purple']
  return (
  
    <div className='w-full h-screen duration-300' style={{backgroundColor:Colors}}>
    <h1 className='text-black font-bold text-4xl p-4 flex justify-center'>{Colors} Color Background</h1>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '> 
    <div className='flex flex-wrap justify-center shadow-lg rounded-lg bg-white pl-4 pr-4 py-2'>
      
        <Color Color1={color_name[0]} sets={setColor}></Color>
        <Color Color1={color_name[1]} sets={setColor}></Color>
        <Color Color1={color_name[2]} sets={setColor}></Color>
        <Color Color1={color_name[3]} sets={setColor}></Color>
        <Color Color1={color_name[4]} sets={setColor}></Color>
        <Color Color1={color_name[5]} sets={setColor}></Color>
        <Color Color1={color_name[6]} sets={setColor}></Color>
        <Color Color1={color_name[7]} sets={setColor}></Color>
        
        </div>
    </div>
    </div>
  
  )
}

export default App
