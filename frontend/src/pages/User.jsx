import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import UserProfileCard from "../components/UserProfileCard";

export default function UserPage() {
  // React hooks to access necessary functionality and state
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  // useEffect hook to load user data when the component mounts or when the 'id' changes
  useEffect(() => {
    const loadUser = async () => {
      // Fetch user data using the 'getUser' function from the adapter
      const [user, error] = await getUser(id);
      
      // Handle errors during the API call
      if (error) {
        setErrorText(error.message);
      } else {
        // Update state with the fetched user data
        setUserProfile(user);
        console.log("User Object:", user); // Log the entire user object to the console
      }
    };

    // Call the loadUser function
    loadUser();
  }, [id]);

  // Function to handle user logout
  const handleLogout = async () => {
    logUserOut(); // Call the 'logUserOut' function from the auth adapter
    setCurrentUser(null); // Set the current user to null
    navigate('/'); // Navigate to the home page
  };

  // Conditional rendering based on the existence of user profile or errors
  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // Determine the username to be displayed based on whether it's the current user's profile
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  // Access the bio property from the currentUser object
  const profileBio = isCurrentUserProfile ? currentUser.bio : userProfile.bio;
  const profileImage = isCurrentUserProfile ? currentUser.profile_image : currentUser.profile_image;

  console.log("profileImage", profileImage)
  console.log("profileBio", profileBio); // Log the bio property to the console

  // JSX rendering based on the user's profile
  return (
    <>
      {/* Use the UserProfileCard component */}
    {userProfile && (
      <UserProfileCard
        username={profileUsername}
        bio={profileBio}
        profileimage={profileImage}  // Change to profileimage
      />
      )}
      { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
      <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
      {/* {
        !!isCurrentUserProfile
          && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
      } */}
    </>
  );
}
