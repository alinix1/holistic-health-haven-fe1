import type React from "react";
import type { ButtonProps } from "../../resources/model";

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  type = "button",
  ...props
}) => {
  const baseButton = `
    rounded 
    bg-[#5A7340] 
    px-8 
    py-2 
    text-base 
    font-medium 
    font-quicksand
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

  const submitButton = `
  bg-[#B64A50]
  text-white 
  font-inter
  py-3 
  rounded-lg 
  hover:bg-[#C05C5A]
  transition 
  duration-300 
  ease-in-out 
  focus:outline-none 
  focus:ring-2 
  focus:ring-blue-500 
  focus:ring-offset-2
  `;

  const buttonStyle = type === "submit" ? submitButton : baseButton;

  return (
    <button type={type} className={`${buttonStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
