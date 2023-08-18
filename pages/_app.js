import React from "react";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";

import { Layout } from "../components";
import "../styles/globals.css";
import { StateContext } from "../context/StateContext";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <StateContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </StateContext>
    </SessionProvider>
  );
}
