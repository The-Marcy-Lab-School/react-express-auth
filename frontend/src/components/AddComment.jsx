import { useContext, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
  FormControl,
} from '@chakra-ui/react'

import { createComment } from "../adapters/comment-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { useNavigate } from "react-router-dom";


export default function AddComment({post_id, comments, setComments}) {

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
    let [comment, error] = await createComment({content, post_id, user_id}) //post comment into db
    if (error) return setErrorText(error.message);
    setComments([...comments, comment]) //spreads all comments on post adding the recently made one to the end
    onClose() // closes create comment model
  };

  //maybe add this function to utils since its in create post form too
  const checkUserLogin = () => { //checks if theres a user logged in when comments button is clicked
    if(!currentUser) return navigate('/login') //sends user to login if not logged in
    onOpen() //opens model if theres a user logged in
  }

  return (
    <>
      <Button onClick={checkUserLogin} flex='1' variant='ghost'>Comment</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Voice Your Thoughts</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <FormControl>
            <Input value={content} onChange={handleChange} placeholder='Add Comment' size='lg' mb='100px' />
            </FormControl>
          </ModalBody>


          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  onClick={handleSubmit} variant='ghost'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}