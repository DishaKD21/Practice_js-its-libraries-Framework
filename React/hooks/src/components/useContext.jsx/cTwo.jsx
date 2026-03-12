import React from 'react'
import CFive from './CFive';
import CFour from './cFour';

const CTwo = () => {
  return (
    <div style={{border:"2px solid black", margin:"6px",display:"inline-block",padding:"4px"}}>
      CTwo
      <CFour/>
      <CFive/>
    </div>
  )
}

export default CTwo;