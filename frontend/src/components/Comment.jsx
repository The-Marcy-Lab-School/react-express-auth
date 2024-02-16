import React, { useContext } from 'react';
import { timeObject } from '../utils';
import { hideComment } from '../adapters/event-adapter';
import CurrentUserContext from '../contexts/current-user-context';

const Comment = ({comment, refreshComments}) => {


  const { currentUser } = useContext(CurrentUserContext);

  const formattedStartDate = new Date(comment.date).toLocaleString(
    'en-US',
    timeObject
  );

  const handleHide = async () => {
    try {
      await hideComment(comment.id);
      refreshComments(); 
    } catch (error) {
      console.error("Failed to hide comment:", error);
    }
  };
  


  return (
    <div key={comment.id - 900}>
      <h5>Commenter: {comment.commenter_name}</h5>
      <h6>Text: {comment.text}</h6>
      {/* <h6>When {formattedStartDate}</h6> */}
      {currentUser.id === comment.user_id && (
        <button onClick={handleHide}>Delete Comment</button>
      )}
    </div>
  );
};

export default Comment;
