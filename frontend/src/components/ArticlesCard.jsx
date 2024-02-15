import React, { useEffect, useState } from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';

export default function ArticlesComponent ({ filter }) {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_ARTICLES_API_KEY;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${filter}&apiKey=${apiKey}`);
        const data = await response.json();
        const validArticles = data.articles.filter(article => article.urlToImage != null);
        setArticles(validArticles);

      } catch (error) {
        console.error('Error fetching Articles:', error);
        console.log(apiKey);
        console.log(import.meta.env);
      }
    };

    fetchData();
  }, [filter]);

  return (
    <Box className="articles-container" display="flex" flexWrap="wrap" justifyContent={"space-between"}>
      {articles.map((article, index) => (
        <Box key={index} w={{ base: "100%", md: "calc(33.333% - 1rem)" }} borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" >
           <Link href={article.url} target="_blank" rel="noopener noreferrer">
           {article.urlToImage && <Image src={article.urlToImage} alt={article.title} />}
              </Link> 
          <Box p="6">

            <Text fontSize="xl" fontWeight="semibold" mb="2">
              <Link href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </Link>
            </Text>
          </Box>
        </Box>
  ))}
    </Box>
  );
};