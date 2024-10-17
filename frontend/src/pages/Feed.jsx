import { useEffect, useState } from "react";
import { getFeed } from "../adapters/feed-adapter";

export default function FeedPage() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    getFeed().then(setFeed);
  }, []);

  return <>
    <h1>My feed page :D</h1>
    <ul>
      {
        console.log(feed)
      }
    </ul>
  </>;
}
