import https from "https";

import { Request, Response } from "express";
import { isValidSignature } from "./messageValidator";

export enum SNSMessageType {
  SubscriptionConfirmation = "SubscriptionConfirmation",
  Notification = "Notification",
}

export interface ISNSMessage {
  Subject?: string;
  Type: SNSMessageType;
  MessageId: string;
  Token: string;
  TopicArn: string;
  Message: string;
  SubscribeURL: string;
  Timestamp: string;
  SignatureVersion: string;
  Signature: string;
  SigningCertURL: string;
  UnsubscribeURL?: string;
  MessageAttributes?: {
    [key: string]: {
      Type: string;
      Value: string;
    };
  };
}

export function roadworksEndpoint(req: Request, res: Response) {
  const chunks: string[] = [];
  req.on("data", function (chunk) {
    chunks.push(chunk);
  });
  req.on("end", async function () {
    try {
      const message = JSON.parse(chunks.join("")) as ISNSMessage;
      if (!req.get("x-amz-sns-message-type")) {
        console.log(`SNS: x-amz-sns-message-type missing.`);
        res.end();
        return;
      }

      if (await isValidSignature(message)) {
        handleMessage(message);
        res.end();
      } else {
        throw "Message signature is not valid";
      }
    } catch (err) {
      console.error(err);
      res.json({ error: err instanceof Error ? err.message : String(err) });
    }
  });
}

function handleMessage(body: ISNSMessage) {
  switch (body.Type) {
    case SNSMessageType.SubscriptionConfirmation:
      confirmSubscription(body.SubscribeURL as string);
      break;
    case SNSMessageType.Notification:
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

function handleNotification(body: ISNSMessage) {
  // For now, just log stuff relevant to TW, we don't do anything with it yet
  if (body.Message.toLowerCase().includes("tunbridge wells")) {
    console.log(body.Message);
  }
  console.log(`Received message from SNS: ${body.Message}`);
}
