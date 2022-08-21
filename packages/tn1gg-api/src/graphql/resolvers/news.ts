import axios from "axios";
import { XMLParser, XMLValidator } from "fast-xml-parser";

interface INewsItemXML {
  title: string;
  link: string;
  guid: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  "media:keywords": string;
  "dc:creator"?: string;
}
interface INewsCache {
  lastUpdated: number;
  news: INewsItemXML[];
}

const NEWS_ENDPOINTS = [
  "https://www.kentlive.news/news/?service=rss",
  "https://www.kentonline.co.uk/_api/rss/kent_online_news_feed.xml",
  // "https://rss.app/feeds/uoZ9pfnWbjcFr2ro.xml",
];
const CACHE_TTL_MS = 1000 * 60 * 10; // 10 minutes

const newsCache: INewsCache = {
  lastUpdated: 0,
  news: [],
};

function formatMediaItem(item: INewsItemXML) {
  if (item["dc:creator"]) {
    item.author = item["dc:creator"];
  }
  return {
    ...item,
    pubDate: new Date(item.pubDate).toISOString(),
    keywords: item["media:keywords"]?.split(", ") || [],
  };
}

function sortByDateDesc(a: INewsItemXML, b: INewsItemXML) {
  return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
}

export const newsQueryResolvers = {
  news: async () => {
    try {
      const now = new Date().getTime();
      if (now - newsCache.lastUpdated <= CACHE_TTL_MS) {
        return newsCache.news;
      }
      const response = await Promise.all(
        NEWS_ENDPOINTS.map((url) => axios.get(url))
      );

      const items: INewsItemXML[] = [];

      for (const res of response) {
        const xml = res.data;
        const valid = XMLValidator.validate(xml);
        if (!valid) {
          throw new Error("Invalid XML");
        }
        const parser = new XMLParser();
        const parsed = parser.parse(xml);

        items.push(...parsed.rss.channel.item.map(formatMediaItem));
      }

      items.sort(sortByDateDesc);

      newsCache.news = items;
      newsCache.lastUpdated = now;
      return newsCache.news;
    } catch (error) {
      // Some kind of error reporting, maybe to a Discord webhook
      console.error(error);
      return [];
    }
  },
};
