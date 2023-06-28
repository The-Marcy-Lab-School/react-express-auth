import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { getAllBookMark } from "../adapters/bookmark-adapter";
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
    const bookmarks = async () =>{
      const bookmark = await fetch(`/api/bookmark/${id}`);
      const response = await bookmark.json()
      setUserBookmark(response);
      console.log(userBookmark)
      console.log(response)
    }
    loadUser();
    bookmarks()
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
      <div className="userProfilePage">
        <article className="profile">
          <div className="column is-half" id="userProfileInfo">
            <div
              className="card"
              style={{ width: "300px", borderRadius: "100%" }}
            >
              <div className="card-image" style={{ borderRadius: "100%" }}>
                <figure className="image is-4by3">
                  <img
                    style={{ borderRadius: "20vh" }}
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
            </div>

            <div className="box" id="personInfoCard">
              <p className="title is-4">
                {userProfile.first_name} {userProfile.last_name}
              </p>
              <p className="subtitle is-6">{profileUsername}</p>
              <div>
                {!!isCurrentUserProfile && (
                  <UpdateUsernameForm
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                )}
              </div>
              <div className="userinfo">
                <h4>{userProfile.age}</h4>
                <h4>{userProfile.gender}</h4>
                <h4>{userProfile.race}</h4>
                <h4>{userProfile.ethnicity}</h4>
              </div>
            </div>
            {!!isCurrentUserProfile && (
              <button className="logoutButton" onClick={handleLogout}>
                Log Out
              </button>
            )}
          </div>
        </article>
        <article className="" id="bookmarkedSide">
        {userBookmark.map((bookmark)=> (
          <Bookmarkcard key={bookmark.id} bookmark={bookmark}/>
        ))}
        </article>
      </div>
    </>
  );
}
