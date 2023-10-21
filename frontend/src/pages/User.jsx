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

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return(

        <>
      <div style={{backgroundColor:"#fbf4d4"}}>
        <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
          <img
            className="w-32 h-32 rounded-full mx-auto"
            src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            alt="Profile picture"
          />
          <h2 className="text-center text-2xl font-semibold mt-3 text-gray-800">{profileUsername}</h2>
          <p className="text-center text-gray-600 mt-1">Language Learner</p>
          <div className="mt-5">
            <h3 className="text-xl font-semibold">Bio</h3>
            <p className="text-gray-600 mt-2">
              Hi there! My name is Staceyann and I am a native English speaker. I am currently learning French.
            </p>
          <div className="flex justify-center mt-5">
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            {isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
