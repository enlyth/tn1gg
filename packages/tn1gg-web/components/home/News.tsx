import React from "react";
import { useNewsQuery } from "../../graphql/generated/schema";

export const News = () => {
  const { data, error, loading } = useNewsQuery();

  const news = data?.news;

  return (
    <div className="bg-neutral-800 p-4 flex flex-col items-center justify-center flex-wrap max-w-8xl mt-8 sm:w-full rounded-lg min-h-[320px]">
      {loading && (
        <div className="flex items-center gap-2 text-neutral-200">
          <span className="h-6 w-6 block rounded-full border-4 border-t-neutral-600 animate-spin"></span>
          Loading...
        </div>
      )}
      {error && <div>Failed to load news feed.</div>}
      {news && (
        <>
          <div className="self-start">
            <h1 className="text-2xl font-bold text-neutral-100 mb-2">
              Kent News
            </h1>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full text-left max-h-[320px] overflow-y-scroll overflow-x-hidden scrollbar pr-2">
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
                </p>
                <p className="text-neutral-500 text-sm">
                  {new Date(newsItem!.pubDate).toLocaleDateString([], {
                    day: "numeric",
                    month: "long",
                  })}
                  {", "}
                  {new Date(newsItem!.pubDate).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <p>
                  <span className="text-neutral-400">
                    {new URL(newsItem!.link).hostname}
                  </span>
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
