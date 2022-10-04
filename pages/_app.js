import Head from "next/head";
import Layout from "../components/layout/Layout";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps, props }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Movie Lover</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
