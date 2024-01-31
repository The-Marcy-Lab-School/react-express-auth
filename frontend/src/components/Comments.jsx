import React, { useEffect, useState } from 'react'
import {  fetchCommentsOnEvent } from "../adapters/event-adapter";
import Comment from './Comment'

const Comments = (props) => {
    const {eventId} = props
    const [comments, setComments] = useState([])
    useEffect(()=> {
        const loadCommentsOnEvent = async () => {
            const commentsArr = await fetchCommentsOnEvent(eventId);
            console.log(commentsArr)
            setComments(commentsArr)
          };

          loadCommentsOnEvent()
    }, [])
    return (
        <div className="comments">
            <h6>Comments: </h6>
            { comments.map(comment => (
                <Comment comment = {comment} key = {comment.id}/>
            )
            )}
            {comments.length === 0 &&  (<p>Event: {eventId} has 0 comments</p>)}
        </div> 
        // <div>Comments here</div>
    )
  
}

export default Comments