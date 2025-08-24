import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from './components/DarkModeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <DarkModeToggle />
    </>
  )
}

export default App
