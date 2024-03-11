// Button component with Tailwind CSS for styling
import React from 'react';

// Receives label and onClick function as props
interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Renders a button with dynamic styling and functionality
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;