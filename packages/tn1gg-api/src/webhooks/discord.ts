import axios from "axios";

const WEBHOOK_ID = process.env.DISCORD_WEBHOOK_ID;
const WEBHOOK_TOKEN = process.env.DISCORD_WEBHOOK_TOKEN;

const DISCORD_WEBHOOK_URL = `https://ptb.discord.com/api/webhooks/${WEBHOOK_ID}/${WEBHOOK_TOKEN}`;

export async function postToDevChannel(message: string) {
  if (!message) {
    console.error("Cannot post empty message to Discord Webhook");
    return;
  }

  if (process.env.ENV === "production") {
    try {
      const response = await axios.post(DISCORD_WEBHOOK_URL, {
        content: message,
      });
      return response.data;
    } catch (err) {
      console.error(`Failed POST to Discord Webhook: ${err}`);
    }
  } else {
    console.log(`Webhook Message: ${message}`);
  }
}
