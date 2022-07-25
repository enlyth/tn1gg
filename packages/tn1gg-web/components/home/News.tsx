import React from "react";
import { useNewsQuery } from "../../graphql/generated/schema";

export const News = () => {
  const { data, error, loading } = useNewsQuery();

  const news = data?.news;

  return (
    <div className="bg-neutral-800 flex flex-col items-center justify-center flex-wrap p-4 max-w-8xl mt-8 sm:w-full rounded-lg min-h-[320px]">
      {loading && (
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="h-6 w-6 block rounded-full border-4 border-t-neutral-600 animate-spin"></span>
          Loading...
        </div>
      )}
      {error && <div>Failed to load news feed.</div>}
      {news && (
        <>
          <div className="px-4 pb-2 self-start">
            <h1 className="text-2xl font-bold text-neutral-100">Kent News</h1>
          </div>
          <div className="w-full flex-1 text-left p-4 max-h-[280px] overflow-y-scroll overflow-x-hidden scrollbar">
            {news.map((newsItem) => (
              <a
                href={newsItem!.link}
                target="_blank"
                rel="noreferrer"
                key={newsItem!.guid}
              >
                <h1 className="text-neutral-200">{newsItem!.title}</h1>
                <p className="text-neutral-400 text-sm">
                  {newsItem!.description}
                  {" — "}
                  {new Date(newsItem!.pubDate).toLocaleDateString([], {
                    day: "numeric",
                    month: "long",
                  })}{" "}
                  {new Date(newsItem!.pubDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <br />
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
