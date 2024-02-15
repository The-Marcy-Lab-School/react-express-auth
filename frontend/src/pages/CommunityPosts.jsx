import { useEffect, useState } from "react";
import { getAllPosts } from "../adapters/post-adapter";
import CreatePostAndFilterBar from "../components/CreatePostAndFilterBar";
import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function CommunityPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getPosts = async () => {
            const allPosts = await getAllPosts()
            setPosts(allPosts.sort((a,b) => b.id - a.id))
        }
        getPosts()
    }, [])


    return <>
        <div className="w-full bg-[#D9D9D9]">
            <div className={`h-[15rem] w-full bg-community z-0 bg-cover bg-start flex align-middle content-center justify-center items-end overflow-visible`}>
                <CreatePostAndFilterBar posts={posts} setPosts={setPosts}/>
            </div>
            <div className='h-screen w-full bg-[#1C1E1F]'>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className="pt-[4rem]">
                    { posts.map((post) => {
                    return <li key={post.id}>
                    <Card>
                        <CardHeader>
                            <Heading size='md'>{post.title}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>{post.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <Button onClick={()=>{navigate(`/posts/${post.id}`)}}>View here</Button>
                        </CardFooter>
                    </Card>
                    </li>})
                    }
                </SimpleGrid>
            </div>
        </div>
    </>;
}