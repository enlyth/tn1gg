import { resolvers } from "./graphql/resolvers";
import { typeDefs } from "./graphql/typedefs";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";
import https from "https";
import cors from "cors";
// @ts-ignore
import { bodyParserGraphQL } from "body-parser-graphql";

import {
  isValidSignature,
  NotificationBody,
} from "./message-service/messageValidator";

enum MessageType {
  SubscriptionConfirmation = "SubscriptionConfirmation",
  Notification = "Notification",
}

dotenv.config();

const PORT = process.env.PORT || 4111;
const UI_URL = process.env.UI_URL || ["http://localhost:4117"];

console.log(`UI_URLS: ${UI_URL}`);
console.log(`PORT: ${PORT}`);

const app = express();
app.use(bodyParserGraphQL());
app.use(
  cors({
    origin: UI_URL,
    credentials: true,
  })
);

const httpServer = http.createServer(app);

app.post("/roadworks", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    if (!req.get("x-amz-sns-message-type")) {
      console.log(`SNS: x-amz-sns-message-type missing.`);
      res.end();
      return;
    }

    if (await isValidSignature(body)) {
      handleMessage(body);
      res.end();
    } else {
      throw "Message signature is not valid";
    }
  } catch (err) {
    console.error(err);
    res.json({ error: err instanceof Error ? err.message : String(err) });
  }
});

function handleMessage(body: NotificationBody) {
  switch (body.Type) {
    case MessageType.SubscriptionConfirmation:
      confirmSubscription(body.SubscribeURL as string);
      break;
    case MessageType.Notification:
      handleNotification(body);
      break;
    default:
      return;
  }
}

function confirmSubscription(subscriptionUrl: string) {
  https.get(subscriptionUrl);
  console.log("Subscription confirmed");
}

function handleNotification(body: NotificationBody) {
  console.log(`Received message from SNS: ${body.Message}`);
}

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
