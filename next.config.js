const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

const tipsPages = require("./data.json").tips.reduce((prev, current) => {
  return {
    ...prev,
    [`/t/${current.slug}`]: {
      page: `/t/[id]`,
      query: { id: current.slug }
    }
  };
}, {});

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

// next.config.js
module.exports = withCss(
  withPurgeCss({
    exportPathMap() {
      return {
        "/": { page: "/" },
        "t/index": { page: "/" },
        ...tipsPages
      };
    },
    purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
    purgeCss: {
      whitelist: ["html", "body"],
      extractors: [
        {
          extractor: TailwindExtractor,
          extensions: ["html", "js", "css", "tsx"]
        }
      ]
    }
  })
);
