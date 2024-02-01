import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CurrentUserContext from '../contexts/current-user-context';
import { getUser } from '../adapters/user-adapter';
import { logUserOut } from '../adapters/auth-adapter';
import UpdateUsernameForm from '../components/UpdateUsernameForm';
import EventForm from '../components/EventForm';

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  // const imagePath = process.env.PUBLIC_URL + '/upload/1706815235258wowow.png'

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
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
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;

    const profilePic = isCurrentUserProfile
    ? currentUser.profile_pic
    : userProfile.profile_pic;

  return (
    <>
      <h1>{profileUsername}</h1>
      {!!isCurrentUserProfile && (
        <button onClick={handleLogout}>Log Out</button>
      )}
      <p>If the user had any data, here it would be</p>
      <p>Fake Bio or something</p>

      <EventForm id={id} />
      {!!isCurrentUserProfile && (
        <UpdateUsernameForm
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
        />
      )}
      {console.log(userProfile)}
      <img src='/upload/1706824948115wowow.png' alt="img"/>
      { userProfile.profile_pic &&<img src={`../public/upload/${profilePic}`}></img>}
      {/* { userProfile.profile_pic &&<img src={imagePath}></img>} */}
    </> // /upload/${userProfile.profile_pic}
  );
}

