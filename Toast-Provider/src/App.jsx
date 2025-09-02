import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toast, { useToast } from './components/Toast'


const Demo = () => {
  const { addToast } = useToast();

  return (
    <div className='p-5'>
      <button
        className='px-4 py-2 bg-green-500 text-white rounded mr-2'
        onClick={() => addToast("Saved successfully ✅", "success")}>
        Show Success
      </button>

      <button
        className='px-4 py-2 bg-red-500 text-white rounded mr-2'
        onClick={() => addToast("Something went wrong  ❌", "error")}>
        Show Error
      </button>

      <button
        className='px-4 py-2 bg-red-500 text-white rounded mr-2'
        onClick={() => addToast("Here’s some info ℹ️", "info")}>
        Show Info
      </button>

      <button
        className='px-4 py-2 bg-red-500 text-white rounded mr-2'
        onClick={() => addToast("Warning! ⚠️", "warning")}>
        Show Warning
      </button>
    </div>
  )
}

function App() {
  return (
     <Toast>
      <Demo />
    </Toast>
  )
}

export default App
