import React, { useState } from 'react'

export default function Employee() {
  const [name, setName] = useState("NO Name")

  const btnClick = (event) => {
    event.preventDefault()
    alert('Button Clicked')
  }

  const onChangeName = (event) => {
    event.preventDefault()
    setName(event.target.value)
  }

  return (
    <div>
      <h1>Employee Component</h1>
      <button onClick={(e) => btnClick(e)}>Show Alert</button>
      <p>Name: {name}</p>
      <input 
        type="text"
        name="txtName"
        placeholder="Enter Name"
        onChange={(e) => onChangeName(e)}
      />
    </div>
  )
}
