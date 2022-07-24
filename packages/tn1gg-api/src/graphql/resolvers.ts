import { minecraftQueryResolvers } from "./resolvers/minecraft";
import { newsQueryResolvers } from "./resolvers/news";

export const resolvers = {
  Query: {
    ...minecraftQueryResolvers,
    ...newsQueryResolvers,
  },
};
