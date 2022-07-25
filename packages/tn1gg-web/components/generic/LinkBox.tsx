import React from "react";

interface IProps extends React.PropsWithChildren {
  link?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  onClick?: () => void;
}

export const LinkBox: React.FC<IProps> = ({
  title,
  description,
  children,
  link,
  onClick,
}) => {
  return (
    <a
      href={link}
      onClick={onClick}
      target={link ? "_blank" : undefined}
      rel={"noopener noreferrer"}
      className="flex flex-col rounded-lg shadow-md overflow-hidden group hover:scale-105 transition hover:ease-in-out"
    >
      <div className="px-2 text-center w-80 bg-indigo-600 transition hover:ease-in-out h-full group-hover:bg-indigo-500">
        <div className="m-12 flex items-center justify-center rounded-full group-hover:scale-110 transition hover:ease-in-out">
          {children}
        </div>
      </div>
      <h4 className="bg-indigo-700 p-3 text-2xl text-neutral-100">{title}</h4>
      <div className="flex items-center justify-center px-6 py-4 text-center w-80 bg-neutral-800 transition hover:ease-in-out h-full">
        <div className="mt-4 mb-2 text-neutral-100 font-semibold">
          {description}
        </div>
      </div>
    </a>
  );
};
