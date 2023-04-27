import GlobalStyle from "../styles";
import useSWR from "swr";

import ArtPieces from "../components/ArtPieces";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const { data, error, isLoading } = useSWR(URL,fetcher);

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }



  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ArtPieces pieces={data} />
    </>
  );
}
