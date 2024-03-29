import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ExternalLink } from "../../icons/ExternalLink";
import { GitHubLogo } from "../../icons/GitHub";
import { Mail } from "../../icons/Mail";
import { Button } from "../generic/Button";

export const Navigation: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full bg-indigo-700 py-2 px-3 shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width="100%"
          height={24}
          objectFit="contain"
        />
      </Link>
      <div className="flex flex-row items-center">
        <a
          href="https://webmail.tn1.gg"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <Button>
            <span className="font-semibold text-sm text-white mr-2">
              Webmail
            </span>{" "}
            <Mail size={16} />
          </Button>
        </a>
        <a
          href="https://api.tn1.gg"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <Button>
            <span className="font-semibold text-sm text-white mr-2">API</span>{" "}
            <ExternalLink size={16} />
          </Button>
        </a>

        <a
          href="https://github.com/enlyth/tn1gg"
          target="_blank"
          rel="noreferrer"
          className="mr-2"
        >
          <Button>
            <span className="font-semibold text-sm text-white mr-2">
              GitHub
            </span>{" "}
            <GitHubLogo size={16} />
          </Button>
        </a>
      </div>
    </div>
  );
};
