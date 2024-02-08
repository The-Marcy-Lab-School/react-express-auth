import { useContext, useEffect, useState } from "react";
import Post from '../components/Post'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import { Flex } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";

export default function PostPage() {

    const { id } = useParams();
   
    return <>
    <Flex alignContent={'center'}>
       <Post id={id}/>
       <ul>
        <li><Comment src='https://wallpapers.com/images/featured/picture-en3dnh2zi84sgt3t.jpg' text={'this is a cool picture'}/></li>
        <li><Comment src={'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'} text={'Caffè latte is a coffee beverage of Italian origin made with espresso and steamed milk.'}/></li>
       </ul>
       </Flex>
       
    </>
}

