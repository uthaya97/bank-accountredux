import React from 'react'
import { fullname } from './CustomerSlice'
const Customer = () => {
  return (
    <div>
        <h2 style={{padding:"30px"}}> Hi 🖐 Welcome  , {fullname} </h2>
    </div>
    
  )
}

export default Customer