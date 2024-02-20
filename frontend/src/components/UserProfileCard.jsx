import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
import { getAllUserComments } from "../adapters/comment-adapter";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'
import { Avatar, Button, ButtonGroup } from "@chakra-ui/react";
import { Stack, StackDivider } from '@chakra-ui/react';
import { Box, Card, CardHeader, Heading, CardBody, CardFooter } from '@chakra-ui/react'
import UpdateUsernameForm from "./UpdateUsernameForm";
import UploadcareComponent from "./UploadCareClient";
import { updateProfileImage } from '../adapters/user-adapter';


const UserProfileCard = ({ username, profileimage, isCurrentUserProfile }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const [userComments, setUserComments] = useState([]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const loadComments = async () => {
    const [result, error] = await getAllUserComments(id);
    if (error) return setErrorText(error.text);
    setUserComments(result);
  }

  const handleProfileImageUpload = async (profile_image) => {
    console.log("id in profile user card", currentUser.id)
    console.log("imsge:", profile_image)

    if (currentUser) {
      await updateProfileImage(currentUser.id, profile_image);
    }
  };


  useEffect(() => {
    loadComments();
  }, []);

  return (
    <Card background={'transparent'} border="0px" boxShadow="0">
      <CardHeader className="flex flex-col items-center space-y-[1rem]">
        <Avatar size="2xl" width="10rem" height="10rem" fontSize="5.5rem" name={username} src={profileimage}>
          {!!isCurrentUserProfile &&
            <UploadcareComponent className="z-0" onUploadFinish={handleProfileImageUpload} />
          }
        </Avatar>
        {!!isCurrentUserProfile &&
          (
            <ButtonGroup>
              <UpdateUsernameForm {...{ currentUser, setCurrentUser }} />
              <Button onClick={handleLogout} className="w-[5rem] h-[2rem] bg-[#989A99] rounded-lg z-0">Log Out</Button>
            </ButtonGroup>
          )
        }
      </CardHeader>
      <CardBody>
        <Accordion defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex='1' textAlign='left'>
                  Comments Made
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul className="flex flex-col">
                {
                  userComments.length > 0 ?
                    userComments.map((comment, index) => <li key={index} className="text-l">{comment.content}</li>)
                    : <p>No comments yet</p>
                }
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default UserProfileCard;
