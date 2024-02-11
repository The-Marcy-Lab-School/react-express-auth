import { useContext, useEffect, useState } from "react";
import { Card, CardBody, Heading, Text, Image, Stack, Avatar } from '@chakra-ui/react'
import { getUser } from "../adapters/user-adapter";


export default function Comment({user_id, content}) {

    const [userInfo, setUserInfo] = useState({}) //user info of who created the comment

    useEffect(() => {
        const loadUserInfo = async () => {
            const [user, error] = await getUser(user_id); //fetches user info of who made the comment
            if (error) return setErrorText(error.message);
            setUserInfo(user);
        };
        loadUserInfo();
    }, [user_id]);
    
    return <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Avatar name={userInfo.username} src={userInfo.profile_pic}/>

            <Stack>
                <CardBody>
                    <Heading size='md'>{userInfo.username}</Heading>

                    <Text py='2'>
                        {content}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    </>
}
