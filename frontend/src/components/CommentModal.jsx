import React from "react";
import { useState } from "react";

const postComment = (props) => {
  console.log("props:", props.userId);
  //   const postData = fetch("/api/userscomment", {
  //     method: "POST",
  //     credentials: "include",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ friendId }),
  //   });
};

function CommentModal(props) {
  const [comments, setComments] = useState([]);
  return (
    <>
      <input type="text" name="comment" id="" />
      <button onClick={() => postComment(props)}>SEND</button>
    </>
  );
}

export default CommentModal;
