import Layout from "../components/layout";
import { TWITTER_HANDLE, TWITTER_URL, AUTHOR_TWITTER_URL } from "../config";

const faqs = [
  {
    question: "Hey, I tried the shortcut. It doesnt work? Why is it?",
    answer: (
      <p>
        Make sure you already install the required plugins. <br />
        And, some tips & tricks require custom keybinding. Make sure do the
        custom keybinding first
      </p>
    )
  },
  {
    question: "Where do I find the custom keybinding used here?",
    answer: (
      <a
        className="underline"
        href="https://github.com/muhajirdev/dotfiles/blob/master/vscode-keybindings-mac.json"
      >
        https://github.com/muhajirdev/dotfiles/blob/master/vscode-keybindings-mac.json
      </a>
    )
  },
  {
    question: "How do I use this keybinding json",
    answer:
      "Press cmd + shift + p. Then type `Open Keyboard Shortcuts (JSON)`. Paste that keybinding json there"
  },
  {
    question: "How do I contribute?",
    answer: (
      <p>
        Many ways, you help us sharing this to community.
        <br /> You can submit ideas by mentioning us on twitter{" "}
        <a className="underline" href={TWITTER_URL}>
          @vscode.xyz
        </a>{" "}
        or{" "}
        <a className="underline" href={AUTHOR_TWITTER_URL}>
          @muhajirdev
        </a>{" "}
        <br />
        You can record the gif, and open a pull request on github.
      </p>
    )
  },
  {
    question:
      "Okay, I want to contribute by recording a gif. What software can I use?",
    answer: (
      <p>
        I am currently using <a className="underline" href="https://getkap.co">Kap</a>, But you can
        use anything you want
      </p>
    )
  },
  {
    question:
      "I tried kap. To record a gif. But the file size is pretty big. What should I do?",
    answer:
      "Yeah, try to lower the resolution and fps. Use 15 fps and the resolution about 700"
  },
  {
    question: "Okay I have the gif. How do I do the pull request?",
    answer: (
      <p>
        Cool, You can upload the gif {" "}
        <a className="underline" href="https://github.com/muhajirdev/vscode.xyz/issues/5">here</a> .
        Like I did. After that, copy the image address. <br /> Edit{" "}
        <a className="underline" href="https://github.com/muhajirdev/vscode.xyz/blob/master/data.json">
          this json file
        </a>
        . Just click edit on github. <br /> And add your tips there, following
        the existing format
      </p>
    )
  }
];

const FAQ = () => (
  <Layout>
    <div className="bg-dark py-32 h-full">
      <section className="max-w-4xl xl:max-w-6xl px-8 lg:px-0 mx-auto pt-24">
        <h1 className="text-white text-5xl font-bold">FAQ</h1>
        {faqs.map(({ question, answer }) => (
          <div className="my-8">
            <h3 className="text-xl text-gray-200 font-bold">{question}</h3>
            <h4 className="text-lg text-gray-500 font-bold">{answer}</h4>
          </div>
        ))}
      </section>
    </div>
  </Layout>
);

export default FAQ;
