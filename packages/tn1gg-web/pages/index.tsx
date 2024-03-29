import React from "react";
import { Navigation } from "../components/layout/Navigation";
import Head from "next/head";
import { SocialLinks } from "../components/home/SocialLinks";
import { News } from "../components/home/News";
import { Weather } from "../components/home/Weather";

export default function Home() {
  return (
    <>
      <Head>
        <title>TN1.gg | Tunbridge Wells</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 pb-8">
        <Navigation />
        <main className="flex flex-col items-center w-full flex-1 p-8 text-center">
          <div className="max-w-5xl bg-neutral-850 rounded-lg p-5">
            <h1 className="text-2xl mx-6 text-neutral-200">
              Welcome to{" "}
              <span className="text-indigo-500 font-semibold">TN1.gg</span>, the
              online community for Tunbridge Wells.
            </h1>
            <SocialLinks />
            <Weather />
            <News />
          </div>
        </main>
      </div>
    </>
  );
}
