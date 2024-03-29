import React from 'react';

// Select dropdown component
interface SelectProps {
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

// Renders a select dropdown with options
const Select: React.FC<SelectProps> = ({ options, value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="border-2 border-gray-300 p-2 rounded"
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;