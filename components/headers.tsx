import { TITLE, TWITTER_URL } from "../config";
const TWITTER_LOGO_PATH = "/static/twitter.svg";

const Header = () => (
  <header className="bg-dark-light absolute w-full shadow-lg">
    <nav className="max-w-6xl mx-auto py-8 font-black text-xl flex justify-between">
      <h1 className="text-accent">{TITLE}</h1>
      <a href={TWITTER_URL} className="w-8">
        <img src={TWITTER_LOGO_PATH} />
      </a>
    </nav>
  </header>
);

export default Header;
