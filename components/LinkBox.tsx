import React from "react";

interface IProps extends React.PropsWithChildren {
  link?: string;
  title: React.ReactNode;
  description: React.ReactNode;
}

export const LinkBox: React.FC<IProps> = ({
  title,
  description,
  children,
  link,
}) => {
  return (
    <a
      href={link}
      target={link ? "_blank" : undefined}
      rel={"noopener noreferrer"}
      className="flex flex-col rounded-xl shadow-md overflow-hidden group"
    >
      <div className="px-2 text-center w-80 bg-indigo-600 dark:bg-indigo-600 transition hover:ease-out hover:ease-in h-full group-hover:bg-indigo-500">
        <div className="m-12 flex items-center justify-center rounded-full">
          {children}
        </div>
      </div>
      <h4 className="bg-indigo-500 dark:bg-indigo-700 p-3 text-2xl text-neutral-100 font-light">
        {title}
      </h4>
      <div className="flex items-center justify-center px-6 py-4 text-center w-80 bg-slate-200 dark:bg-neutral-800 transition hover:ease-out hover:ease-in h-full">
        <p className="mt-4 mb-2 text-neutral-800 dark:text-neutral-100">
          {description}
        </p>
      </div>
    </a>
  );
};
