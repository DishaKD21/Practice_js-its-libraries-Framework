import React, { createContext } from 'react'
import CTwo from './cTwo'; 

export const UserContext = createContext();

const COne = () => {    
  const uname = "Raju";

  return (
    <div style={{border:"2px solid black", margin:"6px", display:"inline-block", padding:"4px"}}>
      COne
      <UserContext.Provider value={uname}>
        <CTwo/>
      </UserContext.Provider>
    </div>
  )
}

export default COne;