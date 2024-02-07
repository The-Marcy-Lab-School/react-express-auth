import { Card, CardBody, Heading, Text, Image, Stack, IconButton, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function InfoCard() {
    return <> 
    <Card w={300} h={500}>
    <CardBody>
        <Image
        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
        alt='Green double couch with wooden legs'
        borderRadius='full'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md' align={'center'}>Name</Heading>
        <Flex justify="space-evenly" align="center">
        <IconButton
          as="a"
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          icon={<FaGithub />}
          colorScheme="gray"
        />
        <IconButton
          as="a"
          href="https://www.linkedin.com"
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