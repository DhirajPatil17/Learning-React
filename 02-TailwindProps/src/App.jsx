import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let usernameArray=['Dhiraj','Sanket','Pranav'];
  let ButtonArray=['Click me','Visit me','Go to Profile'];
  let userIntro=['Working as a Servicenow Developer in Genpact',
  'Working as a Software Developer in Mindspark',
  'Student at Shri Vile Parle Khelvani Mandals IOT Dhule']
  

  return (
    <>
      <h1 className='bg-green-300 text-white font-bold p-4 rounded-xl mb-4'>Our Developers</h1>
      <div className='flex flex-row gap-4'>
        <div><Card username={usernameArray[0]} ButtonArray={ButtonArray[0]} userIntro={userIntro[0]}/></div>
        <div><Card username={usernameArray[1]} ButtonArray={ButtonArray[1]} userIntro={userIntro[1]}/></div>
        <div><Card username={usernameArray[2]} ButtonArray={ButtonArray[2]} userIntro={userIntro[2]}/></div>

      </div>
      
      

    </>
  )
}

export default App
