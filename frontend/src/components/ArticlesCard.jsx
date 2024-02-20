import React, { useEffect, useState } from 'react';
import { Box, Text, Link, Image, Button, Flex } from '@chakra-ui/react';

export default function ArticlesComponent ({ filter, currentPage, setCurrentPage, articlesPerPage = 12 }) {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = import.meta.env.VITE_ARTICLES_API_KEY;
        const response = await fetch(`https://newsapi.org/v2/everything?q=${filter}&apiKey=${apiKey}&pageSize=${articlesPerPage}&page=${currentPage}`);
        const data = await response.json();
        setArticles(data.articles.filter(article => article.urlToImage != null));
        setTotalArticles(data.totalResults);
      } catch (error) {
        console.error('Error fetching Articles:', error);
      }
    };

    fetchData();
  }, [filter, currentPage, articlesPerPage]);

  // Pagination controls
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    window.scrollTo({top: 700, behavior: 'smooth'});
  };
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    window.scrollTo({top: 700, behavior: 'smooth'});
  };

  return (
    <>
      <Box className="articles-container" display="flex" flexWrap="wrap" justifyContent="space-between">
        {articles.map((article, index) => (
          <Box key={index} w={{ base: "100%", md: "calc(33.333% - 1rem)" }} borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" sx={{
            transition: 'all 0.2s ease-in-out',
            _hover: {
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)',
              transform: 'scale(1.05)',
            },
          }}>
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              {article.urlToImage && <Image src={article.urlToImage} alt={article.title} height={200} width="full" objectFit="cover"/>}
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
      <Flex justifyContent="center" marginTop="4">
        <Button colorScheme="teal" variant="outline" mr="4" onClick={prevPage} isDisabled={currentPage <= 1}>
          Previous
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={nextPage} isDisabled={currentPage >= totalPages}>
          Next
        </Button>
      </Flex>
    </>
  );
}