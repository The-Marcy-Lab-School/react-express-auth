import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Button } from '@chakra-ui/react'
import AddComment from "./AddComment";

import { getUser } from "../adapters/user-adapter";

export default function Post({ user_id, post_id }) {

    const [userProfile, setUserProfile] = useState(null)
    const [userPost, setUserPost] = useState(null)

    useEffect(() => {
        const loadUser = async () => {
          const [user, error] = await getUser(user_id);
          if (error) return setErrorText(error.message);
          setUserProfile(user);
        };
    
        loadUser();
      }, [user_id]);

      useEffect(() => {
        const loadPost = async () => {
          const [post, error] = await getPost(post_id);
          if (error) return setErrorText(error.message);
          setUserPost(post);
        };
    
        loadPost();
      }, [post_id]);


      console.log(userProfile, userPost)

    return (<>
        <Card maxW='md' mb='100px'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userProfile.username} src={userProfile.profile_image} />

                        <Box>
                            <Heading size='sm'>{userProfile.username}</Heading>
                            <Text>{location}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Heading size='lg'>{title}</Heading>
                <Text>
                    {description}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={image}
                alt='No Pic'
            />

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <Button flex='1' variant='ghost'>
                    Like
                </Button>
                <AddComment />

            </CardFooter>
        </Card>
    </>)
}