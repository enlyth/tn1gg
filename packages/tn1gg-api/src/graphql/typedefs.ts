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
    weather: Weather!
  }

  type DailyWeatherInfo {
    time: String!
    temperature_2m_min: String!
    temperature_2m_max: String!
    precipitation_sum: String!
  }

  type DailyWeather {
    time: [String!]!
    temperature_2m_min: [Float!]!
    temperature_2m_max: [Float!]!
    precipitation_sum: [Float!]!
  }

  type Weather {
    latitude: Float!
    longitude: Float!
    timezone: String!
    timezone_abbreviation: String!
    elevation: Float!
    daily_units: DailyWeatherInfo!
    daily: DailyWeather!
  }
`;
