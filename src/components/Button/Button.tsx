import React from "react";
import type { ButtonProps } from "../../resources/model";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  const baseButton = `
    rounded 
    bg-[#5A7340] 
    px-8 
    py-2 
    text-md 
    font-medium 
    leading-normal 
    text-white
    hover:shadow-4-strong        
    transition 
    duration-150 
    ease-in-out 
    hover:bg-[#8BA663]
    hover:text-black
    focus:bg-[#8BA663]
    focus:outline-none 
    focus:ring-0 
    active:bg-[#8BA663]-600 
    dark:shadow-black/30
  `;

  return (
    <button type="button" className={`${baseButton} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
