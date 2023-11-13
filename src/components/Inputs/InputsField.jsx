import { useState } from "react"

function input({onInputChange, identity, type, label}) {

    const handleChange = (event) => { 
        onInputChange(event.target.value)
    }
  return (
    <div>
      <label htmlFor={identity} className="mr-3 block">
       {label}
      </label>
      <input className="border border-black p-2 w-full rounded-md mt-2 mb-2" type={type} id={identity} onChange={handleChange}/>
    </div>
  )
}


export default input
