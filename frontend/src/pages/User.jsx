import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import UserProfileCard from "../components/UserProfileCard";
import UserProfileTabs from "../components/UserProfileTabs";

export default function UserPage() {
  // React hooks to access necessary functionality and state
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

  // Conditional rendering based on the existence of user profile or errors
  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // Determine the username to be displayed based on whether it's the current user's profile
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  // Access the bio property from the currentUser object
  // const profileBio = isCurrentUserProfile ? currentUser.bio : userProfile.bio;
  // const profileImage = isCurrentUserProfile ? currentUser.profile_image : currentUser.profile_image;

  // console.log("profileImage", profileImage)
  // console.log("profileBio", profileBio); // Log the bio property to the console

  const profileBio = isCurrentUserProfile ? currentUser.bio : userProfile.bio;
  const profileImage = isCurrentUserProfile ? currentUser.profile_image : userProfile.profile_image;

console.log("profileImage:", profileImage);
// console.log("profileBio:", profileBio);

  // JSX rendering based on the user's profile
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#E4E4E4] text-black">
        {userProfile && (
          <div className="flex flex-row justify-center space-x-[3rem] pl-[10rem] items-center w-full h-full">
            <UserProfileCard
              // className="flex flex-row items-center"
              username={profileUsername}
              profileimage={profileImage}  // Change to profileimage
              bio={profileBio}
              isCurrentUserProfile={isCurrentUserProfile}
            />
            <UserProfileTabs username={profileUsername} id={id} bio={profileBio} isCurrentUserProfile={isCurrentUserProfile}/>
          </div>
        )}
      </div>
    </>
  );
}
