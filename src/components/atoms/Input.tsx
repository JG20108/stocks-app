import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Add this line
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, inputProps }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 p-2 rounded"
      {...inputProps} // Spread additional input attributes
    />
  );
};

export default Input;