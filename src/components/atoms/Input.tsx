import React from 'react';

// Input component supporting various types including text and number
interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // Allows passing additional attributes to the input element
}

// Renders an input field with Tailwind CSS for styling
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