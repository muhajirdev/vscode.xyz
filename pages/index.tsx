import Head from "next/head";
import Layout from "../components/layout";
import { TWITTER_URL, TITLE } from "../config";

const GIF_SRC =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1561899815957/rY6Rk-Qp8.gif";

const Home = () => (
  <Layout>
    <Head>
      <title>{TITLE}</title>
    </Head>
    <div className="bg-dark pt-32">
      {/* FIRST SECTION */}
      <section className="max-w-6xl mx-auto flex py-32">
        <div className="w-1/2">
          <h1 className="text-white font-bold text-6xl mb-16">
            Animated VSCode Tips & Tricks
          </h1>
          <h2 className="text-gray-200 text-3xl">from ABC to XYZ</h2>
        </div>
        <div className="w-1/2">
          <img
            src={GIF_SRC}
            className="w-full rounded shadow-2xl object-contain"
          />
        </div>
      </section>
      {/* SECOND SECTION */}
      <section className="max-w-6xl mx-auto py-32">
        <div>
          <h1 className="text-white font-bold text-5xl mb-16">
            Coming Soon :)
          </h1>
          <h2 className="text-gray-200 text-2xl max-w-4xl">
            Follow us on twitter{" "}
            <a href={TWITTER_URL} className="underline">
              @vscodexyz
            </a>{" "}
            for the the updates
          </h2>
        </div>
      </section>
    </div>
  </Layout>
);

export default Home;
