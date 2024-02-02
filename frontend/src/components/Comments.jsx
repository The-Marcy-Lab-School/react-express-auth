import React, { useState, useEffect } from 'react';
import { fetchCommentsOnEvent, postComment } from "../adapters/event-adapter";
import Comment from './Comment';

const Comments = ({ eventId, userId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [showCommentBox, setShowCommentBox] = useState(false);

    useEffect(() => {
        const loadComments = async () => {
            const commentsArr = await fetchCommentsOnEvent(eventId);
            setComments(commentsArr);
        };
        loadComments();
    }, [eventId]);

    const handleCommentSubmit = async () => {
        await postComment({ user_id: userId, event_id: eventId, text: newComment });
        setNewComment('');
        setShowCommentBox(false);
        const updatedComments = await fetchCommentsOnEvent(eventId);
        setComments(updatedComments);
    };

    return (
        <div className="comments">
            <h6>Comments:</h6>
            {showCommentBox && (
                <div>
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>Submit</button>
                </div>
            )}
            <button onClick={() => setShowCommentBox(!showCommentBox)}>
                {showCommentBox ? 'Cancel' : 'Add Comment'}
            </button>
            {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
            {comments.length === 0 && (<p>No comments yet.</p>)}
        </div>
    );
}

export default Comments;
