import { gql } from "apollo-server";

export const typeDefs = gql`
  type MinecraftStatus {
    online: Boolean!
    name: String
    players: Int
    maxPlayers: Int
    version: String
    ping: Int
    lastUpdated: Float
  }

  type Query {
    minecraftStatus: MinecraftStatus!
  }
`;
