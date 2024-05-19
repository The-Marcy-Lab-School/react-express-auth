import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getPostsByUserId } from "../adapters/post-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import { getFollowers, getFollows, createFollower, unFollow } from "../adapters/follow-adapter";
import '../styles/user.css'
import UsersList from '../components/UsersList';
import PostsGrid from "../components/PostsGrid";
import Modal from "../components/Modal";

export default function UserPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userData, setUserData] = useState({})
  const [errorText, setErrorText] = useState(null);
  const [didFollowOrUnfollow, setDidFollowOrUnfollow] = useState(false);
  const [showFollowers, setShowFollowers] = useState(false);
  const [showFollows, setShowFollows] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const [profile, error] = await getUser(id);
      if (error) return setErrorText(error.message);

      const [posts, getPostsError] = await getPostsByUserId(id);
      if (getPostsError) return setErrorText(getPostsError.message);

      const [followers, getFollowersError] = await getFollowers(id);
      if (getFollowersError) return setErrorText(getFollowersError.message);

      const [follows, getFollowsError] = await getFollows(id);
      if (getFollowsError) return setErrorText(getFollowsError.message);

      const isFollowing = !!followers.find((follow) => follow.follower_user_id === currentUser?.id)

      setUserData({
        profile,
        posts,
        followers,
        follows,
        isFollowing
      });

      setShowFollowers(false);
      setShowFollows(false);
    })();
  }, [id, didFollowOrUnfollow]);

  if (!userData.profile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);
  const profileUsername = isCurrentUserProfile ? currentUser.username : userData.profile.username;

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
  };

  const handleFollow = async () => {
    if (userData.isFollowing) {
      unFollow(userData.profile.id)
    } else {
      createFollower(userData.profile.id);
    }
    setDidFollowOrUnfollow((didFollowOrUnfollow) => !didFollowOrUnfollow);
  }



  const toggleShowFollowers = () => setShowFollowers((showFollowers) => !showFollowers);
  const toggleShowFollows = () => setShowFollows((showFollows) => !showFollows);

  return <>
    {/* For Viewing Your Own Profile Only */}
    {!!isCurrentUserProfile &&
      <div id="settings-container" className="flex-container">
        <Link to="/settings"><button>⚙</button></Link>
        <Link onClick={handleLogout} to="/"><button>Log Out</button></Link>
      </div>
    }

    {/* Main Profile Content */}
    <section id='user-profile-container' className='flex-container column centered'>
      <div id="user-details" className='flex-container column centered'>
        <h1>{profileUsername}</h1>
        <i className='user-bio'>{userData.profile.bio || 'No Bio'}</i>
      </div>

      <div id="user-follow-stats" className="flex-container centered">
        <p onClick={toggleShowFollowers}>Followers: {userData.followers.length}</p>
        <p onClick={toggleShowFollows}>Follows: {userData.follows.length}</p>
        {
          !isCurrentUserProfile &&
          <button onClick={handleFollow}>
            {userData.isFollowing ? "Unfollow" : "Follow"}
          </button>
        }
      </div>
      <div className='w-100 flex-container column centered'>
        <h2>Posts by {profileUsername}</h2>
        <PostsGrid posts={userData.posts} />
      </div>
    </section>

    {/* Modals */}
    <Modal toggleShow={toggleShowFollows} show={showFollows}>
      <h3>{userData.profile.username} is following:</h3>
      <UsersList users={userData.follows} />
    </Modal>
    <Modal toggleShow={toggleShowFollowers} show={showFollowers}>
      <h3>{userData.profile.username}'s followers:</h3>
      <UsersList users={userData.followers} />
    </Modal>
  </>;
}
