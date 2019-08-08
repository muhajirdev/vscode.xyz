import { useRouter } from "next/router";
import { TWITTER_HANDLE, TITLE } from "../config";

const Meta: React.FC<{
  title: string;
  description: string;
  image: string;
}> = props => {
  const router = useRouter();
  return (
    <>
      {/* Facebook */}
      <link rel="canonical" href={router.asPath} />
      <meta property="og:url" content={router.asPath} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${props.title} | ${TITLE}`} />
      <meta property="og:image" content={props.image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={"@" + TWITTER_HANDLE} />
      <meta name="twitter:title" content={`${props.title} | ${TITLE}`} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:image:alt" content={props.title} />
    </>
  );
};

export default Meta;
