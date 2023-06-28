import React, { useEffect, useState } from "react";
// `import { createFeed, getAllFeeds } from "../adapters/feeds-adapter";

function Feeds() {
  const [feeds, setFeeds] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [feedContent, setFeedContent] = useState("");

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const result = await getAllFeeds();
        setFeeds(result);
      } catch (error) {
        console.error("Error fetching feeds:", error);
      }
    };

    fetchFeeds();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (feedContent.trim() !== "") {
      try {
        const newFeed = await createFeed({ content: feedContent });
        setFeeds((prevFeeds) => [...prevFeeds, newFeed]);

        setFeedContent("");
        setShowForm(false);
      } catch (error) {
        console.error("Error creating feed:", error);
      }
    }
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <h1>Feeds</h1>
      <button onClick={toggleFormVisibility}>{showForm ? "Cancel" : "Create Post"}</button>
      {showForm && (
        <form onSubmit={handleFormSubmit}>
          <label>
            Feed Content:
            <textarea
              value={feedContent}
              onChange={(e) => setFeedContent(e.target.value)}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}

      <h2>Feeds:</h2>
      {feeds.length === 0 ? (
        <p>No feeds available.</p>
      ) : (
        <ul>
          {feeds.map((feed, index) => (
            <li key={index}>
              <p>{feed.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Feeds;
