import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simon from './components/Simon'
import Shandon from './components/Shandon'
import Kevin from './components/Kevin'
import JuanCarlos from './components/JuanCarlos'
import Alan from './components/Alan'
import Edwar from './Edwar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Simon />
      <Shandon />
      <Kevin />
      <JuanCarlos />
      <Alan />
      <Edwar />
    </>
  )
}

export default App
