import React, { useState, useEffect } from 'react';

const Article = ({ article }) => {
  const handleClick = () => {
    window.open(article.web_url, '_blank');
  };
  return (
    <div class="card mb-4" id='newsCard'>
      <div class="card-content">
        <div class="content">
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
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_24581aea2419d64bc1af13fab0cfa12222033&q=environment'
        );

        if (!response.ok) {
          throw new Error('Error fetching articles');
        }

        const data = await response.json();
        const articlesFromNewsData = data.data.news;

        setArticles(articlesFromNewsData);
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
      }}
    >
      <h1 style={{ margin: '20px' }}>NewsFeed</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : articles.length > 0 ? (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {articles.map((article, index) => (
            <Article key={index} article={article} />
          ))}
        </div>
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
};

export default ArticleList;