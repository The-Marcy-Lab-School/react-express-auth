import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text, Stack } from "@chakra-ui/react";
import { FaMapLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { BsChatSquareTextFill } from "react-icons/bs";


export default function Hero() {
    return <>
        <section id="hero" className="flex flex-col justify-center items-center space-x-0 bg-[#E4E4E4] h-screen">
            <div className='h-[30rem] w-[45rem] mr-[30rem] mt-[2.5rem] align-middle content-center items-center justify-center bg-fixed bg-community bg-fill'>
                <div className="h-[25rem] w-[40rem] ml-[30rem] mt-[2.5rem] align-middle content-center items-center justify-center" style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}>
                    <h1 className="text-5xl">Welcome to the Community</h1>
                    <p className="text-xl">Find the best resources for your next adventure</p>
                </div>
            </div>

            <Card className="w-[85%] mt-[2rem]" background={'transparent'} border="0px" boxShadow="0">
                <CardBody className="flex flex-row justify-around">
                    <NavLink to="/maps">
                        <Stack>
                            <FaMapLocationDot size={50} />
                            <Heading fontSize={'xl'} fontWeight={'bold'}>Maps</Heading>
                            <Text fontSize={'sm'} noOfLines={2} fontWeight={'bold'} className="w-[16rem]">Explore a plethora of informative heat maps & destinations of interest!</Text>
                        </Stack>
                    </NavLink>
                    <NavLink to="/posts">
                        <Stack>
                            <BsChatSquareTextFill size={50} />
                            <Heading fontSize={'xl'} fontWeight={'bold'}>Community Posts</Heading>
                            <Text fontSize={'sm'} noOfLines={2} fontWeight={'bold'} className="w-[16rem]">Explore our community uploads & find an event that speaks to you!</Text>
                        </Stack>
                    </NavLink>
                    <NavLink to="/About-us">
                        <Stack>
                            <FaPeopleGroup size={50} />
                            <Heading fontSize={'xl'} fontWeight={'bold'}>About Us</Heading>
                            <Text fontSize={'sm'} noOfLines={2} fontWeight={'bold'} className="w-[16rem]">Learn about the team who brought this all together!</Text>
                        </Stack>
                    </NavLink>
                </CardBody>
            </Card>
        </section>
    </>
}