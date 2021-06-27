import Head from "next/head";
// import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/custom.scss';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
