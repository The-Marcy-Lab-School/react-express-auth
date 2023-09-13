import '../pages/Components/cardsDesign.css';
import './test.css';
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

// import React, { useState,useContext } from 'react';
// import { useNavigate } from "react-router-dom";
// import DiscussionContext from '../contexts/discussion-context';
// import CommentsContext from '../contexts/comment-context';

// const items = [
//   { id: 1, title: 'Item 1', description: 'Description for Item 1' },
//   { id: 2, title: 'Item 2', description: 'Description for Item 2' },
//   { id: 3, title: 'Item 3', description: 'Description for Item 3' },
//   { id: 4, title: 'Another Item', description: 'Another description' },
//   { id: 5, title: 'here', description: 'me' },
// ];

// function AutocompleteSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchSuggestions, setSearchSuggestions] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedItemId, setSelectedItemId] = useState(null);
//  //const [discussion,]
//   const navigate = useNavigate();
//   //discussion context
//   const {setDiscussionsData} = useContext(DiscussionContext)
//   //comment context
//   //const {setCommentsData} = useContext(CommentsContext)

//   const handleInputChange = (event) => {
//     const value = event.target.value.toLowerCase();
//     setSearchTerm(value);

//     const filteredSuggestions = items.filter(item =>
//       item.title.toLowerCase().includes(value) || item.description.toLowerCase().includes(value)
//     );
//     setSearchSuggestions(filteredSuggestions);
//   };

//   const handleSearch = () => {
//     const matchingItems = items.filter(item =>
//       item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
//     );

//     setSearchResults(matchingItems);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   // const handleResultClick = (itemId) => {
//   //   //console.log(itemId)


//   //   fetch(`/`)
//   //   .then((response) => response.json())
//   //   .then((data) => {
//   //     console.log("comments arry",data);
//   //     const clickedDiscussion = items.find((discussion) => discussion.id === itemId);
//   //     console.log("discussion object", clickedDiscussion);
    
//   //     // Assuming that you have a context function setDiscussionData to set the clicked discussion data
//   //     setDiscussionsData(clickedDiscussion);
//   //     navigate("/");
//   //     //setComments(data);
//   //   })
//   //   .catch((error) => {
//   //     console.error('Error fetching comments:', error);
//   //   });
//   //   // const clickedDiscussion = items.find((discussion) => discussion.id === itemId);
//   //   // console.log("discussion object",clickedDiscussion)
//   //   // setSelectedItemId(itemId);
//   // };


//   const handleResultClick = (itemId) => {
//   console.log(itemId);

//   const clickedDiscussion = items.find((discussion) => discussion.id === itemId);
//   console.log("discussion object", clickedDiscussion);

//   // Assuming that you have a context function setDiscussionData to set the clicked discussion data
//   setDiscussionsData(clickedDiscussion);

//   // Redirect to another page here, for example, a page with the discussion details
//   navigate(`/`);
// };


//   return (
//     <div>
//       <h1>Autocomplete Search Bar</h1>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//         placeholder="Search..."
//       />
//       <button onClick={handleSearch}>Search</button>
      
//       {/* <div>
//         {searchSuggestions.map(suggestion => (
//           // <div
//           //   key={suggestion.id}
//           //   className="search-suggestion"
//           //   onClick={() => {
//           //     setSearchTerm(suggestion.title);
//           //     setSelectedItemId(null); // Clear selected item on suggestion click
//           //   }}
//           // >
//           //   {suggestion.title}
//           // </div>
//         ))}
//       </div> */}

//       <div className="search-results">
//         {searchResults.map(result => (
//           <div
//             key={result.id}
//             className={`search-card ${selectedItemId === result.id ? 'selected' : ''}`}
//             onClick={() => handleResultClick(result.id)}
//           >
//             <h2>{result.title}</h2>
//             <p>{result.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AutocompleteSearch;





////////////////////////////SEARCH///////////////////////////////
// // import React, { useState } from 'react';

// // const data = [
// //   { id: 1, name: 'Apple' },
// //   { id: 2, name: 'Banana' },
// //   { id: 3, name: 'Cherry' },
// //   { id: 4, name: 'Date' },
// //   { id: 5, name: 'Grape' },
// //   { id: 6, name: 'Lemon' },
// //   { id: 7, name: 'Mango' },
// //   { id: 8, name: 'Orange' },
// //   { id: 9, name: 'Peach' },
// //   { id: 10, name: 'Pear' },
// // ];

// // function AutoSearch() {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [suggestions, setSuggestions] = useState([]);
// //   const [searchResults, setSearchResults] = useState([]);



// //   const handleInputChange = (e) => {
// //     const value = e.target.value;
// //     setSearchTerm(value);

// //     // Filter the data based on the input
// //     const filteredData = data.filter(item =>
// //       data.name.toLowerCase().includes(value.toLowerCase())
// //     );

// //     // Limit suggestions to 5 items
// //     setSuggestions(filteredData.slice(0, 5));
// //   };

// //   const handleItemClick = (item) => {
// //     // Handle the item click (you can replace this with your desired action)
// //     alert(`You clicked: ${item.name}`);
// //   };

// //   const handleResultClick = (itemId) => {
// //     console.log(itemId);
  
// //     //const clickedDiscussion = data.find((discussion) => discussion.id === itemId);
// //    // console.log("discussion object", clickedDiscussion);
  
// //     // Assuming that you have a context function setDiscussionData to set the clicked discussion data
// //     //setDiscussionsData(clickedDiscussion);
  
// //     // Redirect to another page here, for example, a page with the discussion details
// //    // navigate(`/`);
// //   };

// //   const handleSearch = () => {
// //     const matchingItems = data.filter(item =>
// //       item.title.toLowerCase().includes(searchTerm) || item.description.toLowerCase().includes(searchTerm)
// //     );

// //     setSearchResults(matchingItems);
// //   };

// //   return (
// //     <div>
// //       <h1>Auto Search</h1>
// //       <input
// //         type="text"
// //         placeholder="Search..."
// //         value={searchTerm}
// //         onChange={handleInputChange}
  
// //       />
// //             <button onClick={handleSearch}>Search</button>
// //       {suggestions.length > 0 && (
// //         <ul>
// //           {suggestions.map((item, index) => (
// //             <li key={item.id} onClick={() => handleItemClick(item)}>
// //               {item.name}
// //             </li>
// //           ))}
// //         </ul>
// //       )}

// // {searchResults.map(result => (
// //           <div
// //             key={result.id}
// //             className={`search-card ${selectedItemId === result.id ? 'selected' : ''}`}
// //             onClick={() => handleResultClick(result.id)}
// //           >
// //             <h2>{result.title}</h2>
// //             <p>{result.description}</p>
// //           </div>
// //         ))}
// //     </div>
// //   );
// // }

// // export default AutoSearch;
// import React, { useState } from 'react';

// const data = [
//   { id: 1, name: 'Apple' },
//   { id: 2, name: 'Banana' },
//   { id: 3, name: 'Cherry' },
//   { id: 4, name: 'Date' },
//   { id: 5, name: 'Grape' },
//   { id: 6, name: 'Lemon' },
//   { id: 7, name: 'Mango' },
//   { id: 8, name: 'Orange' },
//   { id: 9, name: 'Peach' },
//   { id: 10, name: 'Pear' },
// ];

// function AutoSearch() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [selectedItemId, setSelectedItemId] = useState(null);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);

//     // Filter the data based on the input
//     const filteredData = data.filter(item =>
//       item.name.toLowerCase().includes(value.toLowerCase())
//     );

//     // Limit suggestions to 5 items
//     setSuggestions(filteredData.slice(0, 5));
//   };

//   const handleItemClick = (item) => {
//     // Handle the item click (you can replace this with your desired action)
//     alert(`You clicked: ${item.name}`);

//   };

//   const handleResultClick = (itemId) => {
//     console.log(itemId);
//     setSelectedItemId(itemId);
//     // Handle the result item click here
//   };

//   const handleSearch = () => {
//     const matchingItems = data.filter(item =>
//       item.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setSearchResults(matchingItems);
//     // Clear the suggestions when search is clicked
//     setSuggestions([]);
//   };

//   return (
//     <div>
//       <h1>Auto Search</h1>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleInputChange}
//       />
//       <button onClick={handleSearch}>Search</button>
//       {suggestions.length > 0 && (
//         <ul>
//           {suggestions.map((item, index) => (
//             <li key={item.id} onClick={() => handleItemClick(item)}>
//               {item.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       {searchResults.map(result => (
//         <div
//           key={result.id}
//           className={`search-card ${selectedItemId === result.id ? 'selected' : ''}`}
//           onClick={() => handleResultClick(result.id)}
//         >
//           <h2>{result.name}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default AutoSearch;
import React, { useState,useContext,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import DiscussionContext from '../contexts/discussion-context';

function AutoSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [data, setData] = useState([]);
//////////////////CREATE DISCUSSION//////////////////////////////////
  const [topic, setTopic] = useState('');
  const [discussion, setDescription] = useState('');

  const {setDiscussionsData} = useContext(DiscussionContext)
  
/////////////GET DISCUSSION FROM BACKEND////////////////
useEffect(() => {

  const apiUrl = 'api//get-discussion';

  // Perform the fetch request
  fetch(apiUrl)
    .then((response) => {
      // Check if the response is successful (status code 200)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((responseData) => {
      // Update the state with the fetched data
      setData(responseData);
      setLoading(false); // Set loading to false
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch
      setError(error);
      setLoading(false); // Set loading to false
    });
}, []); 
console.log("data from backend to search",data)
////////////////////////////////////////////////////////

  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter the data based on the input
    const filteredData = data.filter(item =>
      item.topic.toLowerCase().includes(value.toLowerCase())
    );

    // Limit suggestions to 5 items
    setSuggestions(filteredData.slice(0, 5));
  };

  const handleItemClick = (item) => {
    // Handle the item click (you can replace this with your desired action)
    console.log('You clicked:', item);
    setDiscussionsData(item)
    navigate(`/`);
  };

  const handleResultClick = (item) => {
    console.log('You clicked (Result):', item);
    setDiscussionsData(item)
    navigate(`/`);
   // setSelectedItemId(item.id);
    // Handle the result item click here
  };

  const handleSearch = () => {
    const matchingItems = data.filter(item =>
      item.topic.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(matchingItems);
    // Clear the suggestions when search is clicked
    setSuggestions([]);
  };
/////////////////ALSO CREATE DISCUSSION////////////////////////////////////
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   try {
//     const response = await fetch('/api/discussion', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ topic, description,"john" }),
//     });

//     if (response.ok) {
//       // Discussion board created successfully
//       onDiscussionBoardCreated({ topic, description, });
//       setTopic('');
//       setDescription('');
//       console.log('Discussion board created');
//     } else {
//       console.error('Failed to create discussion board');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const username = "john"; // Set the username here or get it from where you need

//   const data = { topic, discussion, username };

//   try {
//     const response = await fetch('/api/discussion', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(data),
//       setDescription('');
//       setTopic('');
//     });

//     if (response.ok) {
//       console.log('Discussion board created successfully');
//       onDiscussionBoardCreated(data); // Assuming you want to pass the data to a callback
//       setTopic('');
//       setDescription('');
//     } else {
//       console.error('Failed to create discussion board');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

const handleSubmit = async (e) => {
  e.preventDefault();

  setTopic('');
  setDescription('');
  const username = "john"; // Set the username here or get it from where you need

  const data = { topic, discussion, username };
console.log("sent data",data)
  try {
    const response = await fetch('/api/discussion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log('Discussion board created successfully');
      onDiscussionBoardCreated(data); // Assuming you want to pass the data to a callback
    } else {
      console.error('Failed to create discussion board');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};


////////////////////////////////////////////////////////////////////////////
  return ( 
  <div>
    <div>
      <h1>Auto Search</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((item, index) => (
            <li key={item.id} onClick={() => handleItemClick(item)}>
              {item.topic}
            </li>
          ))}
        </ul>
      )}
      {searchResults.map(result => (
        <div
          key={result.id}
          className={`search-card ${selectedItemId === result.id ? 'selected' : ''}`}
         onClick={() => handleResultClick(result)}
        >
          < div className="search">{result.topic}</div>
        </div>
      ))}
      

    </div>

<div>
      <h2>Cdsreate a New Discussion Board</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Topic:</label>
          <input type="text" value={topic} onChange={(e) => setTopic(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={discussion} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Create Discussion Board</button>
      </form>
</div>
    </div>
  );
}

export default AutoSearch;
