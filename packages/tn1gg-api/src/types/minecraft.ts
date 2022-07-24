export interface IMinecraftStatus {
  online: boolean;
  name?: string;
  players?: number;
  maxPlayers?: number;
  version?: string;
  ping?: number;
  lastUpdated: number;
}
