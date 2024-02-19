import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CreatePostAndFilterBar from "../components/CreatePostAndFilterBar";
import CommunityPostsCard from "../components/CommunityPostsCard";
export default function CommunityPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await getAllPosts()
            setPosts(allPosts.sort((a, b) => b.id - a.id))
        }
        getPosts()
    }, [])


    return <>
        <div className="w-full bg-[#D9D9D9]">
            <CreatePostAndFilterBar posts={posts} setPosts={setPosts} />
            <CommunityPostsCard />
            {/* <div className='h-screen w-full bg-[#D9D9D9]flex flex-col justify-center p-[4rem]'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className="p-[4rem]">
                    {posts.map((post) => {
                        return <ul key={post.id}>
                            <Card key={post.id}>
                                <CardHeader>
                                    <Heading size='md'>{post.title}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{post.description}</Text>
                                </CardBody>
                                <CardFooter>
                                    <Button onClick={() => { navigate(`/posts/${post.id}`) }}>View here</Button>
                                </CardFooter>
                            </Card>
                        </ul>
                    })}
                </SimpleGrid>
            </div> */}
        </div>
    </>;
}