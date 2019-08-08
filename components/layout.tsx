import "../styles/main.css";
import Header from "./headers";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  className?: string;
};

const Layout: React.FC<Props> = props => {
  const router = useRouter();
  return (
    <div className="h-screen bg-gray-300 flex flex-col">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={router.asPath} />
      </Head>
      <Header />
      <div className={"flex-1 " + props.className}>{props.children}</div>
    </div>
  );
};

export default Layout;
