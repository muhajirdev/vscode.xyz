import Head from "next/head";
import Layout from "../components/layout";
import { TWITTER_URL, TITLE, AUTHOR_TWITTER_URL } from "../config";
import TipsCollection from "../components/TipsCollection";
import Link from "next/link";

import { tips } from "../data.json";
import { useState, useEffect } from "react";

const Home = () => {
  // Generate random featuredTips
  const [featuredTips, setFeaturedTips] = useState(tips[0]);
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    setFeaturedTips(tips[randomIndex]);
  }, []);

  return (
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
            <Link href={`/t/${featuredTips.slug}`}>
              <a>
                <img
                  src={featuredTips.gif}
                  className="w-full rounded shadow-2xl object-contain"
                />
              </a>
            </Link>
          </div>
        </section>
        <section className="max-w-6xl mx-auto">
          <TipsCollection />
        </section>
        {/* SECOND SECTION */}
        <section className="max-w-6xl mx-auto py-32">
          <div>
            <h1 className="text-white font-bold text-5xl mb-16">
              We're not done yet :) }
            </h1>
            <h2 className="text-gray-200 text-2xl max-w-4xl">
              Follow us on twitter{" "}
              <a href={TWITTER_URL} className="underline">
                @vscodexyz
              </a>{" "}
              and{" "}
              <a href={AUTHOR_TWITTER_URL} className="underline">
                @muhajirdev
              </a>{" "}
              for more animated tips and tricks
            </h2>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
