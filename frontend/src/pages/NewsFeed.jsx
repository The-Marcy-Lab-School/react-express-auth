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
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'auto', marginTop: '30px', marginBottom: '20px' }}>
      <h1 style={{ margin: '25px' }} className='title'>NewsFeed</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {articles.map(article => (
          <Article key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;