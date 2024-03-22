import React, { useState, useRef } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputField = ({
  id,
  type,
  value,
  label,
  onChange,
  error,
  required,
  ...otherProps
}) => {
  const [inputType, setInputType] = useState(type);
  const inputRef = useRef();

  const handleClick = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className="wrap-input">
      <input
        type={inputType}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        {...otherProps}
        className="input"
        ref={inputRef}
      />
      <label className="label" htmlFor={id}>{label}</label>
      {error && <small className="text-input-error">{error}</small>}
      {type === 'password' && (
        <span className="icon-eye" onClick={handleClick}>
          {inputType === 'password' ? <FaEye /> : <FaEyeSlash />}
        </span>
      )}
    </div>
  );
};

export default InputField;
