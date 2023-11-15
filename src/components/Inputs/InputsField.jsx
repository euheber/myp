import { useState } from "react"

function input({onInputChange, identity, type, label, name}) {

    const handleChange = (event) => { 
        onInputChange(event)
    }
  return (
    <div>
      <label htmlFor={identity} className="mr-3 block">
       {label}
      </label>
      <input className="border border-black p-2 w-full rounded-md mt-2 mb-2" type={type} id={identity} onChange={handleChange} name={name}/>
    </div>
  )
}


export default input
