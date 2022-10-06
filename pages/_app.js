import "../styles/globals.css";
import Head from "next/head";

function SonsOfTweet({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sons of Tweet</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default SonsOfTweet;
