import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/custom.scss";
import "../styles/globals.css";

import { useEffect } from "react";
import { useRouter } from "next/router";

import * as ga from "../lib/ga";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };

    // Add chat
    if (process.env.SMALL_CHAT_ENABLED) {
      const chatTag = document.createElement("script");
      chatTag.src = "https://embed.small.chat/T028BAWJTRBC028BBS72G5.js";
      chatTag.async = true;
      document.body.appendChild(chatTag);
    }

    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Ubuntu"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
