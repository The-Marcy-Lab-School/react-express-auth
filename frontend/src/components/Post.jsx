import CloudinaryContext from "../contexts/CloudinaryContext";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from '@cloudinary/react';
import UserLink from "./UserLink";
import { useContext, useState } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { deletePost } from "../adapters/post-adapter";
import { createLike, getLikesOfPost, unLike } from "../adapters/like-adapter.js";
import LikeButton from "./LikeButton";

export default function Post({ post }) {
  const { cld } = useContext(CloudinaryContext);
  const { currentUser, userLikes } = useContext(CurrentUserContext);

  const [likesInfo, setLikesInfo] = useState({
    likes: post.likes,
    isLikedByMe: userLikes.some((like) => {
      return like.user_id === currentUser.id && like.post_id === post.id
    })
  })

  const toggleIsLiked = () => setLikesInfo(likesInfo => ({
    likes: likesInfo.likes + (likesInfo.isLikedByMe ? -1 : 1),
    isLikedByMe: !likesInfo.isLikedByMe
  }));

  const handleDeletePost = async (e) => {
    if (currentUser.id !== post.user_id) return;
    const [_, error] = await deletePost(post.user_id, post.id)
    if (!error) {
      e.target.closest('li.post').remove();
    }
  }

  const handleLike = async (e) => {
    console.log('liking ', post.id)
    if (!likesInfo.isLikedByMe) await createLike(currentUser.id, post.id);
    else await unLike(currentUser.id, post.id);
    toggleIsLiked()
  }

  const image = cld.image(post.img_public_id);
  image.resize(fill().width(500).height(500));

  const date = new Date(post.created_at).toLocaleString().split(',')[0];

  return (
    <li className='post flex-container column'>
      <div className='w-100 flex-container space-between'>
        <div className="flex-container">
          <UserLink user={{ id: post.user_id, username: post.username }} />
          <i className="post-date">on {date}</i>
        </div>
        {
          currentUser.id === post.user_id && <button className='delete-post' onClick={handleDeletePost}>Delete</button>
        }
      </div>
      <div className="post-content flex-container column">
        <AdvancedImage cldImg={image} />
        <i>{post.content}</i>
        <LikeButton onClick={handleLike} isLiked={likesInfo.isLikedByMe} likes={likesInfo.likes} />
      </div>

    </li>
  )
}