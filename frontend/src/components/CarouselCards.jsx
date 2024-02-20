import React from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';

export default function ArticleCard({ article }) {
    return (
      <Box borderWidth="1px" borderRadius="lg" overflow="hidden" m="2" w="full" maxW="sm" h="auto">
        <Link href={article.url} target="_blank" rel="noopener noreferrer">
          <Image src={article.urlToImage} alt={article.title} objectFit="cover" h="200px" w="full" />
        </Link>
        <Box p="6">
          <Text fontSize="xl" fontWeight="semibold" mb="2" noOfLines={2}>
            <Link href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </Link>
          </Text>
        </Box>
      </Box>
    );
  }
  