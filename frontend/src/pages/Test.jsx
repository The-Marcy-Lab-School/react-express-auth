

//CODE USE FOR TESTING FETCHING FROM DATABASE
// import React, { useEffect, useState } from 'react';

// function UserList() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API and set it in the state
//     fetch('api/q')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data)
//         setUsers(data)})
//       .catch(error => console.error(error));
//   }, []);
// console.log("data users" + users)
//   return (
//     <div>
//       <h1>User List</h1>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             Name: {user.name}, Email: {user.email} {/* Replace with your actual properties */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default UserList;
// import React from "react";
// import "regenerator-runtime";
// import speech, { useSpeechRecognition } from "react-speech-recognition";

// function Test() {
//   const { listening, transcript } = useSpeechRecognition();

//   return (
//     <>
//       {listening ? <p>wrk</p> : <p>CLICK</p>}
//       <button onClick={() => speech.startListening()}>Ask</button> 
//       {
//         transcript && < div> {transcript}</div>
//       }
//     </>
//   );
// }

// export default Test;

import React, { useState,useContext } from 'react';
import { useNavigate } from "react-router-dom";
import DiscussionContext from '../contexts/discussion-context';
import CommentsContext from '../contexts/comment-context';
const items = [
  { id: 1, title: 'Item 1', description: 'Description for Item 1' },
  { id: 2, title: 'Item 2', description: 'Description for Item 2' },
  { id: 3, title: 'Item 3', description: 'Description for Item 3' },
  { id: 4, title: 'Another Item', description: 'Another description' },
  { id: 5, title: 'here', description: 'me' },
];

function AutocompleteSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const navigate = useNavigate();
  //discussion context
  const {setDiscussionsData} = useContext(DiscussionContext)
  //comment context
  //const {setCommentsData} = useContext(CommentsContext)

  const handleInputChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filteredSuggestions = items.filter(item =>
      item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value)
    );
    setSearchSuggestions(filteredSuggestions);
  };

  const handleSearch = () => {
    const matchingItems = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
    );

    setSearchResults(matchingItems);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleResultClick = (itemId) => {
    console.log(itemId)


    fetch(`/api/comments/${itemId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setDiscussionsData(data)
      navigate("/");
      //setComments(data);
    })
    .catch((error) => {
      console.error('Error fetching comments:', error);
    });
    // const clickedDiscussion = items.find((discussion) => discussion.id === itemId);
    // console.log("discussion object",clickedDiscussion)
    // setSelectedItemId(itemId);
  };

  return (
    <div>
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
      />
      <button onClick={handleSearch}>Search</button>
      
      {/* <div>
        {searchSuggestions.map(suggestion => (
          // <div
          //   key={suggestion.id}
          //   className="search-suggestion"
          //   onClick={() => {
          //     setSearchTerm(suggestion.title);
          //     setSelectedItemId(null); // Clear selected item on suggestion click
          //   }}
          // >
          //   {suggestion.title}
          // </div>
        ))}
      </div> */}

      <div className="search-results">
        {searchResults.map(result => (
          <div
            key={result.id}
            className={`search-card ${selectedItemId === result.id ? 'selected' : ''}`}
            onClick={() => handleResultClick(result.id)}
          >
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AutocompleteSearch;

