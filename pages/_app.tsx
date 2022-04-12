import "../styles/globals.css";
import type { AppProps } from "next/app";
import store, { persistor } from "../src/redux/store";
import { Provider } from "react-redux";
import Layout from "../src/layout";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null}  persistor={persistor}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
