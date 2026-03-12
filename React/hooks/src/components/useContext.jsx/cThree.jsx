import React, { useContext } from 'react'
import { UserContext } from './cOne';
const CThree = () => {
    const uname = useContext(UserContext)
  return (
    <div style={{border:"2px solid black", margin:"6px",display:"inline-block",padding:"4px"}}>
      CThree hi {uname}
    </div>
  )
}

export default CThree;