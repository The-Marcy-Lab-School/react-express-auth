import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";

import Bookmarkcard from "../components/BookmarkCard";

export default function UserPage() {
  const navigate = useNavigate();
  const [userBookmark, setUserBookmark] = useState([]);
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
    const bookmarks = async () => {
      const bookmark = await fetch(`/api/bookmark/${id}`);
      const response = await bookmark.json();
      setUserBookmark(response);
      console.log(userBookmark);
      console.log(response);
    };
    loadUser();
    bookmarks();
  }, [id]);
  // console.log(userBookmark, '234322')
  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate("/");
  };
  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;
  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile
    ? currentUser.username
    : userProfile.username;
  console.log(userBookmark);

  return (
    <>
      <div className="userpage">
        <div className="card" id="usercard">
          <div className="card-image">
            <figure className="image is-4by3">
              <img
                src={userProfile.picture}
                alt="Placeholder image"
                id="userimage"
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">
                  {userProfile.first_name} {userProfile.last_name}
                </p>
                <p className="subtitle is-6" id="username">
                  @{userProfile.username}
                </p>
                <p className="age">Age: {userProfile.age}</p>
                <p className="gender">Gender: {userProfile.gender}</p>
                <p className="race">Race: {userProfile.race}</p>
                <p className="ethnicity">Ethnicity: {userProfile.ethnicity}</p>
                <br/>
                <button id="logoutbtn" onClick={handleLogout}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>

        <article className="" id="bookmarkedSide">
        <strong id= 'savedheading'><h2>Saved</h2></strong>
          {userBookmark.map((bookmark) => (
            <Bookmarkcard key={bookmark.id} bookmark={bookmark} />
          ))}
        </article>
        </div>
    </>
  );
}

