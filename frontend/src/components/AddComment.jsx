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
} from '@chakra-ui/react'

const SubmittedText = ({ text }) => {
  return <p>Submitted Text: {text}</p>;
};

export default function AddComment() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
    setInputValue(''); // Clear the input field after submission
    onClose()
  };


  return (
    <>
      <Button onClick={onOpen} flex='1' variant='ghost'>Comment</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Voice Your Thoughts</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input value={inputValue} onChange={handleChange} placeholder='Add Comment' size='lg' mb='100px' />
          </ModalBody>


          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button for='comment' onClick={handleSubmit} variant='ghost'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {submittedValue && <SubmittedText text={submittedValue} />}
    </>
  )
}