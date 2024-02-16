import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardHeader, CardFooter, Flex, Heading, Text, Image, Stack, Avatar } from '@chakra-ui/react'
import { getUser } from "../adapters/user-adapter";


export default function Comment({ user_id, content }) {

    const [userInfo, setUserInfo] = useState({}) //user info of who created the comment
    useEffect(() => {
        const loadUserInfo = async () => {
            const [user, error] = await getUser(user_id); //fetches user info of who made the comment
            if (error) return setErrorText(error.message);
            setUserInfo(user);
        };
        loadUserInfo();
        console.log(userInfo)
    }, [user_id]);

    return <>
        <Card
            overflow='hidden'
            variant='outline'
            gap='0'
            // className="h-[7em]"
        >
            <CardBody>
                <NavLink to={`/users/${userInfo.id}`}>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={userInfo.username} src={userInfo.profile_image} />
                        <Heading size='md'>{userInfo.username}</Heading>
                    </Flex>
                </NavLink>
                <Text className="ml-[4em]">{content}</Text>
            </CardBody>
        </Card>
    </>
}
