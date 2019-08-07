export interface IContributor {
  name: string;
  url: string;
}

export interface IPlugin {
  name: string;
  url: string;
}

export interface ITips {
  gif: string;
  title: string;
  slug: string;
  description: string;
  plugins: string[];
  contributors: string[];
}
