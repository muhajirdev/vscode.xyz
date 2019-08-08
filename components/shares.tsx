import { useRouter } from "next/router";
import { OUR_URL } from "../config";

const Shares: React.FC<{ url: string }> = ({ url }) => {
  const currentURL = `${OUR_URL}${useRouter().asPath}`;
  const shareText = encodeURIComponent("Holy shit, this is awesome");
  const twitterShareURL = `https://twitter.com/intent/tweet?text=${shareText}&url=${currentURL}&via=vscodexyz`;
  const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
  return (
    <div className="py-4">
      <h3 className="text-lg text-white font-bold text-2xl">
        Too good to keep to yourself
      </h3>
      <div className="mt-4">
        <a
          href={twitterShareURL}
          className="rounded-full bg-twitter text-white px-4 py-2 text-lg font-bold inline-flex items-center mr-4"
          target="_blank"
        >
          <img className="inline-block w-6 mb-0" src="/static/twitter.svg" />
          <span className="ml-2">Share it</span>
        </a>
        <a
          href={facebookShareURL}
          className="rounded-full bg-facebook text-white px-4 py-2 text-lg font-bold inline-flex items-center"
          target="_blank"
        >
          <img
            className="inline-block w-6 mb-0 fill-current"
            src="/static/facebook.svg"
          />
          <span className="ml-2">Share it</span>
        </a>
      </div>
    </div>
  );
};
export default Shares;
