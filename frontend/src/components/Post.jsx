import { useContext } from "react";
import CloudinaryContext from "../contexts/CloudinaryContext";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { AdvancedImage } from '@cloudinary/react';
import UserLink from "./UserLink";

export default function Post({ post, DeleteButton }) {
  const { cld } = useContext(CloudinaryContext)

  const image = cld.image(post.img_public_id);
  image.resize(fill().width(500).height(500));

  return (
    <li className='post flex-container column'>
      <div className='w-100 flex-container space-between'>
        <UserLink user={{ id: post.user_id, username: post.username }} />
        {!!DeleteButton && <DeleteButton post={post} />}
      </div>
      <div className="post-content flex-container column">
        <AdvancedImage cldImg={image} />
        <i>{post.content}</i>
      </div>

    </li>
  )
}