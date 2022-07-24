import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typedefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server";

dotenv.config();

const PORT = process.env.port || 4111;
const UI_URLS = process.env.UI_URLS?.split(",") || ["http://localhost:3000"];

console.log(`UI_URLS: ${UI_URLS}`);
console.log(`PORT: ${PORT}`);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  cors: {
    origin: UI_URLS,
  },
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
