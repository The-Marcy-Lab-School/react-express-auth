import { useEffect, useState } from "react";
import "./Modal.css";

export default function CommentModal({ data }) {
  const [comments, setComments] = useState("");
  const [eventComments, setEventComments] = useState([]);

  const eventId = Number(data.id.slice(6));
  useEffect(() => {
    async function getData(eventId) {
      const response = await fetch(`/api/userscomment/${eventId}`);
      const commentData = await response.json();
      console.log(commentData);
      setEventComments(commentData);
    }
    getData(eventId);
  }, []);

  console.log(eventComments);

  const postComment = async () => {
    console.log(eventId);

    const res = await fetch("/api/userscomment", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ event_id: eventId, comments }),
    });

    const newData = await res.json();
    const commentArr = [...eventComments];
    commentArr.push(newData);
    setEventComments(commentArr);

    console.log(newData);
  };

  // const getCommentData = async (eventId) => {
  //   const response = await fetch(`/api/userscomment/${eventId}`);
  //   const commentData = await response.json();
  //   console.log(commentData);
  // };
  const changeInput = (e) => {
    setComments(e.target.value);
  };
  return (
    <>
      <div className="container">
        {eventComments.map((each) => {
          return <p key={each.id}>{each.username + ":" + each.comments}</p>;
        })}
      </div>
      <input type="text" name="comment" id="" onChange={changeInput} />
      <button onClick={postComment}>SEND</button>
    </>
  );
}
