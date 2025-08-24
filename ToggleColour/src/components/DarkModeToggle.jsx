import React, { useState } from 'react'

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const toogleTheme= ()=>{
            setIsDark(!isDark);
    }

  return (
    <div className={isDark ? "dark" :"light"}>
        <h1>Dark Mode Toggle Project</h1>
        <button onClick={toogleTheme}> 
            {isDark? "Switch to Light Mode" : "Switch to Dark Mode"};
        </button>
        <p>This is a Simple example of dark and light Theme</p>
    </div>
  )
}

export default DarkModeToggle
