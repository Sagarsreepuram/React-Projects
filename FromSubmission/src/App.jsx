import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Submit from './components/Submit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Submit />
    </>
  )
}

export default App
