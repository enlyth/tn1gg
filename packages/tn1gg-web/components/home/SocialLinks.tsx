import React from "react";
import { LinkBox } from "../generic/LinkBox";
import { DiscordLogo } from "../logos/DiscordLogo";
import { MinecraftLogo } from "../logos/MinecraftLogo";
import { RedditLogo } from "../logos/RedditLogo";

export const SocialLinks = () => {
  return (
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
  );
};
