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
        className={`${className} rounded-[87px] border-[1px] border-[#23252B] md:py-[21px] py-[16px] md:px-[42px] px-[35px] flex items-center justify-center`}
        {...buttonProps}
        >
        {children} 
        </button>
    );
};

export default Button;