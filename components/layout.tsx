import "../styles/main.css";
import Header from "./headers";
import Head from "next/head";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = props => {
  return (
    <div className="h-screen bg-gray-300 flex flex-col">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className={"flex-1 " + props.className}>{props.children}</div>
    </div>
  );
};

export default Layout;
