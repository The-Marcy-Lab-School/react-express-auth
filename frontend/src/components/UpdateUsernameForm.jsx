import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: currentUser.username,
    bio: currentUser.bio
  });

  console.log(id, currentUser.id);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    const [user, error] = await updateUsername(id, formData.username, formData.bio);

    if (error?.cause >= 400 && error?.cause < 500) {
      setCurrentUser(null);1968

      return navigate('/');
    }

    setCurrentUser(user);
    setFormData({
      username: '',
      bio: ''
    });
    onClose();
  };


  return (
    <>
      <Button colorScheme="green" onClick={onOpen} className="w-[7rem] h-[2rem] bg-[#989A99] rounded-lg z-0">Update User</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl className="flex flex-col">
                <label htmlFor="username">New Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder={currentUser.username}
                  onChange={handleChange}
                />
                <label htmlFor="bio">New Bio</label>
                <input
                  type="text"
                  name="bio"
                  placeholder={currentUser.bio}
                  onChange={handleChange}
                />
              </FormControl>
              <Button colorScheme='green' mr={3} type="submit">Update</Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <p>Lookin fly playa</p>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
