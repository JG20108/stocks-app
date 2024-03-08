import React from 'react';

interface InputProps {
  type: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 p-2 rounded"
    />
  );
};

export default Input;