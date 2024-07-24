import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Components/Counter'
import Welcome from './Components/Welcome'
import WidthUseCase from './Components/WidthUseCase'
import Timer from './Components/Timer'
import FetchData from './Components/fetchdataapi'

function App() {
  const [name, setName] = useState('')
  const [flag, setflag] = useState(false)
useEffect(()=>{
console.log('use the useefftect');
}
)
  return (
    <div>
      {/* <div>
        <h1>Hello world</h1>
      </div>
     <Counter/>
     <input type='text' onChange={(e)=>setName(e.target.value)}/>
     <h3>Welcome {name}</h3>
  <button onClick={()=>setflag(!flag)}>{flag?'Hide':'show'}</button>
  {flag&& <Welcome/>}
  <WidthUseCase/>
  <Timer/> */}
  <FetchData/>
  </div>
  )
}

export default App
