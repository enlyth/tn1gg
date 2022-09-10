import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typedefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import cors from "cors";
import { roadworksEndpoint } from "./message-service/roadworks";

dotenv.config();

const PORT = process.env.PORT || 4111;
const UI_URL = process.env.UI_URL || ["http://localhost:4117"];

console.log(`UI_URLS: ${UI_URL}`);
console.log(`PORT: ${PORT}`);

const app = express();

app.use(
  cors({
    origin: UI_URL,
    credentials: true,
  })
);

const httpServer = http.createServer(app);

app.post("/roadworks", roadworksEndpoint);

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    introspection: true,

    cache: "bounded",
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  );
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer();
