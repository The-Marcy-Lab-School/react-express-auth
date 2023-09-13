// import React from 'react';
// import './styles.css'; // Import your CSS file

// function DiscussionForum() {
//   return (
//     <div>
//       <header>
//         <h1>Discussion Forum</h1>
//       </header>

//       <main>
//         <section className="topic-section">
//           <h2>Topic: Example Topic</h2>
//           <p className="description">Description: This is the description of the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </section>

//         <section className="comment-section">
//           <h2>Comments</h2>

//           {/* Comment Form */}
//           <form className="comment-form">
//             <textarea placeholder="Add a comment"></textarea>
//             <button type="submit">Submit</button>
//           </form>

//           {/* Individual Comments */}
//           <div className="comment">
//             <div className="comment-header">
//               <span className="comment-author">User123</span>
//               <span className="comment-date">2 hours ago</span>
//             </div>
//             <div className="comment-content">
//               This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             </div>
//             <div className="comment-actions">
//               <button className="reply-button">Reply</button>
//             </div>
//           </div>

//           {/* More comments can be added here */}
//         </section>
//       </main>

//       <footer>
//         &copy; 2023 Discussion Forum
//       </footer>
//     </div>
//   );
// }

// export default DiscussionForum;
import React, { useState, useEffect, useContext } from 'react';
import './styles.css'; // Import your CSS file
//discussion forum context 
import DiscussionContext from '../contexts/discussion-context';
//comment context
///import CommentsContext from '../contexts/comment-context';
function DiscussionForum() {
  const [newComment, setNewComment] = useState('');
  const [newReplies, setNewReplies] = useState('');
  //variable for replies and counts
  const [showReplies, setShowReplies] = useState({});
  const [replyCounts, setReplyCounts] = useState({});
 // const navigate = useNavigate();
 const [sortedComments, setComments] = useState([]);
  const {discussionsData} = useContext(DiscussionContext)
console.log("discussionsData info",discussionsData.id)
  //const {commentsData}
  //const { commentsData: comments }  = useContext(CommentsContext)
  //
  //COMMENTS TO TEST 
//   const comments = [
//     { id: 1, author: 'John Doe', text: 'This is the first comment' },
//     { id: 2, author: 'Alice Smith', text: 'This is the second comment' },
//   ]; 
  
 ////Reples fetch 
 const [replies, setReplies] = useState([]);

//console.log("discussion data",discussionsData[0].id)
////////////////////////////////////////////////////////////////GET COMMENTS FROM BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////

 useEffect(() => {
    // Define your API endpoint for fetching comments by discussion ID
  const apiUrl = `api/comments/${discussionsData.id}`;
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Assuming the data is an array of comments
        console.log("comments data",data)
        setComments(data);
       // setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching comments:', error);
       // setLoading(false); // Set loading to false in case of an error
      });
  }, [sortedComments]); 

  const comments = sortedComments.slice().sort((a, b) => b.timestamp - a.timestamp);
console.log("sortedComments",comments) 


  // Function to fetch comments by discussion ID
//   const fetchCommentsByDiscussionId = (discussionId) => {
//     const apiUrl = `api/comments/${discussionId}`;
//     // Fetch data from the API
//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setComments(data);
//         // Save both the discussion ID and its data in local storage
//         localStorage.setItem('discussionId', discussionId);
//         localStorage.setItem('discussionData', JSON.stringify(data));
//       })
//       .catch((error) => {
//         console.error('Error fetching comments:', error);
//       });
//   };

//   useEffect(() => {
//     const storedDiscussionId = localStorage.getItem('discussionId');
//     const storedDiscussionData = localStorage.getItem('discussionData');
//     const currentDiscussionId = discussionsData.id;

//     if (!storedDiscussionId || storedDiscussionId !== currentDiscussionId) {
//       // If the stored ID is different or doesn't exist, fetch comments for the current discussion
//       fetchCommentsByDiscussionId(currentDiscussionId);
//     } else {
//       // If the ID matches, use the data from local storage
//       setComments(JSON.parse(storedDiscussionData));
//     }
//   }, [discussionsData]);
//     const comments = sortedComments.slice().sort((a, b) => b.timestamp - a.timestamp);
// console.log("sortedComments",comments) 
////////////////////////////////////////////////////////////////GET REPLIES FROM BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////


 useEffect(() => {
   // Define your API endpoint
   const apiUrl = 'api/get-replies';

   // Fetch data from the API
   fetch(apiUrl)
     .then((response) => response.json())
     .then((data) => {
       // Assuming the data is an array of replies
       setReplies(data);
     })
     .catch((error) => {
       console.error('Error fetching replies:', error);
     });
 }, [replies]);
//console.log("replies",replies)

///////////////////////////////////////////////////////////////CODE FOR COMMENTS & REPLIES////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //CODE THAT ALLOWS DROP DOWN for Replies
  useEffect(() => {
    // Calculate and update reply counts for each comment
    const counts = {};
    comments.forEach((comment) => {
      const count = replies.filter((reply) => reply.commentId === comment.id).length;
      counts[comment.id] = count;
    });
    setReplyCounts(counts);
  }, []); // Empty dependency array to run this effect once

  // Function to toggle the visibility of replies for a comment
  const toggleReplies = (commentId) => {
    setShowReplies((prevState) => ({
      ...prevState,
      [commentId]: !prevState[commentId],
    }));
  };

  
////////////////////////////////////////////////////////////SEND COMMENT BACKEND///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create an object with the data to send
    console.log("word", newComment)
    const data = {
      username: "john",
      comment: newComment,
      discussionBoardId: discussionsData.id, // Replace with the actual discussion board ID
    };

    // Send a POST request using the fetch API
    fetch('api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setNewComment('');

          // Clear the search input field after submission
          setSearchValue('');
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the response here (e.g., show a success message)
        console.log('Data sent successfully:', responseData);

        // Clear the comment field after submission
      
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });

      setNewComment('');
  };


///////////////////////////////////////////////////////////////////////SEND REPLIES BACKEND////////////////////////////////////////////////////////////////////////////////////////////////////////

//HANDLE CHANGE FOR REPLIES
const handleRepliesChange = (event) => {
    setNewReplies(event.target.value);
  };



  //SEND REPLIES TO BACKEND
  const sendReplyBackend = (event, commentId) => {
    event.preventDefault(); // Prevent the default form submission

    // Create an object with the data to send
    const data = {
        username: "repliying user",
        commentId: commentId, // Replace with the actual discussion board ID
        text: newReplies,
    };
    
    console.log("send replies baclend", data)
    // Send a POST request using the fetch API
    fetch('api/replies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
          setNewComment('');
        }
        return response.json();
      })
      .then((responseData) => {
        // Handle the response here (e.g., show a success message)
        console.log('Data sent successfully:', responseData);

        // Clear the comment field after submission
      
      })
      .catch((error) => {
        console.error('Error sending data:', error);
      });
      setNewReplies('');
    }

  return (
    <div>
      <header>
        <h1>Discussion Forum</h1>
      </header>

      <main>
        {/* Comment Section */}
<div className="comment-section">
  <h2>Comments</h2>

  <form className="comment-form" onSubmit={handleSubmit}>
    <textarea
      placeholder="Add a comment"
      value={newComment}
      onChange={handleCommentChange}
    ></textarea>
    <button type="submit">Submit</button>
  </form>

  {/* Individual Comments */}
  {comments.reverse().map((comment) => (
    <div className="comment" key={comment.id}>
      <div className="comment-header">
        <span className="comment-author">{comment.username}</span>
        <span className="comment-date">2 hours ago</span>
      </div>
      <div className="comment-content">{comment.comment}</div>
      <div className="comment-actions">
        <button
          className="reply-button"
          onClick={() => toggleReplies(comment.id)}
        >
          {showReplies[comment.id] ? "Hide Replies" : "Show Replies"}
        </button>
      </div>

      {/* Replies */}
      {showReplies[comment.id] && (
        <div className="replies">
          {/* Reply Form */}
            <form className="comment-form" onSubmit={(e) =>sendReplyBackend(event, comment.id)}>
                <textarea
                placeholder="Add a comment"
                value={newReplies}
                onChange={handleRepliesChange}
                ></textarea>
                <button type="submit">Submit</button>
            </form>
          {replies
            .filter((reply) => reply.commentid === comment.id)
            .map((reply) => (
              <div className="reply" key={reply.id}>
                <span className="reply-author">{reply.username}</span>
                <span className="reply-text">{reply.text}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  ))}

  {/* More comments can be added here */}
</div>

      </main>

      <footer>
        &copy; 2023 Discussion Forum WE EXIST
      </footer>
    </div>
  );
}

export default DiscussionForum;
