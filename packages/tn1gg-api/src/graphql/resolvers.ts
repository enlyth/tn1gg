import { minecraftQueryResolvers } from "./resolvers/minecraft";

export const resolvers = {
  Query: {
    ...minecraftQueryResolvers,
  },
};
