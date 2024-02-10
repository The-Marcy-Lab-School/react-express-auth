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

import { uploadComment } from "../adapters/user-adapter";
import CurrentUserContext from "../contexts/current-user-context";
import { useNavigate } from "react-router-dom";


export default function AddComment({post_id, comments, setComments}) {

  const [content, setContent] = useState('')
  //const [comments, setComments] = useState([]) //prop for all comments

  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [errorText, setErrorText] = useState(null);
  //const [newComment, setNewComment] = useState({})

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setContent('');
    const user_id = currentUser.id
    let [comment, error] = await uploadComment({content, post_id, user_id})
    if (error) return setErrorText(error.message);
    setComments([...comments, comment])
    onClose()
  };

  const checkUserLogin = () => {
    if(!currentUser) return navigate('/login')
    onOpen()
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