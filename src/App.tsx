import { useEffect, useState } from "react";
import { createRestAPIClient, mastodon } from "masto";
import "./App.css";

function App() {
  const [restClient, setRestClient] = useState<
    mastodon.rest.Client | undefined
  >(undefined);

  useEffect(() => {
    const newRestClient = createRestAPIClient({
      url: "https://octodon.social",
      accessToken: "1234",
    })
    setRestClient(
      newRestClient
    );
  }, []);

  return <div>has Client {String(!!restClient)}</div>;
}

export default App;
