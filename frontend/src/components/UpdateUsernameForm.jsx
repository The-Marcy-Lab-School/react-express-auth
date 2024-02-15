import { useNavigate } from "react-router-dom";
import { updateUsername } from "../adapters/user-adapter";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  useDisclosure,
} from '@chakra-ui/react'

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const [user, error] = await updateUsername(Object.fromEntries(formData));

    if (error?.cause > 400 && error?.cause < 500) {
      setCurrentUser(null);
      return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="green" className="w-[7rem] h-[2rem] rounded-lg z-0">Edit User</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl className="flex flex-col">
                <label htmlFor="username">New Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={currentUser.username}
                  required
                />
                <label htmlFor="bio">New Bio</label>
                <input
                  type="text"
                  name="bio"
                  placeholder={currentUser.bio}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} type="submit">Update</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
