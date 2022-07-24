import Image from "next/image";
import React from "react";
import { ExternalLink } from "../../icons/ExternalLink";
import { GitHubLogo } from "../../icons/GitHub";

export const Navigation: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-end w-full bg-indigo-600 py-2 px-3 shadow-md">
      <Image src="/logo.png" alt="logo" height={24} width={24}></Image>
      <div className="flex flex-row items-center">
        <a href="https://api.tn1.gg" target="_blank" rel="noreferrer">
          <div className="flex flex-row items-center bg-indigo-400 px-2 py-1 mx-4 rounded hover:bg-indigo-300 transition:ease-in-out duration-300">
            <span className="font-semibold text-sm text-white mr-2">
              GraphQL API
            </span>{" "}
            <ExternalLink size={16} />
          </div>
        </a>
        <a
          href="https://github.com/enlyth/tn1gg"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubLogo size={24} />
        </a>
      </div>
    </div>
  );
};
