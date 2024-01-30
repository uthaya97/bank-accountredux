import React, { useState } from 'react'

const CreateCustomer = () => {
  const [fullName,setFullName]=useState("")
  const [id,setId]=useState("")

  const handleCreateCustomer=()=>{
    alert("hi")
  }
  return (
    <>
    <div className='create-container'>
        <h1>Create new customer</h1>
        <div>
            <lable>Customer full name  </lable>
            <input type='text' onChange={(e) => setFullName(e.target.value)}></input>
        </div>
        <div>
            <lable>National ID  </lable>
            <input type='number' onChange={(e)=>setId(e.target.value)}></input>
        </div>
        <div>
            <button onClick={handleCreateCustomer}>CREATE NEW CUSTOMER</button>
        </div>
    </div>
    {/* <div className='create-container'>
    <div>
        <h2> Hi 🖐 Welcome  , {fullName} </h2>
    </div>
    </div> */}
    </>
  )
}

export default CreateCustomer