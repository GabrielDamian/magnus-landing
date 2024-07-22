// src/pages/_app.js

import React from "react";
import BurgerMenu from "../components/Menu/Menu_1/index";
import "../globals.css";
import LoadingScreen from "../saturn/LoadingScreen/LoadingScreen";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
        />
      </Head>
      <div style={{ minWidth: "370px" }}>
        <BurgerMenu />
        <LoadingScreen>
          <Component {...pageProps} />
        </LoadingScreen>
      </div>
    </>
  );
};

export default MyApp;
