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
console.log(userProfile)
  // const { state } = useLocation();
  // const { users, reviews } = state;
  // const individualReview = reviews.filter(review => review.user_id === parseInt(id))

  return (
    <>
      <div>
      <div className="card" id = 'usercard'>
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={userProfile.picture} alt="Placeholder image" />
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
      <div className="media-content">
        <p className="title is-4">{userProfile.first_name} {userProfile.last_name}</p>
        <p className="subtitle is-6">@{userProfile.username}</p>
        <p className="age">Age: {userProfile.age}</p>
        <p className="gender">Gender: {userProfile.gender}</p>
        <p className="race">Race: {userProfile.race}</p>
        <p className="ethnicity">Ethnicity: {userProfile.ethnicity}</p>
      

      </div>
    </div>

    <div className="content">
      <button onClick={handleLogout}>Log Out</button>
    </div>
  </div>
</div>
</div>


<div className="userreviews">
        <div className="box">
          <div className="name">Amber Lambright</div>
          <div className="rating">hi</div>
          <div className="">5</div>
          <div className="userSpecs">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>


      <div id="user-component">
        <h1>{profileUsername}</h1>
        {!!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
        <p>If the user had any data, here it would be</p>
        <p>Fake Bio or something</p>
        {
          !!isCurrentUserProfile
          && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser} />
        }
      </div>
      
      

    </>
  );
}
