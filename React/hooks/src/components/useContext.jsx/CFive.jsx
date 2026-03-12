import React, { useContext } from 'react'
import { UserContext } from './cOne';

const CFive = () => {
  const uname = useContext(UserContext);

  return (
    <div style={{border:"2px solid black", margin:"6px", display:"inline-block", padding:"4px"}}>
      CFive {uname}
    </div>
  )
}

export default CFive;