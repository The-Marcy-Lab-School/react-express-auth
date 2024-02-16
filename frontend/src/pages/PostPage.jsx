import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image, Button, ButtonGroup, Input, FormControl } from '@chakra-ui/react'
import Post from '../components/Post'
import AddComment from "../components/AddComment";
import Comment from '../components/Comment'
import { useNavigate, useParams } from "react-router-dom";
import { getCommentsFromPost } from "../adapters/comment-adapter";
import { createComment } from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";

export default function PostPage() {

    const [errorText, setErrorText] = useState(null)
    const [postComments, setPostComments] = useState([]) //all comments on post
    const { id } = useParams(); //grabs id from url

    useEffect(() => {
        const getComments = async () => {
            let [comments, error] = await getCommentsFromPost(id) //gets all comments on post via post id
            if (error) return setErrorText(error.text)
            setPostComments(comments) //sets fetched comments to arr
        }
        getComments()
    }, [id])

    return <>
        <Flex alignContent={'center'} justifyContent={'center'}>
            <Post id={id} comments={postComments} setComments={setPostComments} />
            {/*pass in all comments arr as prop to create comments form so any recently made comments also gets added and displayed */}
            <AddComment post_id={id} comments={postComments} setComments={setPostComments} />
        </Flex>
    </>
}

