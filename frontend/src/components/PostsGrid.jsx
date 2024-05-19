import Post from "../components/Post";

export default function PostsGrid({ posts }) {
  return <ul className='posts-list grid centered'>
    {
      posts.map((post) => <Post key={post.id} post={post} />)
    }
  </ul>
}
