import { minecraftQueryResolvers } from "./resolvers/minecraft";
import { newsQueryResolvers } from "./resolvers/news";
import { weatherQueryResolvers } from "./resolvers/weather";

export const resolvers = {
  Query: {
    ...minecraftQueryResolvers,
    ...newsQueryResolvers,
    ...weatherQueryResolvers,
  },
};
