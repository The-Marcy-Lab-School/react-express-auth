import { useContext, useEffect, useState } from "react";
import Post from '../components/Post'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import { Flex } from "@chakra-ui/react";

//picSrc={'kkkk'} title={'vibe'} location={'llll'} time={'11111'} description={'dgrgrg'}

export default function PostPage() {
    
    return <>
    <Flex alignContent={'center'}>
       <Post picSrc={'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'} description={'With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.'}/>
       <ul>
        <li><Comment src='https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg' text={'this is a cool picture'}/></li>
        <li><Comment src={'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'} text={'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.'}/></li>
       </ul>
       </Flex>
       
    </>
}

