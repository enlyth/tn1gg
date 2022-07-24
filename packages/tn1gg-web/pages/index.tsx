import React from "react";
import { DiscordLogo } from "../components/logos/DiscordLogo";
import { RedditLogo } from "../components/logos/RedditLogo";
import { MinecraftLogo } from "../components/logos/MinecraftLogo";
import { LinkBox } from "../components/LinkBox";
import Head from "next/head";
import { GitHubLogo } from "../icons/GitHub";
import Image from "next/image";
import { ExternalLink } from "../icons/ExternalLink";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 pb-8">
      <Head>
        <title>TN1.gg | Tunbridge Wells</title>
        <meta name="description" content="TN1.gg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
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
      <main className="flex flex-col items-center justify-center w-full flex-1 px-8 text-center">
        <Image src="/logo.png" alt="logo" height={256} width={256}></Image>
        <h1 className="text-2xl m-6 text-neutral-200">
          Welcome to{" "}
          <span className="text-indigo-500 font-semibold">TN1.gg</span>, the
          online community for Tunbridge Wells.
        </h1>
        <div className="flex flex-wrap gap-8 justify-center max-w-8xl mt-6 sm:w-full">
          <LinkBox
            title="Discord"
            link="https://discord.gg/pdV2whK9uv"
            description="Come say hello to us on Discord &rarr;"
          >
            <DiscordLogo size={128} />
          </LinkBox>
          <LinkBox
            title="Reddit"
            link="https://www.reddit.com/r/Tunbridgewells/"
            description="Join our Reddit community &rarr;"
          >
            <RedditLogo size={128} />
          </LinkBox>

          <LinkBox
            title="Minecraft"
            description={
              <div className="text-neutral-100">
                <p>Play with us on our Minecraft server!</p>
                <div className="py-4">
                  <div className="w-full border-t border-neutral-700"></div>
                </div>
                <p className="mb-2">Server Address:</p>
                <code className="rounded mx-1 mt-1 px-2 py-1 bg-indigo-600 text-neutral-100">
                  minecraft.tn1.gg
                </code>
              </div>
            }
          >
            <MinecraftLogo size={128} />
          </LinkBox>
        </div>
      </main>
    </div>
  );
}
