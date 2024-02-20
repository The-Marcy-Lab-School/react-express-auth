import { Checkbox, CheckboxGroup, SimpleGrid, Box, Flex, FormLabel, FormControl, Input, Center, Stack } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import PostCard from "./PostCard";

export default function CommunityPostsCard({ posts, filterClick, setBoroughs, setStartTime, setEndTime }) {
    const handleBoroughChange = (e) => {
        setBoroughs(e); 
    };

    const handleStartChange = (e) => {
        setStartTime(e.target.value);
    };

    const handleEndChange = (e) => {
        setEndTime(e.target.value);
    };

    return (
        <>
            <div className='h-screen w-full bg-[#D9D9D9] flex flex-col justify-center p-[4rem]'>
                <Box w='full' h={'full'} p={4}>
                    <Box>
                        {
                            filterClick === "location" &&
                            (
                                <Center>
                                    <Flex direction="row" >
                                        <CheckboxGroup colorScheme="green" onChange={handleBoroughChange}>
                                            <Stack direction={['column', 'row']}>
                                                <Checkbox colorScheme="green" value="bronx">Bronx</Checkbox>
                                                <Checkbox colorScheme="green" value="brooklyn">Brooklyn</Checkbox>
                                                <Checkbox colorScheme="green" value="manhattan">Manhattan</Checkbox>
                                                <Checkbox colorScheme="green" value="queens">Queens</Checkbox>
                                                <Checkbox colorScheme="green" value="statenIsland">Staten Island</Checkbox>
                                            </Stack>
                                        </CheckboxGroup>
                                    </Flex>
                                </Center>
                            )
                        }
                        {
                            filterClick === "time" && (
                                <Center>
                                    <Box>
                                        <FormControl>
                                            <Flex direction="row" gap="4">
                                                <FormLabel htmlFor='startTime'>Start:</FormLabel>
                                                <Input onChange={handleStartChange} type='time' id='startTime' name='startTime' />
                                                <FormLabel htmlFor='endTime'>End:</FormLabel>
                                                <Input onChange={handleEndChange} type='time' id='endTime' name='endTime' />
                                            </Flex>
                                        </FormControl>
                                    </Box>
                                </Center>
                            )
                        }
                    </Box>
                    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' className="p-[4rem]">
                        {posts.map((post) => (
                            <ul key={post.id}>
                                <PostCard post={post} />
                            </ul>
                        ))}
                    </SimpleGrid>
                </Box>
            </div>
        </>
    );
}
