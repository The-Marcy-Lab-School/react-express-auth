import React, { useState, useEffect } from 'react';

const Article = ({ article }) => {
  const handleClick = () => {
    window.open(article.web_url, '_blank');
  };
  return (
    <div className="card">
      <div className="card-content">
        <div className="content">
          <div onClick={handleClick}>
            <h2>{article.headline.main}</h2>
            <p>{article.abstract}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = fetch(
          'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=environment&api-key=jpOGZTJ7dvp2jenrZozAWBi37rXc0sJo'
        );
        const response2 = fetch(
          'https://newsdata.io/api/1/news?apikey=pub_24581aea2419d64bc1af13fab0cfa12222033&q=environment&language=en&category=environment'
        );

        const [data1, data2] = await Promise.all([response1, response2]);

        if (!data1.ok || !data2.ok) {
          throw new Error('Error fetching articles');
        }

        const articles1 = await data1.json();
        const articles2 = await data2.json();

        const articlesFromSecondAPI = articles2.data.results;

        // Combine articles from both APIs
        const combinedArticles = [
          ...articles1.response.docs,
          ...articlesFromSecondAPI,
        ];

        setArticles(combinedArticles);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'auto',
        marginTop: '30px',
      }}>
      <h1 style={{ margin: '20px' }}>NewsFeed</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {articles.map((article) => (
            <Article key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};


export default ArticleList;
