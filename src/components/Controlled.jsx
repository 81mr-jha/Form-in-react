
import React, { useState } from 'react'

export default function Controlled() {
    const [name, setName] = useState('');
    const [fullName,setfullName] = useState();

    const handleChange = (e) =>{
        console.log("clicked")
        console.log(e.target.value);
        setName(e.target.value)
    }
    const onsubmit = ()=>{
        setfullName(name)
    }

  return (
    <div>
        <h1>Hello {fullName}</h1>
        <input 
            type="text" 
            placeholder='Enter your name'
            value={name}
            onChange={handleChange}
        />
        <button type='button' onClick={onsubmit} >Click</button>
    </div>
  )
}
