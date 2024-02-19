import { SimpleGrid, Card, CardHeader, Heading, CardBody, Text, CardFooter, Button } from "@chakra-ui/react";

export default function CommunityPostsCard() {

    return (
        <>
            <div className='h-screen w-full bg-[#D9D9D9]flex flex-col justify-center p-[4rem]'>
                {/* <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className="p-[4rem]">
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
                </SimpleGrid> */}
            </div>
        </>
    )
}