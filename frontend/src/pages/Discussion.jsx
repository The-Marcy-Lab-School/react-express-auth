import React, { useState } from 'react';

function DiscussionBoardBox({ onDiscussionBoardCreated }) {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/discussion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, description }),
      });

      if (response.ok) {
        // Discussion board created successfully
        onDiscussionBoardCreated({ topic, description });
        setTopic('');
        setDescription('');
        console.log('Discussion board created');
      } else {
        console.error('Failed to create discussion board');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Cdsreate a New Discussion Board</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Topic:</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Create Discussion Board</button>
      </form>
    </div>
  );
}

export default DiscussionBoardBox;
