import { useRouter } from "next/router";

import { ITips, IPlugin, IContributor } from "../../types";

import Layout from "../../components/layout";
import data from "../../data.json";

import { TWITTER_URL } from "../../config";
const NotFound = () => (
  <section className="max-w-6xl mx-auto flex py-32">
    <div className="w-1/2">
      <h1 className="text-white font-bold text-6xl mb-16">
        Oops, we can't find that tips
      </h1>
      <h2 className="text-gray-200 text-3xl">
        Please contact us on{" "}
        <a className="underline" href={TWITTER_URL}>
          twitter
        </a>{" "}
        if you think something is wrong
      </h2>
    </div>
  </section>
);

const getPlugin = (id: string): IPlugin => {
  const plugin = (data.plugins as { [key: string]: IPlugin })[id];
  if (plugin) {
    return plugin;
  }
  return {
    name: id,
    url: ""
  };
};

const Plugins: React.FC<{ plugins: string[] }> = props => (
  <div>
    <h3 className="text-gray-200 text-2xl mt-8 font-bold">Plugins</h3>
    <ul>
      {props.plugins.map(p => (
        <li className="ml-8 my-2" key={p}>
          <a className="text-white text-lg" href={getPlugin(p).url}>
            {getPlugin(p).name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const getContributor = (id: string): IContributor => {
  const contributor = (data.contributors as { [key: string]: IContributor })[
    id
  ];
  if (contributor) {
    return contributor;
  }
  return {
    name: id,
    url: ""
  };
};

const Contributors: React.FC<{ contributors: string[] }> = props => (
  <div>
    <h3 className="text-gray-200 text-2xl mt-8 font-bold">Contributors</h3>
    <ul>
      {props.contributors.map(p => (
        <li className="ml-8 my-2" key={p}>
          <a className="text-white text-lg" href={getContributor(p).url}>
            {getContributor(p).name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Tips: React.FC<ITips> = props => {
  return (
    <section className="max-w-6xl mx-auto flex py-32">
      <div className="w-1/2">
        <img src={props.gif} />
      </div>
      <div className="w-1/2 pl-8">
        <h1 className="text-white font-bold text-4xl mb-8">{props.title}</h1>
        <h2 className="text-gray-200 text-xl">{props.description}</h2>
        <Plugins plugins={props.plugins} />
        <Contributors contributors={props.contributors} />
      </div>
    </section>
  );
};

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  const tips = data.tips.find(x => x.slug === id) as ITips | undefined;
  return (
    <Layout>
      <div className="bg-dark pt-32 min-h-screen">
        {tips ? <Tips {...tips} /> : <NotFound />}
      </div>
    </Layout>
  );
};

export default Page;
