import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselCard from './CarouselCards';
import { Button } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export default function ArticlesCarousel() {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3 //3 items showing
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const CustomButtonGroup = ({ next, previous, ...rest }) => {
        return (
          <div {...rest}>
            <Button onClick={() => previous()} position="absolute" left={0} top="50%" transform="translateY(100%) translateX(100%)" zIndex="2">
              <ChevronLeftIcon />
            </Button>
            <Button onClick={() => next()} position="absolute" right={0} top="50%" transform="translateY(100%) translateX(-130%)" zIndex="2">
              <ChevronRightIcon />
            </Button>
          </div>
        );
      };

    const [articles, setArticles] = useState([]);
    const [filter, setFilter] = useState('help environment recycling');

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
            }
          };

        fetchData();
    }, [filter]);

    return (
        <div className='articlesCarousel' style={{ position: 'relative', padding: '0 8rem', marginLeft: '1rem', marginTop: '12rem', marginBottom: '5rem' }}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '5rem', textAlign: 'center' }}>Learn More</h1>
            <Carousel
                responsive={responsive}
                arrows={false}
                renderButtonGroupOutside={true}
                customButtonGroup={<CustomButtonGroup />}
            >
                {articles.map((article, index) => (
                    <CarouselCard key={index} article={article} />
                ))}
            </Carousel>
        </div>
    );
}
