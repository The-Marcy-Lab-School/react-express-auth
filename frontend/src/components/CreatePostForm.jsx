import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { createPost } from "../adapters/post-adapter";
import { Navigate, useNavigate } from "react-router-dom";
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
  Input,
  FormLabel,
} from '@chakra-ui/react'
import { Autocomplete } from "@react-google-maps/api";
import { googleApi } from "../googleApi";

export default function CreatePostForm({ posts, setPosts }) {
  const { isLoaded } = googleApi()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const [errorText, setErrorText] = useState(null);
  const [title, setTitle] = useState('') //form inputs 
  const [image, setPicture] = useState('')
  //const [location, setLocation] = useState('')
  const [description, setdescription] = useState('') //form inputs ^
n
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext); //current user 

  // if(!currentUser) return <Navigate to='/login'/>
  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_id = currentUser.id
    const location = document.getElementById('location').value
    document.getElementById('location').value = ''
    setTitle('')
    setPicture('') //resets/clears input
    //setLocation('')
    setdescription('')
    const [post, error] = await createPost({ user_id, title, image, location, description }); //post data into db
    if (error) return setErrorText(error.message);
    setPosts([post, ...posts]); //spreads all current post in db and adds the recently made one first
    onClose()
  };

  const handleChange = (event) => { //changes input on every change 
    const { name, value } = event.target;
    if (name === 'title') setTitle(value);
    if (name === 'image') setPicture(value);
   // if (name === 'location') setLocation(value);
    if (name === 'description') setdescription(value);
  };

  const checkUserLogin = () => { //checks if theres a user logged in when create post button is clicked
    if (!currentUser) return navigate('/login') //sends user to login if not logged in
    onOpen() //opens model if theres a user logged in
  }

  return <>
    <Button onClick={checkUserLogin}>Create Post</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl isRequired>
              <FormLabel>Title</FormLabel>
              <Input onChange={handleChange} value={title} type="text" id="title" name="title"/>

              <FormLabel>Picture</FormLabel>
              <Input onChange={handleChange} value={image} type="text" id="pic" name="image" placeholder="Picture URL" />

              <FormLabel>Description</FormLabel>
              <Input onChange={handleChange} value={description} type='text' id='description' name='description' placeholder="Description" />
              </FormControl>
              <FormLabel>Location</FormLabel>
              {isLoaded && (
                
              <Autocomplete id='autocompleteBox'>
                <Input name='location' id='location' type="text" onChange={handleChange} placeholder="Location"/>
              </Autocomplete>
              )}
            
        
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Close
          </Button>
          <Button onClick={handleSubmit} variant='ghost'>Upload</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
}