import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StepForm from './components/StepForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StepForm/>
    </>
  )
}

export default App
