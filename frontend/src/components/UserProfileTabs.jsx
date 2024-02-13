import { NavLink } from "react-router-dom";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { Wrap, WrapItem, Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import { Box, Card, CardHeader, Heading, CardBody, CardFooter } from '@chakra-ui/react'

const UserProfileTabs = ({ username, bio, userLikes, userPosts }) => {

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
                                    <Card key={index}>
                                        <CardHeader>
                                            <Heading size='md'><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Text>{post.description}</Text>
                                            <Text>Location: {post.location}</Text>
                                        </CardBody>
                                        <CardFooter>
                                            <ButtonGroup spacing='2' colorScheme='green'>
                                                <Button variant='solid' colorScheme='green'>
                                                    Edit
                                                </Button>
                                                <Button variant='ghost' colorScheme='green'>
                                                    Delete
                                                </Button>
                                            </ButtonGroup>
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
                                            <Heading size='md'><NavLink to={`/posts/${post.id}`}>{post.title}</NavLink></Heading>
                                        </CardHeader>
                                        <CardBody>
                                            <Text>{post.description}</Text>
                                            <Text>Location: {post.location}</Text>
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