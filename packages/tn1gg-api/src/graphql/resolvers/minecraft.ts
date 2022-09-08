// This lib is crashing at the moment
// import * as McStatus from "mcstatus";
import dotenv from "dotenv";
// import { IMinecraftStatus } from "../../types/minecraft";

// const CACHE_TTL_MS = 1000 * 6;

dotenv.config();

const MINECRAFT_SERVER = process.env.MINECRAFT_SERVER as string;

if (!MINECRAFT_SERVER) {
  throw new Error("Missing MINECRAFT_SERVER in .env file");
}

// const options: McStatus.McServer = {
//   host: MINECRAFT_SERVER,
//   port: 25565,
// };

// const mcStatusCache: IMinecraftStatus = {
//   online: false,
//   lastUpdated: 0,
// };

export const minecraftQueryResolvers = {
  minecraftStatus: async () => {
    const now = new Date().getTime();
    // try {
    // if (now - mcStatusCache.lastUpdated <= CACHE_TTL_MS) {
    //   return mcStatusCache;
    // }
    // const serverStatus = await McStatus.checkStatus(options);

    // mcStatusCache.online = true;
    // mcStatusCache.name = serverStatus.motd;
    // mcStatusCache.players = serverStatus.players;
    // mcStatusCache.maxPlayers = serverStatus.max_players;
    // mcStatusCache.lastUpdated = now;
    // mcStatusCache.version = serverStatus.version;
    // mcStatusCache.ping = serverStatus.ping;

    // return mcStatusCache;
    // } catch (error) {
    return {
      online: false,
      lastUpdated: now,
    };
    // }
  },
};
