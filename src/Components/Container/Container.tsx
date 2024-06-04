import React from 'react';
interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}
const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
      <div className={` md:px-[80px] px-[10px] ${className}`}>
        {children}
      </div>
    );
  };
  
  export default Container;