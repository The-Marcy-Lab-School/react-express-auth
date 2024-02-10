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


export default function AddComment({input, setinput, comments, setComments}) {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [submittedValue, setSubmittedValue] = useState('');
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  const handleChange = (event) => {
    setinput(event.target.value);
  };

  const handleSubmit = (event) => {
    
    event.preventDefault();
    setSubmittedValue(input);



    setinput('');
    onClose()
  };

  const checkUserLogin = () => {
    console.log(currentUser)
  }

  useEffect(() => {
      const upload = async () => {
        let comment = await createComment(submittedValue)
      }

      upload()
  }, [submittedValue])

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
            <Input value={input} onChange={handleChange} placeholder='Add Comment' size='lg' mb='100px' />
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