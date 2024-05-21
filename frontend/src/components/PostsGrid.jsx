import { useContext, useEffect } from "react";
import Post from "../components/Post";
import CurrentUserContext from "../contexts/current-user-context";
import { getLikesByUser } from "../adapters/like-adapter.js";

export default function PostsGrid({ posts }) {
  const { currentUser, setUserLikes } = useContext(CurrentUserContext)

  useEffect(() => {
    if (!currentUser) return;
    getLikesByUser(currentUser.id).then(([userLikes]) => setUserLikes(userLikes))
  }, [currentUser])

  return <ul className='posts-list grid centered'>
    {
      posts.map((post) => <Post key={post.id} post={post} />)
    }
  </ul>
}
