import React, { createContext, useState } from 'react'

export const contextData=createContext()

const Context = (props) => {

  const [theme, setTheme] = useState("light")
  
  return (
    <div>
      <contextData.Provider value={[theme,setTheme]}>
        {props.children}
      </contextData.Provider>
    </div>
  )
}

export default Context
