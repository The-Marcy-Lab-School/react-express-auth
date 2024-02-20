import { Flex, Box, Fade } from '@chakra-ui/react'
import InfoCard from '../components/InfoCard';
import { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';

export default function AboutUsPage() {
  
  const Wave = ({ scrollY }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
      transform: `translateY(${scrollY * 0.5}px)` // Adjust the multiplier here
    }}>
      <path fill="#FFFFFF" fill-opacity="1" d="M0,160L48,170.7C96,181,192,203,288,192C384,181,480,139,576,133.3C672,128,768,160,864,192C960,224,1056,256,1152,229.3C1248,203,1344,117,1392,74.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    </svg>
  );
  
  const [showText, setShowText] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setShowText(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);// add scroll

    return () => { //clean up scroll
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return <>
      <Flex 
        align="center"
        justify="center"
        flexDirection="column"
        h="80vh"
        bg="#45885f"
        >

      <Fade in={showText} transition={{ enter: { duration: 2} }}>
        <h1 style={{ fontSize: "3rem", marginTop: "2rem", fontWeight: "bold" }}>About Us</h1>
      </Fade>

      <Fade in={showText} transition={{ enter: { duration: 2.5 } }}>
        <Box
          p="2rem"
          maxW="800px"
          textAlign="center"
        >
          <p style={{ fontSize: "1.2rem" }}>
            At PureLink, we tackle the urgent issue of urban litter to enhance community health and well-being. Our app empowers individuals to connect and collaborate on clean-up initiatives, fostering a supportive digital community dedicated to cleanliness and meaningful relationships. Join us in our mission to create cleaner, healthier urban environments—one cleanup at a time.
          </p>
        </Box>
      </Fade>
      
        <Box width="full" overflow="hidden" lineHeight="0">

        <Wave scrollY={scrollY} />
      </Box>
      </Flex>
    
      <Box 
        align="center"
        justify="center"
        flexDirection="column"
        mt="20"
        bg="white" 
        >
  
          <h1 style={{ fontSize: "3rem", marginBottom: "1rem", marginTop: "-1rem", fontWeight: "bold" }}>Meet The Team</h1>

      </Box>
      <Flex justify="space-evenly" mt="50" mb="50">
        <Box
        _hover={{
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.35)",
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out"
        }}
        >
          <InfoCard
            name='Gonzalo C.' 
            imgSrc=''
            imgAlt='Picture of Gonzalo'
            githubUrl='https://github.com/gonzzoh'
            linkedinUrl='https://www.linkedin.com/in/gonzalo-meza-cabrera/'
          />
        </Box>
        <Box
        _hover={{
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.35)",
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out"
        }}
        >
          <InfoCard 
            name='Jason M.' 
            imgSrc=''
            imgAlt='Picture of Jason'
            githubUrl='https://github.com/MaiJGitHub'
            linkedinUrl='https://www.linkedin.com/in/jasonmailink/'
          />
        </Box>
        <Box
        _hover={{
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.35)",
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out"
        }}
        >
          <InfoCard 
            name='Joseph G.' 
            imgSrc=''
            imgAlt='Picture of Joseph'
            githubUrl='https://github.com/Joeyyyys'
            linkedinUrl='https://www.linkedin.com/in/joseph-giler-807ab2224/'
          />
        </Box>
        <Box
        _hover={{
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.35)",
          transform: "scale(1.02)",
          transition: "transform 0.2s ease-in-out, boxShadow 0.2s ease-in-out"
        }}
        >
          <InfoCard 
            name='David C.' 
            imgSrc=''
            imgAlt='Picture of David'
            githubUrl='https://github.com/david-d-c'
            linkedinUrl='https://www.linkedin.com/in/david-cobos00/'
          />
        </Box>
      </Flex>
    </>;
}