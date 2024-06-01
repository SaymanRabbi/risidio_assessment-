import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
  }
  const Button: React.FC<ButtonProps> = ({
    children,
    className,
    ...buttonProps
  }) => {
    return (
        <button
        className={`${className} rounded-[87px] border-[1px] border-[#23252B] py-[21px] px-[42px] flex items-center justify-center`}
        {...buttonProps}
        >
        {children} 
        </button>
    );
};

export default Button;