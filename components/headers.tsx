const TITLE = "VSCode.XYZ";

const Header = () => (
  <header className="bg-dark-light">
    <nav className="max-w-6xl mx-auto py-8 shadow font-black text-xl flex justify-between">
      <h1 className="text-accent">{TITLE}</h1>
      <a href="https://twitter.com/vscodexyz">
        <img src="/static/twitter.svg" />
      </a>
    </nav>
  </header>
);

export default Header;
