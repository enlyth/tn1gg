import React, { PropsWithChildren } from "react";

interface IProps extends PropsWithChildren {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<IProps> = ({ children, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={
        "cursor-pointer flex-shrink flex flex-row items-center bg-indigo-600 px-2 py-1 rounded hover:bg-indigo-400 transition:ease-in-out duration-200 " +
        className
      }
    >
      {children}
    </div>
  );
};
