import Topbar from "./reusable/Topbar";
import styles from "./Default.module.css";
import Head from "next/head";
export default function Default({ children }) {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Topbar></Topbar>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
