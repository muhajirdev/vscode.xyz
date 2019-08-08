import { TITLE, TWITTER_URL } from "../config";
const TWITTER_LOGO_PATH = "/static/twitter.svg";
import Link from 'next/link'

const Header = () => (
  <header className="bg-dark-light absolute w-full shadow-lg">
    <nav className="max-w-4xl xl:max-w-6xl mx-auto py-8 font-black text-xl flex justify-between px-8 lg:px-0">
      <Link href="/">
        <a>
          <h1 className="text-accent">{TITLE}</h1>
        </a>
      </Link>
      <a href={TWITTER_URL} className="w-8">
        <img src={TWITTER_LOGO_PATH} />
      </a>
    </nav>
  </header>
);

export default Header;
