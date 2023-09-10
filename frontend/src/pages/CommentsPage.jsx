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


import React, { useState } from 'react';
import './styles.css'; // Import your CSS file

function DiscussionForum() {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

//   const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent the default form submission
//     console.log(newComment); // Log the comment to the console
//     setNewComment('');
//   };


const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission

    // Create an object with the data to send
    const data = {
    //   username: username,
      comment: newComment,
      discussionBoardId: 1, // Replace with the actual discussion board ID
    };

    // Send a POST request using the fetch API
    fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then((responseData) => {
      // Handle the response here (e.g., show a success message)
      console.log('Data sent successfully:', responseData);

      // Clear the comment field after submission
      setNewComment('');
    //   setUsername('');
    })
    .catch((error) => {
      console.error('Error sending data:', error);
    });
};


  return (
    <div>
      <header>
        <h1>Discussion Forum</h1>
      </header>

      <main>
        <section className="topic-section">
          <h2>Topic: Example Topic</h2>
          <p className="description">Description: This is the description of the topic. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </section>

        <section className="comment-section">
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
          <div className="comment">
            <div className="comment-header">
              <span className="comment-author">User123</span>
              <span className="comment-date">2 hours ago</span>
            </div>
            <div className="comment-content">
              This is a comment. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className="comment-actions">
              <button className="reply-button">Reply</button>
            </div>
          </div>

          {/* More comments can be added here */}
        </section>
      </main>

      <footer>
        &copy; 2023 Discussion Forum
      </footer>
    </div>
  );
}

export default DiscussionForum;

