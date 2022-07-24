import axios from "axios";
import { XMLParser, XMLValidator } from "fast-xml-parser";

const NEWS_ENDPOINT = "https://www.kentlive.news/news/?service=rss";
const CACHE_TTL_MS = 1000 * 60 * 10; // 10 minutes

const newsCache = {
  lastUpdated: 0,
  news: [],
};

interface INewsItemXML {
  title: string;
  link: string;
  guid: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  "media:keywords": string;
}

export const newsQueryResolvers = {
  news: async () => {
    try {
      const now = new Date().getTime();
      if (now - newsCache.lastUpdated <= CACHE_TTL_MS) {
        return newsCache.news;
      }
      const response = await axios.get(NEWS_ENDPOINT);

      const xml = response.data;
      const valid = XMLValidator.validate(xml);
      if (!valid) {
        throw new Error("Invalid XML");
      }
      const parser = new XMLParser();
      const parsed = parser.parse(xml);
      newsCache.news = parsed.rss.channel.item.map((item: INewsItemXML) => ({
        ...item,
        pubDate: new Date(item.pubDate).toISOString(),
        keywords: item["media:keywords"].split(", "),
      }));
      newsCache.lastUpdated = now;
      return newsCache.news;
    } catch (error) {
      // Some kind of error reporting, maybe to a Discord webhook
      console.error(error);
      return [];
    }
  },
};
