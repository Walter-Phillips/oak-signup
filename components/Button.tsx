import React from 'react';

// TODO: Create button variant with arrow right icon

// interface to declare all our prop types
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: string; // default, primary, info, success, warning, danger, dark
  disabled?: boolean;
}

// button component, consuming props
const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'default',
  disabled,
  ...rest
}) => {
  return (
    <button
      className={`font-bold text-base bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded inline-flex items-center place-content-between`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
