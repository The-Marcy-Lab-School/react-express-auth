import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";
import { getAllUserLikes } from "../adapters/like-adapter";
import { getAllUserComments } from "../adapters/comment-adapter";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { Wrap, WrapItem, Avatar } from "@chakra-ui/react";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

const UserProfileCard = ({ username, bio, profile_image }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const [userLikes, setUserLikes] = useState([]);
  const [userComments, setUserComments] = useState([]);

  const handleLogout = async () => {
    logUserOut(); // Call the 'logUserOut' function from the auth adapter
    setCurrentUser(null); // Set the current user to null
    navigate('/'); // Navigate to the home page
  };

  const loadLikes = async (id) => {
    try {
      const result = await getAllUserLikes(id);
      setUserLikes(result);
    } catch (error) {
      console.error(error);
    }
  };

  const loadComments = async (id) => {
    try {
      const result = await getAllUserComments(id);
      setUserComments(result);
    } catch (error) {
      console.error(error);
    }
  }
  // console.log('bruh', userLikes[0].post_id)

  useEffect(() => {
    loadLikes(id);
    // loadComments(id);
  }, [id]);

  return (
    <div className="flex flex-row justify-center space-x-[3rem] pl-[10rem] pt-[5rem] items-center w-full h-full">
      <div className="flex flex-col h-full w-[20rem] mt-[8rem]">
        <img src={profile_image} alt="User Profile" className="rounded-full mb-[1rem] h-[15rem] w-[15rem]" />
        {!!isCurrentUserProfile && <button onClick={handleLogout} className="w-[5rem] h-[2rem] bg-[#989A99] ml-[5rem] rounded-lg z-0">Log Out</button>}
        <div className="flex flex-col items-center mt-[2rem] pt-[2rem] bottom-0 left-0 border-t-2 mr-[5rem] border-black z-1">
          <p>If the user had any data, it would be here</p>
          <p>Miscellaneous information or something</p>
        </div>
      </div>

      <div className="h-full w-[40rem] flex flex-col space-y-0 left-0 pt-[5rem]">
        <div className="flex flex-col h-[13rem] w-full">
          <h1 className="text-3xl">{username}</h1>
          <h2 className="text-xl mt-[2rem]">{bio}</h2>
        </div>
        <Tabs variant='enclosed' colorScheme='green'>
          <TabList>
            <Tab>Likes</Tab>
            <Tab>Comments</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <ul className="flex flex-col">
                {
                  userLikes.length > 0 ?
                    userLikes.map((like, index) => <li key={index} className="text-3xl">{like.post_id}</li>)
                    : <p>No likes yet</p>
                }
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="flex flex-col">
                {
                  userComments.length > 0 ?
                    userComments.map((comment, index) => <li key={index} className="text-3xl">{comment.post_id}</li>)
                    : <p>No comments yet</p>
                }
              </ul>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default UserProfileCard;
