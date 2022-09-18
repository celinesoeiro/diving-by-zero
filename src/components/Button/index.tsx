import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button
      className="
      border-dark border-2 rounded
      bg-dark
      shadow-button
      box-border
      text-light
      text-sm font-poppins font-bold uppercase
      py-2 px-3
      relative
      touch-manipulation
      active:shadow-none
      active:top-1
      active:left-1
      "
      {...props}
    >
      {label}
    </button>
  );
};
