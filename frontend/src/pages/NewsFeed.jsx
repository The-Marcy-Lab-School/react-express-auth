import React, { useState, useEffect } from 'react';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=environment&api-key=jpOGZTJ7dvp2jenrZozAWBi37rXc0sJo');

        if (!response.ok) {
          throw new Error('Error fetching articles');
        }

        const data = await response.json();
        setArticles(data.response.docs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>NewsFeed</h1>
      {articles.map(article => (
        <div key={article._id}>
          <h2>{article.headline.main}</h2>
          <p>{article.abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsFeed;
