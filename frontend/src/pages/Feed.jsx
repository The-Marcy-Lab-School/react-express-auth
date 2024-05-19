import { useContext, useEffect, useState } from "react";
import { getAllPostsOfFollows } from "../adapters/post-adapter";
import { Link } from 'react-router-dom'
import CurrentUserContext from "../contexts/current-user-context"
import PostsGrid from "../components/PostsGrid";

export default function FeedPage() {
  const { currentUser } = useContext(CurrentUserContext);
  const [posts, setPosts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    if (!currentUser) return;
    (async () => {
      const [fetchedPosts, getPostsError] = await getAllPostsOfFollows(currentUser.id);
      if (getPostsError) setErrorMessage(getPostsError.message);

      console.log(fetchedPosts);
      setPosts(fetchedPosts);
    })();
  }, [currentUser]);

  if (!currentUser) {
    return (
      <>
        <h1>Welcome!</h1>
        <p>To get started, you can <Link to='/login'>Login</Link> or <Link to='sign-up'>Sign Up!</Link></p>
      </>
    )
  }

  return <>
    <section className='flex-container column centered'>
      <h1>My Feed</h1>
      <PostsGrid posts={posts} />
      <p>{errorMessage}</p>
    </section>
  </>;
}
