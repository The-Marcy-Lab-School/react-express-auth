import { useContext, useEffect, useState } from "react";
import Post from '../components/Post'
import Comment from '../components/Comment'
import AddComment from '../components/AddComment'
import { Flex } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { getCommentsFromPost } from "../adapters/user-adapter";

export default function PostPage() {

    const [errorText, setErrorText] = useState(null)
    const [postComments, setPostComments] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getComments = async () => {
            let [comments, error] = await getCommentsFromPost(id)
            console.log(comments)
            if(error) return setErrorText(error.text)
            setPostComments(comments)
        }
        getComments()
    }, [id])
   
    return <>
    <Flex alignContent={'center'}>
       <Post id={id}/>
       <ul>
        {postComments.map((comment) => {
            return <Comment user_id={comment.user_id} content={comment.content}/>
        })}
       </ul>
       </Flex>
       
    </>
}

