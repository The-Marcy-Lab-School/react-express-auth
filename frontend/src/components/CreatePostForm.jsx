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
} from '@chakra-ui/react'

export default function CreatePostForm() {

    const [newPost, setPost] = useState([]) //this will be a prop with all the post being displayed in the community post
    const navigate = useNavigate();
    const [errorText, setErrorText] = useState(null);
    const [title, setTitle] = useState('')
    const [image, setPicture] = useState('')
    const [location, setLocation] = useState('')
    const [description, setdescription] = useState('')

    const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

    // if(!currentUser) return <Navigate to='/login'/>
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!currentUser) return navigate('/login')
        setTitle('')
        setPicture('')
        setLocation('')
        setdescription('')
        const user_id = currentUser.id
        const [post, error] = await createPost({ user_id, title, image, location, description });
        if (error) return setErrorText(error.message);
        setPost([...newPost, post]);
        
      };

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'title') setTitle(value);
        if (name === 'image') setPicture(value);
        if (name === 'location') setLocation(value);
        if (name === 'description') setdescription(value);
      };
    

    return <>
        <h1>Create Post</h1>
        <form onSubmit= {handleSubmit} onChange={handleChange} aria-label="post">

            <h2>Post</h2>

            <label for='title'>Post Title:</label>
            <input onChange={handleChange} value={title} type="text" id="title" name="title" required />

            <label for='image'>Picture</label>
            <input onChange={handleChange} value={image} type="text" id="pic" name="image" placeholder="Picture URL"/>

            <label for='location'>Add location</label>
            <input onChange={handleChange} value={location} type="text" name="location" id="location" placeholder="location" required />

            {/* <label for="time">Time:</label>
            <input type="time" id="time" name="time" required /> */}

            <lable for='description'>Add Description</lable>
            <input onChange={handleChange} value={description} type='text' id='description' name='description' placeholder="Description"/>

            <button>Upload</button>
        </form>
        {newPost.length > 0 ? console.log(newPost) : console.log('nothing')}
    </>
}