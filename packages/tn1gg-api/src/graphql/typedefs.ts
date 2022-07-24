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

  type NewsItem {
    title: String!
    link: String!
    guid: String!
    description: String
    pubDate: String!
    author: String!
    keywords: [String]
  }

  type Query {
    minecraftStatus: MinecraftStatus!
    news: [NewsItem]!
  }
`;
