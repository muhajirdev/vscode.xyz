import "../styles/main.css";
import Header from "./headers";
import Head from "next/head";
const Layout: React.FC = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <div>{children}</div>
  </div>
);

export default Layout;
