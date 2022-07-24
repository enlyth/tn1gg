import React, { useState } from "react";
import { LinkBox } from "../generic/LinkBox";
import { DiscordLogo } from "../logos/DiscordLogo";
import { MinecraftLogo } from "../logos/MinecraftLogo";
import { RedditLogo } from "../logos/RedditLogo";
import { MinecraftModal } from "../minecraft/MinecraftModal";

export const SocialLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-8 justify-center max-w-8xl mt-6 sm:w-full cursor-pointer">
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
        onClick={() => setIsOpen(true)}
        title="Minecraft"
        description={
          <div className="text-neutral-100">
            <p>Play with us on our Minecraft server!</p>
          </div>
        }
      >
        <MinecraftLogo size={128} />
      </LinkBox>
      <MinecraftModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};
