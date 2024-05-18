import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { getPostsByUserId, deletePost } from "../adapters/post-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import '../styles/user.css'
import Post from "../components/Post";



export default function UserPage() {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    (async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);

      const [fetchedPosts, getPostsError] = await getPostsByUserId(id);
      if (getPostsError) return setErrorText(getPostsError.message);
      setPosts(fetchedPosts);
    })();
  }, [id]);

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  const DeleteButton = ({ post }) => {
    const handleDeletePost = async (e) => {
      const [_, error] = await deletePost(userProfile.id, post.id)
      if (!error) {
        e.target.closest('li.post').remove();
      }
    }
    return <button className='delete-post' onClick={handleDeletePost}>Delete</button>
  }

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
  };

  return <>
    {!!isCurrentUserProfile &&
      <div id="settings-container" className="flex-container">
        <Link to="/settings"><button>⚙</button></Link>
        <Link onClick={handleLogout} to="/"><button>Log Out</button></Link>
      </div>
    }
    <section id='user-profile-container' className='flex-container column centered'>

      <div id="user-details" className='flex-container column centered'>
        <h1>{profileUsername}</h1>
        <i className='user-bio'>{userProfile.bio}</i>
      </div>

      <div className='w-100 flex-container column centered'>
        <h2>Posts</h2>
        <ul className='posts-list flex-container column centered'>
          {
            [...posts].reverse().map((post) => <Post key={post.id} post={post} DeleteButton={!!isCurrentUserProfile && DeleteButton} />)
          }
        </ul>
      </div>
    </section>
  </>;
}
