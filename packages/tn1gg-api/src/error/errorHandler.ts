import { postToDevChannel } from "../webhooks/discord";

export function errorHandler(error: unknown) {
  if (error instanceof Error) {
    postToDevChannel(error.message);
  } else {
    postToDevChannel(`Error: ${String(error)}`);
  }
}
