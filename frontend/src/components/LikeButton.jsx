import { useState } from "react"

export default function LikeButton({ isAlreadyLiked }) {
  const [isLiked, setIsLiked] = useState(!!isAlreadyLiked)
  const toggleIsLiked = () => setIsLiked(isLiked => !isLiked);
  return (
    <div onClick={toggleIsLiked}>
      <span className={`like-icon ${isLiked ? 'liked' : ''}`}>♥︎</span>
    </div>
  )
}