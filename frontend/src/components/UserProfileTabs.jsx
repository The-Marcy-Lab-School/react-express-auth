import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Wrap, WrapItem, Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import { Image, Card, CardHeader, Heading, CardBody, CardFooter } from '@chakra-ui/react'
import { getAllUserPosts } from "../adapters/post-adapter";
import { getAllUserLikes } from "../adapters/like-adapter";
import { getPost } from "../adapters/post-adapter";
import { deletePost } from "../adapters/post-adapter";

const UserProfileTabs = ({ username, id, bio }) => {
    const [userPosts, setUserPosts] = useState([]);
    const [userLikes, setUserLikes] = useState([]);

    const loadLikes = async (id) => {
        try {
            const likes = await getAllUserLikes(id);
            const posts = await Promise.all(likes.map(async (like) => {
                const [post, error] = await getPost(like.post_id);
                return post;
            }));
            setUserLikes(posts);
        } catch (error) {
            console.error(error);
        }
    };

    const loadPosts = async () => {
        const [result, error] = await getAllUserPosts(id);
        if (error) return setErrorText(error.text);
        setUserPosts(result);
    }

    const handleDelete = async (post_id) => {
        await deletePost(id, post_id);
        setUserPosts(userPosts.filter(post => post.id !== post_id));
    }

    useEffect(() => {
        loadPosts();
        loadLikes(id);
    }, []);
    console.log(userPosts)
    return <div className="h-full w-[40rem] flex flex-col space-y-0 left-0 pt-[5rem]">
        <div className="flex flex-col h-[13rem] w-full">
            <h1 className="text-3xl">{username}</h1>
            <h2 className="text-xl mt-[2rem]">{bio}</h2>
        </div>
        <Tabs variant='enclosed' colorScheme='green'>
            <TabList>
                <Tab>Posts</Tab>
                <Tab>Likes</Tab>
            </TabList>
            <TabPanels>
                <TabPanel overflow={"auto"} className="h-[20rem] ">
                    <ul className="flex flex-col">{
                        userPosts.length > 0 ?
                            userPosts.map((post, index) => {
                                return (
                                    <Card key={index} direction={'row'}>
                                        <CardHeader>
                                            <Image src={post.image} alt="post image" />
                                            <Text className="mt-[1em] text-gray-500">Location: {post.location}</Text>
                                        </CardHeader>
                                        <CardBody >
                                            <Heading size='md'><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></Heading>
                                            <Text className="h-[60%]">{post.description}</Text>
                                            <ButtonGroup spacing='2' colorScheme='green' className="bottom-0">
                                                <Button variant='solid' colorScheme='green'>
                                                    Edit
                                                </Button>
                                                <Button onClick={() => handleDelete(post.id)} variant='ghost' colorScheme='green'>
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
                                        </CardBody>
                                        <CardFooter className="text-gray-500 flex flex-col">
                                            <Text className="w-[6em]">Start: {post.start_time}</Text>
                                            <Text className="w-[6em]">End: {post.end_time}</Text>
                                        </CardFooter>
                                    </Card>
                                )
                            })
                            : <p>No posts yet</p>
                    }</ul>
                </TabPanel>
                <TabPanel overflow={"auto"} className="h-[20rem] ">
                    <ul className="flex flex-col">{
                        userLikes.length > 0 ?
                            userLikes.map((post, index) => {
                                return (
                                    <Card key={index}>
                                        <CardHeader>
                                            <Text>Location: {post.location}</Text>
                                        </CardHeader>
                                        <CardBody>
                                            <Heading size='md'><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></Heading>
                                            <Text>{post.description}</Text>
                                        </CardBody>
                                    </Card>
                                )
                            })
                            : <p>No likes yet</p>
                    }</ul>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
}

export default UserProfileTabs;