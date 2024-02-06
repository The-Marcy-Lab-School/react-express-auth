import { useContext, useEffect, useState } from "react";
import { Card, CardBody, Heading, Text, Image, Stack } from '@chakra-ui/react'


export default function Comment({src, text}) {
    return <>
        <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
        >
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={src}
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>Comment(username)</Heading>

                    <Text py='2'>
                        {text}
                    </Text>
                </CardBody>
            </Stack>
        </Card>
    </>
}
