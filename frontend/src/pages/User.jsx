import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.statusText);
      setUserProfile(user);
    };

    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // Extract the necessary information from the userProfile or currentUser object
  const { profilePicture, name, bio } = isCurrentUserProfile ? currentUser : userProfile;

  return (
    <>
      <div>
        {profilePicture && <img src={profilePicture} alt="Profile" />}
        <h1>{name}</h1>
      </div>
      {isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
      <p>{bio || "No bio available"}</p>
      <h2>What I'm Looking For:</h2>
      <div>
        <p>Posting 1: Looking for a job in XYZ field.</p>
        <p>Posting 2: Searching for a roommate in ABC city.</p>
        <p>Posting 3: Interested in joining a book club.</p>
        <p>Posting 4: Seeking advice on starting a small business.</p>
      </div>
      {isCurrentUserProfile && (
        <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    </>
  );
}
