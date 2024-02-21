import { useState, useEffect, useContext, useRef } from 'react';
import { fetchCommentsOnEvent, postComment } from '../adapters/event-adapter';
import Comment from './Comment';
import CurrentUserContext from '../contexts/current-user-context';

const Comments = ({ eventId, userId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentBox, setShowCommentBox] = useState(false);

  const { currentUser } = useContext(CurrentUserContext);

  const refreshComments = async () => {
    const commentsArr = await fetchCommentsOnEvent(eventId);
    setComments(commentsArr);
  };

  useEffect(() => {
    refreshComments();
  }, [eventId]);
 
  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = textarea.scrollHeight + 'px';
    }
  }, [newComment]);


  const textareaRef = useRef(null);

  const handleCommentSubmit = async (e) => {

    e?.preventDefault();

  if (!newComment.trim()) {
    alert("Please type something before submitting.");
    return;
  }

    try {
      const submittedComment = await postComment({ 
        user_id: currentUser.id, 
        event_id: eventId, 
        text: newComment.trim()
      });
      setNewComment(''); 
      
      setComments(prevComments => [...prevComments, submittedComment]);
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleCommentSubmit(e);
    }
  };
  
  return (
    <div className="comments">
      {/* <h6>Comments:</h6> */}
      <button onClick={() => setShowCommentBox(!showCommentBox)}>
        {showCommentBox ? 'Cancel' : 'Add Comment'}
      </button>
      {showCommentBox && (
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <textarea
            ref={textareaRef}
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a comment..."
            aria-label="Write a comment"
            className="comment-textarea"
            style={{ resize: 'none' }}
          />
          <button type="submit" className="submit-comment">Submit</button>
        </form>
      )}
      <div className='grid grid-cols-2 gap-2'>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          comments.map((comment) => (
            <Comment 
              key={comment.id} 
              comment={comment} 
              currentUser={currentUser}
              refreshComments={refreshComments}
            />
          ))
        )}
      </div>
     
    </div>
  );
        };  

export default Comments;
