import { useContext, useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button, Heading, useDisclosure, Input, FormControl } from '@chakra-ui/react'
import { createComment } from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { useNavigate } from "react-router-dom";
import Comment from "./Comment";

export default function AddComment({ post_id, comments, setComments }) {

  const [content, setContent] = useState('') // comment content
  //const [comments, setComments] = useState([]) //prop for all comments

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext); //logged in user
  const [errorText, setErrorText] = useState(null);
  //const [newComment, setNewComment] = useState({})

  const handleChange = (event) => {
    setContent(event.target.value); //changes content to what the user inputs on every change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setContent(''); //clears input
    const user_id = currentUser.id //gets current user id from context
    let [comment, error] = await createComment({ content, post_id, user_id }) //post comment into db
    if (error) return setErrorText(error.message);
    setComments([...comments, comment]) //spreads all comments on post adding the recently made one to the end
    onClose() // closes create comment model
  };

  //maybe add this function to utils since its in create post form too
  const checkUserLogin = () => { //checks if theres a user logged in when comments button is clicked
    if (!currentUser) return navigate('/login') //sends user to login if not logged in
    onOpen() //opens model if theres a user logged in
  }

  return (
    <>
      <Card className="w-1/3">
        <CardHeader className="flex flex-col items-start">
          <Heading>Voice Your Thoughts!</Heading>
        </CardHeader>
        <CardBody>
          {
            comments.length > 0 ?
              comments.map((comment) => { //maps through all comments arrs and displays
                return <Comment user_id={comment.user_id} content={comment.content} key={comment.id} />
              })
              : <p className="h-full w-full flex justify-center align-middle items-center text-center">No comments yet!</p>
          }
        </CardBody>
        <CardFooter className="w-full flex flex-row">
          <FormControl>
            <Input value={content} onClick={checkUserLogin} onChange={handleChange} placeholder='Add Comment' />
          </FormControl>
          <Button onClick={handleSubmit} colorScheme='green' size='md'>Post</Button>
        </CardFooter>
      </Card>
    </>
  )
}