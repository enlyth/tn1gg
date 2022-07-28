import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useClient } from "../lib/client";
import { ApolloProvider } from "@apollo/client";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }: AppProps) {
  const client = useClient();

  return (
    <ApolloProvider client={client}>
      <PlausibleProvider
        domain="tn1.gg"
        customDomain="https://analytics.tn1.gg"
        selfHosted
        trackOutboundLinks
        // enabled // by default it's enabled if NODE_ENV is "production"
      >
        <Component {...pageProps} />
      </PlausibleProvider>
    </ApolloProvider>
  );
}

export default MyApp;
