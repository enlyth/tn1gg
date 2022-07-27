import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typedefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";

dotenv.config();

const PORT = process.env.PORT || 4111;
const UI_URL = process.env.UI_URL || ["http://localhost:4117"];

console.log(`UI_URLS: ${UI_URL}`);
console.log(`PORT: ${PORT}`);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  cors: {
    origin: UI_URL,
    credentials: true,
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
