import { useState } from "react"

export default function LikeButton({ onClick, isLiked, likes }) {
  return (
    <div onClick={onClick}>
      <p>
        <span className={`like-icon ${isLiked ? 'liked' : ''}`}>♥︎</span>
        {" " + likes}
      </p>
    </div>
  )
}