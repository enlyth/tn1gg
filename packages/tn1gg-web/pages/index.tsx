import React from "react";
import { Navigation } from "../components/layout/Navigation";
import Head from "next/head";
import Image from "next/image";
import { SocialLinks } from "../components/home/SocialLinks";
import { News } from "../components/home/News";

export default function Home() {
  return (
    <>
      <Head>
        <title>TN1.gg | Tunbridge Wells</title>
        <meta name="description" content="TN1.gg" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 pb-8">
        <Navigation />
        <main className="flex flex-col items-center justify-center w-full flex-1 p-8 text-center">
          <div className="max-w-5xl">
            {/* <Image
              src="/logo.png"
              alt="logo"
              height={"100%"}
              width={224}
              objectFit="contain"
            /> */}

            <h1 className="text-2xl m-6 text-neutral-200">
              Welcome to{" "}
              <span className="text-indigo-500 font-semibold">TN1.gg</span>, the
              online community for Tunbridge Wells.
            </h1>
            <SocialLinks />
            {/* <News /> */}
          </div>
        </main>
      </div>
    </>
  );
}
