import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Scroll from './components/Scroll'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-2xl">Scroll Down to See the Button 👇</h1>
      <div style={{ height: "1500px" }}> {/* just for demo */}
        <p>Lots of content here...</p>
      </div>
      <Scroll />
    </>
  )
}

export default App
