import React, { useState } from 'react'

const Tab = () => {
    const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className='tabs-container'>
      <div className='tab-headers'>
        <button
        className={activeTab === "tab1" ? "active": ""}
        onClick={()=> setActiveTab("tab1")}>
        Home
        </button>
        
        <button 
        className={activeTab === "tab2" ? "active" : ""}
        onClick={()=> setActiveTab("tab2")}>
        Profile
        </button>

        <button 
        className={activeTab === "tab3"?"active": ""}
        onClick={()=> setActiveTab("tab3")}
        >
            Settings
        </button>
      </div>
      <div className='tab-content'>
        {activeTab === "tab1" && <p>Welcome to the Home Tab🏠</p>}
        {activeTab == "tab2" && <p>Welcome to the Profile Tab👨‍🏫</p>}
        {activeTab === "tab3" && <p>Here are your Settings ⚙️</p>}
      </div>
    </div>
  )
}

export default Tab
