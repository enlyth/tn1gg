import axios from "axios";
import { EventType, RoadworksEventMessage } from "../message-service/event";

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

const getEventColor = (event: RoadworksEventMessage) => {
  switch (event.event_type) {
    case EventType.WorkStartReverted:
    case EventType.WorkStopReverted:
    case EventType.PermitAlterationGranted:
    case EventType.ActivityUpdated:
      return 0xffff70;
    case EventType.ActivityCancelled:
    case EventType.PermitRefused:
    case EventType.WorkStop:
    case EventType.PermitRevoked:
      return 0xff0030;
    case EventType.WorkStart:
    case EventType.PermitGranted:
    case EventType.PermitSubmitted:
    case EventType.ActivityCreated:
    case EventType.WorkStopReverted:
      return 0x00ff70;
    default:
      return 0x000000;
  }
};

export async function postEventToWebhook(event: RoadworksEventMessage) {
  if (process.env.ENV === "production") {
    const fields = [];

    if (event.object_data.promoter_organisation) {
      fields.push({
        name: "Promoter",
        value: event.object_data.promoter_organisation,
        inline: true,
      });
    }
    if (event.object_data.work_status) {
      fields.push({
        name: "Work Status",
        value: event.object_data.work_status,
        inline: true,
      });
    }
    if (event.object_data.work_category) {
      fields.push({
        name: "Work Category",
        value: event.object_data.work_category,
        inline: true,
      });
    }
    if (event.object_data.activity_type) {
      fields.push({
        name: "Activity Type",
        value: event.object_data.activity_type,
        inline: true,
      });
    }
    if (event.object_data.traffic_management_type) {
      fields.push({
        name: "Traffic Management",
        value: event.object_data.traffic_management_type,
        inline: true,
      });
    }
    try {
      const response = await axios.post(DISCORD_WEBHOOK_URL, {
        content: null,
        embeds: [
          {
            title: event.event_type,
            description: `${event.object_data.town} - ${event.object_data.street_name}`,
            color: getEventColor(event),
            fields,
            footer: {
              text: event.object_data.highway_authority,
            },
            timestamp: event.event_time,
          },
        ],
        username: "Roadworks",
        attachments: [],
      });
      return response.data;
    } catch (err) {
      console.error(`Failed POST to Discord Webhook: ${err}`);
    }
  } else {
    console.log(`Webhook Message: ${event.event_type}`);
  }
}
