import { Card, CardBody, Heading, Text, Image, Stack, IconButton, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function InfoCard({ imgSrc, imgAlt, name, githubUrl, linkedinUrl }) {
    return <> 
    <Card w={300} h={500}>
    <CardBody>
        <Image
        src={imgSrc}
        alt={imgAlt}
        borderRadius='full'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md' align={'center'}>{name}</Heading>
        <Flex justify="space-evenly" align="center">
        <IconButton
          as="a"
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          icon={<FaGithub />}
          colorScheme="gray"
        />
        <IconButton
          as="a"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          icon={<FaLinkedin />}
          colorScheme="blue"
        />
      </Flex>
        </Stack>
    </CardBody>
    </Card>
    </>
}