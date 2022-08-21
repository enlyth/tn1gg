import React from "react";
import { useNewsQuery } from "../../graphql/generated/schema";
import { Loading } from "../generic/Loading";

export const News = () => {
  const { data, error, loading } = useNewsQuery();

  const news = data?.news;

  return (
    <div className="bg-neutral-800 p-4 flex flex-col items-center justify-center flex-wrap max-w-8xl mt-8 sm:w-full rounded-lg min-h-[320px] shadow-md">
      {loading && <Loading />}
      {error && <div>Failed to load news feed.</div>}
      {news && (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 w-full text-left max-h-[620px] overflow-y-scroll overflow-x-hidden scrollbar pr-2">
          {news.map((newsItem) => (
            <a
              href={newsItem!.link}
              target="_blank"
              rel="noreferrer"
              key={newsItem!.guid}
              className="group"
            >
              <h1 className="text-neutral-200 font-bold group-hover:text-indigo-400 transition hover:ease-in-out duration-200">
                {newsItem!.title}
              </h1>
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
      )}
    </div>
  );
};
