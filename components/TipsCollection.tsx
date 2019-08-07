import Link from "next/link";
import data from "../data.json";

const getTipsLink = (slug: string) => `t/${slug}`;

const TipsCollection = () => (
  <div className="flex flex-wrap -mx-8">
    {data.tips.map(t => (
      <Link href={getTipsLink(t.slug)}>
          <a className="text-white w-1/3 px-8 pb-12">
            <img src={t.gif} />
            <div className="mt-4">{t.title}</div>
          </a>
      </Link>
    ))}
  </div>
);
export default TipsCollection;
