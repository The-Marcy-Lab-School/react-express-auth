import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
import { getAllUserComments } from "../adapters/comment-adapter";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Avatar, Button, ButtonGroup, Box, Card, CardHeader, CardBody } from '@chakra-ui/react';
import UpdateUsernameForm from "./UpdateUsernameForm";
import UploadcareComponent from "./UploadCareClient";
import { updateProfileImage } from '../adapters/user-adapter';

const UserProfileCard = ({ username, profileimage, isCurrentUserProfile, onProfileImageUpdate }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const [userComments, setUserComments] = useState([]);
  const [updatedProfileImage, setUpdatedProfileImage] = useState(profileimage); // Added state for the updated profile image
  const [errorText, setErrorText] = useState(null); // State for handling errors

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
    console.log("id in profile user card", currentUser.id);
    console.log("image:", profile_image);
    
    if (currentUser) {
      const updateResult = await updateProfileImage(currentUser.id, profile_image);
      // Assuming updateProfileImage returns a success status or the updated URL directly
      if (updateResult) {
        const newImageUrl = profile_image; // Or extract the URL from updateResult as needed
        setUpdatedProfileImage(newImageUrl);
        onProfileImageUpdate(newImageUrl); // Invoke the callback to notify the parent component
      }
    }
  };
  
  useEffect(() => {
    loadComments();
  }, [id]);

  return (
    <Card background={'transparent'} border="0px" boxShadow="0">
      <CardHeader className="flex flex-col items-center space-y-[1rem]">
        <Avatar size="2xl" width="10rem" height="10rem" fontSize="5.5rem" name={username} src={updatedProfileImage} />
        {isCurrentUserProfile && (
          <ButtonGroup>
            <UploadcareComponent onUploadFinish={handleProfileImageUpload} />
            <UpdateUsernameForm {...{ currentUser, setCurrentUser }} />
            <Button onClick={handleLogout} className="w-[5rem] h-[2rem] bg-[#989A99] rounded-lg z-0">Log Out</Button>
          </ButtonGroup>
        )}
      </CardHeader>
      <CardBody>
        {errorText && <p>Error: {errorText}</p>}
        <Accordion defaultIndex={[0]}>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box flex='1' textAlign='left'>
                  Comments Made
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <ul>
                {userComments.length > 0 ? userComments.map((comment, index) => <li key={index}>{comment.content}</li>) : <p>No comments yet</p>}
              </ul>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </CardBody>
    </Card>
  );
};

export default UserProfileCard
