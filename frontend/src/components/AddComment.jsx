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



export default function AddComment() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen} flex='1' variant='ghost'>Comment</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Voice Your Thoughts</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Input placeholder='Add Comment' size='lg' mb='100px' />
          </ModalBody>


          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={(handleAddComment => {
                onClose()
            })} variant='ghost'>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}