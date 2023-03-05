import React from 'react'

const Display = ({display,input}) => {
  return (
    <div className='display'>
    <div style={{fontSize:"small",color:"orange"}}>{input}</div>
      <div>{display}</div>
    </div>
  )
}

export default Display