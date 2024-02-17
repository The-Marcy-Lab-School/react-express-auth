import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, Box, Heading, Text, Image } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, ButtonGroup, FormControl, useDisclosure } from '@chakra-ui/react'
import { useState } from "react";

export default function EditPostForm({ post, setPost }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [formData, setFormData] = useState({
    //     title: post.title,
    //     content: post.content,
    //     image_url: post.image_url
    // });

    return (
        <>
            <Button onClick={onOpen}>Edit Post</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Post</ModalHeader>
                    <ModalBody>
                        <form >
                            <FormControl className="flex flex-col">
                                <label htmlFor="title">New Title</label>
                                <input
                                    // type="text"
                                    // name="username"
                                    // placeholder={currentUser.username}
                                    // onChange={handleChange}
                                />
                                <label htmlFor="description">New Description</label>
                                <input
                                    // type="text"
                                    // name="bio"
                                    // placeholder={currentUser.bio}
                                    // onChange={handleChange}
                                />
                                <label htmlFor="start_time">New Start Time</label>
                                <input
                                    // type="text"
                                    // name="start_time"
                                    // placeholder={post.start_time}
                                    // onChange={handleChange}
                                />
                                <label htmlFor="end_time">New End Time</label>
                                <input
                                    // type="text"
                                    // name="end_time"
                                    // placeholder={post.end_time}
                                    // onChange={handleChange}
                                />
                                <label htmlFor="location">New Location</label>
                                <input
                                    // type="text"
                                    // name="location"
                                    // placeholder={post.location}
                                    // onChange={handleChange}
                                />
                                <label htmlFor="image_url">New Image URL</label>
                                <input
                                    // type="text"
                                    // name="image_url"
                                    // placeholder={post.image_url}
                                    // onChange={handleChange}
                                />
                            </FormControl>
                            <Button colorScheme='green' mr={3} type="submit">Update</Button>
                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
