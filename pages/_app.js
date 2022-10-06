import "../styles/globals.css";
import Head from "next/head";

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user'

const store = configureStore({
  reducer: {user},
 });


function SonsOfTweet({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Sons of Tweet</title>
      </Head>
      <Component {...pageProps} />
      </Provider>
  );
}

export default SonsOfTweet;
