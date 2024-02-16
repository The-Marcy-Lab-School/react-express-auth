import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Button, ButtonGroup } from '@chakra-ui/react'
import EditPostForm from "./EditPostForm";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getPost } from "../adapters/post-adapter";

export default function Post({ id, comments, setComments }) {
    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
    const [userProfile, setUserProfile] = useState({}) //userinfo of who made post
    const [userPost, setUserPost] = useState({}) //post data
    const [errorText, setErrorText] = useState(null);


    useEffect(() => {
        const loadPost = async () => {
            const [post, error] = await getPost(id); //gets post via id from db
            if (error) return setErrorText(error.message);
            setUserPost(post); //sets user state to the post we fetched
        };
        loadPost();
    }, [id]);

    useEffect(() => {
        const loadUser = async () => {
            const [user, error] = await getUser(userPost.user_id); //gets the user info of who made the post 
            if (error) return setErrorText(error.message);
            setUserProfile(user);
        };
        if (userPost.user_id) loadUser(); //waits until post data is fetched to fetch user info
    }, [userPost.user_id]);

    return (<>

        <Card maxW='md'>
            <CardHeader>
                <Flex spacing='4'>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userProfile.username} src={userProfile.profile_image} />
                        <Heading size='sm'>{userProfile.username}</Heading>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Box className="flex flex-row justify-between">
                    <Heading size='lg'>{userPost.title}</Heading>
                    <Box className="flex flex-row w-[5em] space-x-[1em] mr-[1.5em]">
                        <Text>Start: {userPost.start_time}</Text>
                        <Text>End: {userPost.end_time}</Text>
                    </Box>
                </Box>
                <Text className="text-gray-600">{userPost.location}</Text>
                <Image objectFit='cover' src={userPost.image} alt='No Pic' />
                <Box className="flex flex-row">
                    <Text fontSize='md' className="h-[6em] w-[75%] m-[1em]">{userPost.description}</Text>
                    <ul className="mt-[1.2em]">
                        {
                            userPost.tags && userPost.tags.split(",").map((tag, index) => <Text key={index}>{tag}</Text>)
                        }
                    </ul>
                </Box>
            </CardBody>

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '136px',
                    },
                }}
            >
                <ButtonGroup>
                    <Button flex='1' variant='ghost'>
                        Like
                    </Button>
                    <EditPostForm /*post={userPost} setPost={setUserPost}*/ />
                </ButtonGroup>
            </CardFooter>
        </Card>
    </>)
}