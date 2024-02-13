import { useContext, useEffect, useState } from "react";
import Post from '../components/Post'
import Comment from '../components/Comment'
import { Flex } from "@chakra-ui/react";

import { useNavigate, useParams } from "react-router-dom";
import { getCommentsFromPost } from "../adapters/comment-adapter";

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
            <Post id={id} comments={postComments} setComments={setPostComments} /> {/*pass in all comments arr as prop to 
       create comments form so any recently made comments also gets added and displayed */}
            <ul>
                {postComments.map((comment) => { //maps through all comments arrs and displays
                    return <Comment user_id={comment.user_id} content={comment.content} key={comment.id} />
                })}
            </ul>
        </Flex>
    </>
}

