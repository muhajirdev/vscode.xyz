import { useRouter } from "next/router";

import { ITips, IPlugin, IContributor } from "../../types";

import Layout from "../../components/layout";
import Shares from "../../components/shares";
import Meta from "../../components/meta";
import data from "../../data.json";

import { TWITTER_URL, GITHUB_ISSUE_URL } from "../../config";
const NOT_FOUND_TITLE = "Oops, we can't find that tips";
const NOT_FOUND_DESCRIPTION =
  "Please contact us on twitter if you think something is wrong";
const NotFound = () => (
  <section className="max-w-6xl mx-auto flex py-32">
    <div className="w-1/2">
      <h1 className="text-white font-bold text-6xl mb-16">{NOT_FOUND_TITLE}</h1>
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
          <a
            className="text-gray-200 text-lg font-bold"
            href={getPlugin(p).url}
          >
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
          <a
            className="text-gray-200 text-lg font-bold"
            href={getContributor(p).url}
          >
            {getContributor(p).name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Tips: React.FC<ITips> = props => {
  return (
    <div>
      <section className="max-w-6xl mx-auto flex pt-24">
        <div className="w-2/3 pr-8">
          <img src={props.gif} className="w-full h-auto shadow-2xl rounded" />
        </div>
        <div className="w-1/3">
          <h1 className="text-white font-bold text-4xl mb-8">{props.title}</h1>
          <h2 className="text-gray-200 text-xl font-bold">
            {props.description}
          </h2>
          <Plugins plugins={props.plugins} />
          <Contributors contributors={props.contributors} />
          <Shares url={`https://vscode.xyz/t/${props.slug}`} />
        </div>
      </section>
      <section className="max-w-6xl mx-auto py-24">
        <div className="max-w-2xl">
          <h3 className="font-bold text-white text-3xl">
            Want to submit a tips?
          </h3>
          <h4 className="font-bold text-gray-400 text-lg">
            Mention us on{" "}
            <a className="underline" href={TWITTER_URL}>
              twitter
            </a>{" "}
            or open an issue on our{" "}
            <a className="underline" href={GITHUB_ISSUE_URL}>
              github repo
            </a>
          </h4>
        </div>
      </section>
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const id = router.query.id;
  const tips = data.tips.find(x => x.slug === id) as ITips | undefined;
  if (!tips)
    return (
      <Layout>
        <div className="bg-dark pt-32 min-h-screen">
          <Meta
            title={NOT_FOUND_TITLE}
            description={NOT_FOUND_DESCRIPTION}
            image="https://http.cat/404"
          />
          <NotFound />
        </div>
      </Layout>
    );
  return (
    <Layout>
      <Meta
        title={tips.title}
        description={tips.description}
        image={tips.gif}
      />
      <div className="bg-dark pt-32 min-h-screen">
        <Tips {...tips} />
      </div>
    </Layout>
  );
};

export default Page;
