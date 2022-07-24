import Image from "next/image";
import React from "react";
import { ExternalLink } from "../../icons/ExternalLink";
import { GitHubLogo } from "../../icons/GitHub";
import { Button } from "../generic/Button";

export const Navigation: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-indigo-700 py-2 px-3 shadow-md">
      <Image
        src="/logo.png"
        alt="logo"
        width="100%"
        height={24}
        objectFit="contain"
      />
      <div className="flex flex-row items-center">
        <a href="https://api.tn1.gg" target="_blank" rel="noreferrer">
          <Button className="mr-2">
            <span className="font-semibold text-sm text-white mr-2">
              GraphQL API
            </span>{" "}
            <ExternalLink size={16} />
          </Button>
        </a>
        <a
          href="https://github.com/enlyth/tn1gg"
          target="_blank"
          rel="noreferrer"
          className="hover:bg-indigo-300 transition:ease-in-out duration-200 rounded-full bg-indigo-700"
        >
          <GitHubLogo size={24} />
        </a>
      </div>
    </div>
  );
};
