import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Button } from '@chakra-ui/react'
import AddComment from "./AddComment";

import { getUser } from "../adapters/user-adapter";
import { getPost } from "../adapters/post-adapter";

export default function Post({ id, comments, setComments }) {

    const [userProfile, setUserProfile] = useState({})
    const [userPost, setUserPost] = useState({})
    const [errorText, setErrorText] = useState(null);


    useEffect(() => {
        const loadPost = async () => {
            const [post, error] = await getPost(id);
            if (error) return setErrorText(error.message);
            setUserPost(post);
        };
        loadPost();
    }, [id]);

    useEffect(() => {
        const loadUser = async () => {
            const [user, error] = await getUser(userPost.user_id);
            if (error) return setErrorText(error.message);
            setUserProfile(user);
        };
        if (userPost.user_id) loadUser();
    }, [userPost.user_id]);

    return (<>
        <Card maxW='md' mb='100px'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userProfile.username} src={userProfile.profile_image} />

                        <Box>
                            <Heading size='sm'>{userProfile.username}</Heading>
                            <Text>{userPost.location}</Text>
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Heading size='lg'>{userPost.title}</Heading>
                <Text>
                    {userPost.description}
                </Text>
            </CardBody>
            <Image
                objectFit='cover'
                src={userPost.image}
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
                <AddComment  
                comments={comments} 
                setComments={setComments}
                post_id={id}
                />

            </CardFooter>
        </Card>
    </>)
}