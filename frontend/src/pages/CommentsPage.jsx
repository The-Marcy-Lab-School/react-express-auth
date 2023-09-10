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
import React, { useState, useEffect } from 'react';
import './styles.css'; // Import your CSS file

function DiscussionForum() {
  const [newComment, setNewComment] = useState('');
  //variable for replies and counts
  const [showReplies, setShowReplies] = useState({});
  const [replyCounts, setReplyCounts] = useState({});

  //COMMENTS TO TEST 
  const comments = [
    { id: 1, author: 'John Doe', text: 'This is the first comment' },
    { id: 2, author: 'Alice Smith', text: 'This is the second comment' },
  ];
  
  const replies = [
    { id: 1, commentId: 1, author: 'Jane', text: 'Reply to Comment 1' },
    { id: 2, commentId: 1, author: 'Bob', text: 'Another reply to Comment 1' },
    // Add more replies here
  ];

  //CODE THAT ALLOWS DROP DOWN 
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
      discussionBoardId: 1, // Replace with the actual discussion board ID
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

      // Clear the search input field after submission
      setSearchValue('');
  };

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
  {comments.map((comment) => (
    <div className="comment" key={comment.id}>
      <div className="comment-header">
        <span className="comment-author">{comment.author}</span>
        <span className="comment-date">2 hours ago</span>
      </div>
      <div className="comment-content">{comment.text}</div>
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
          {replies
            .filter((reply) => reply.commentId === comment.id)
            .map((reply) => (
              <div className="reply" key={reply.id}>
                <span className="reply-author">{reply.author}</span>
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
        &copy; 2023 Discussion Forum
      </footer>
    </div>
  );
}

export default DiscussionForum;
