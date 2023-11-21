import React, { useState, forwardRef } from 'react';
import validator from 'validator';

const Input = forwardRef(({ onInputChange, identity, type, label, name, example, isEmailValid}, ref) => {
  const [isValid, setEmail] = useState(true);

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      const isEmail = validator.isEmail(event.target.value);
      setEmail(isEmail);
    }
    onInputChange(event);
  };

  return (
    <div className="mt-2">
      <label htmlFor={identity} className="block">
        {label}
      </label>
      <input
        className="border border-black p-2 w-full rounded-md mt-1"
        type={type}
        id={identity}
        onChange={handleChange}
        name={name}
        placeholder={example}
        ref={ref}
        required
        />

     
      {isEmailValid ? <p>{isEmailValid}</p> : null}
      {name === 'email' ? isValid ? <p></p> : <p>Preencha com um email válido</p> : null}
    </div>
  );
});

export default Input;
