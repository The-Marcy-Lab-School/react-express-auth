import React, { useState, useEffect } from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
  ChatCard,
  ChatFeed,
  MessageList,
  ChatForm,
  PeopleSettings,
  ChatList,
  MessageForm,
} from "react-chat-engine-advanced";
import "regenerator-runtime";
import speech, { useSpeechRecognition } from "react-speech-recognition";
// import Sidebar from "./sidebar";
import "../CustomMessageForm/Chatbox.css"


function SearchBar() {

  // var divElement = document.getElementById("ce-upload-document-button");

  // // Remove the class from the element
  // divElement.classList.remove("ce-attachment-icon");

  // // Remove the element from the DOM
  // divElement.parentNode.removeChild(divElement);

  const [responseInput, setResponseInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userText, setUserText] = useState("")
  const { listening, transcript, resetTranscript } = useSpeechRecognition();
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
  const [selectedLanguage, setSelectedLanguage] = useState("es-ES");//language accent selection

//RECIEVE MESSAGES FROM BACKEND FOR A.I AND USER RESPONSES
const [messages, setChats] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch('api/gettMessages');
      const data = await response.json();
      setChats(data);
    } catch (error) {
      console.error(error);
    }
  };

 


console.log("messages", messages);
//CONSTANLY FETCH FROM THE DATABASE
useEffect(() => {
  fetchData();
}, []);

useEffect(() => {
  const interval = setInterval(() => {
    fetchData();
  }, 800); // Fetch every 5 seconds (adjust this as needed)

  return () => {
    clearInterval(interval); // Clean up the interval on component unmount
  };
}, []);


  // Function to show the modal and set a timeout to hide it
  const showImageModal = () => {
    speech.startListening()
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 60000000); // 23 seconds in milliseconds
  };

  // Step 2: Update the state variable as the user types
  const handleTextChange = (event) => {
    setUserText(event.target.value);
  };


  // const messages = [
  //   { id: 1, userid: 14, ai_response: "helo", user_response: "im user" },
  //   { id: 2, userid: 14, ai_response: "ho", user_response: "hello" },
  // ];

  async function callGpt3API(message) {
    // ... Your code to call the API ...
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({
              messages: [{ role: 'user', content: message }],
              model: "gpt-3.5-turbo" 
            })
  })

  const data = await response.json();
  return data.choices[0].message.content
  //ata.choices[0].message.content
  }

  const sendMessagesToBackend = async (aiResponse, userResponse) => {
    // ... Your code to send messages to the backend ...
    console.log("messages being sent to backend",aiResponse, userResponse )
      const body = { userResponses:userResponse, aiResponses:aiResponse  };
     console.log(body)
        const options = {
        method: 'POST',
          headers: {
            'Content-Type': 'application/json',
         },
          body: JSON.stringify(body),
        credentials: 'include',
       };
        const response = await fetch('/api/insertMessage', options);
  };

  useEffect(() => {
    console.log("1")
    if (!listening && (transcript || userInput)) {
      const inputToUse = userInput || transcript;
      callGpt3API(inputToUse).then((response) => {
        // const speechSynthesis = window.speechSynthesis;
        // const utterance = new SpeechSynthesisUtterance(response);
        // speechSynthesis.speak(utterance);

        // Send messages to the backend
        console.log("use effect ", inputToUse, response);
        sendMessagesToBackend(inputToUse, response);
        // Clear both responseInput and userInput
        setResponseInput("");
        setUserInput("");

        // Reset the transcript
        resetTranscript();
      });
    }
  }, [transcript, listening, userInput, resetTranscript]);


  //HANDLES THE CHANGE OF ACCENTS 
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    // Set the user's typed input and clear responseInput
    setUserInput(userText);
    setUserText("")

    setResponseInput("");
  };

//MAKES A.I RESPONSES SPEAK WITH ACCENT

const speakMessage = (text) => {
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = selectedLanguage;
  speechSynthesis.speak(utterance);
};

// const speakMessageWithSpanishAccent = (text) => {
//   const speechSynthesis = window.speechSynthesis;
//   const utterance = new SpeechSynthesisUtterance(text);
  
//   // Set the language and accent
//   utterance.lang = 'es-ES'; // Spanish (Spain) accent

//   speechSynthesis.speak(utterance);
// };

// Usage
//speakMessageWithSpanishAccent("Hola, llamo es ector");



  return (
  <>

    <div className="chatBox">
      <div className="chatSidebar">
        {/* <div className="a.i"> 
            <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="es-ES">Spanish</option>
            <option value="fr-FR">French</option>
            <option value="en-US">English</option>
            </select>
          </div> */}
        <div className="relative">
  <select
    value={selectedLanguage}
    onChange={handleLanguageChange}
    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    <option
      value="es-ES"
      className="text-blue-500 hover:bg-blue-100"
    >
      Spanish
    </option>
    <option
      value="fr-FR"
      className="text-green-500 hover:bg-green-100"
    >
      French
    </option>
    <option
      value="en-US"
      className="text-red-500 hover:bg-red-100"
    >
      English
    </option>
  </select>
  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg
      className="fill-current h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M8.293 11.293a1 1 0 011.414 0L12 13.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>
        



{/* 
        {listening ? <p>wrk</p> : <p>CLICK</p>} */}
       

        {transcript && <div>{transcript}</div>}
        {/* <ChatList {...chatProps} /> */}
      </div>
      <div className="chatContent">
        <div className="messages-container">
        {messages.map((message) => (
  <div key={message.id}>
    <div className="message user-message">{message.user_response}</div>
    <div className="message assistant-message">
      {message.ai_response}
      <button onClick={() => speakMessage(message.ai_response)}>  ▶️</button>
    </div>
  </div>
))}

        </div>
<div>

<div>
          {/* <MessageForm
            style={{
              border: "1px solid #ccc",
              width: "100%",
            }}
            onSubmit={(event) => handleSubmit(event.text)}
          /> */}


        <form id='message-form' onSubmit={(event) => handleSubmit(event)}>
          <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                  <label for="comment" class="sr-only">Your comment</label>
                  <textarea id="comment" rows="4" onChange={handleTextChange} class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a comment..." value={userText} required></textarea>
              </div>
              <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                  <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                      Post comment
                  </button>
                  <div class="flex pl-0 space-x-1 sm:pl-2">
                      
                    
                      <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600" onClick={() => {
                      // {showImageModal}
                      // Handle the button click action here
                      console.log("Button clicked!");
                      // speech.startListening()
                      // You can add your custom logic here
                    }}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill: '#ffa200'}}><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>                   <span class="sr-only">Upload image</span> */}
          <>
                    <button onClick={showImageModal}><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" style={{fill: '#ffa200'}}><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/></svg>                   <span class="sr-only">Upload image</span></button>
                    {modalVisible && (
                      <div className="modal">
                        <img
                          src="https://i.pinimg.com/originals/ec/61/2c/ec612c4085582da4f5b8a7c2cc575bf9.gif" // Replace with your image path
                          alt="Your Image"
                          sizes="(max-width: 600px) 100vw, 50vw" 
                          className="modal-content"
                        />
                      </div>
                    )}
             </>   
                      </button>
                  </div>
              </div>
          </div>
        </form>
        <p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>

          {/* <button
            onClick={() => {
              // {showImageModal}
              // Handle the button click action here
              console.log("Button clicked!");
              speech.startListening()
              // You can add your custom logic here
            }}
          >
            Your Button
          </button> */}
          
        </div>
</div>







      </div>
    </div>
</>
  );
}

export default SearchBar;



// import React, { useState, useEffect } from "react";
// import {
//   useMultiChatLogic,
//   MultiChatSocket,
//   MultiChatWindow,
//   ChatCard,
//   ChatFeed,
//   MessageList,
//   ChatForm,
//   PeopleSettings,
//   ChatList,
//   MessageForm,
// } from "react-chat-engine-advanced";
// import "regenerator-runtime";
// import speech, { useSpeechRecognition } from "react-speech-recognition";

// function SearchBar() {
//   const [responseInput, setResponseInput] = useState("");
//   const [userInput, setUserInput] = useState("");
//   const { listening, transcript, resetTranscript } = useSpeechRecognition();
//   const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

//   // Function to show the modal and set a timeout to hide it
//   const showImageModal = () => {
//     setModalVisible(true);
//     setTimeout(() => {
//       setModalVisible(false);
//     }, 23000); // 23 seconds in milliseconds
//   };

//   const messages = [
//     { id: 1, userid: 14, ai_response: "helo", user_response: "im user" },
//     { id: 2, userid: 14, ai_response: "ho", user_response: "hello" },
//   ];

//   // Rest of your code...

//   return (
//     <div className="chatBox">
//       <div className="chatSidebar">
//         <div className="a.i">okm</div>

//         {listening ? <p>wrk</p> : <p>CLICK</p>}

//         {transcript && <div>{transcript}</div>}
//         {/* <ChatList {...chatProps} /> */}
//       </div>
//       <div className="chatContent">
//         <div className="messages-container">
//           {messages.map((message) => (
//             <div key={message.id}>
//               <div className="message user-message">
//                 {message.user_response}
//               </div>
//               <div className="message assistant-message">
//                 {message.ai_response}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div>
//           <div style={{ display: "flex" }}>
//             <MessageForm
//               style={{
//                 border: "1px solid #ccc",
//                 width: "100%",
//               }}
//               onSubmit={(event) => handleSubmit(event.text)}
//             />
//             <button
//               onClick={() => {
//                 // {showImageModal}
//                 // Handle the button click action here
//                 console.log("Button clicked!");
//                 speech.startListening();
//                 // You can add your custom logic here
//               }}
//             >
//               Your Button
//             </button>
//           </div>
//         </div>

//         <div className="App">
//           <button onClick={showImageModal}>Show Image</button>
//           {modalVisible && (
//             <div className="modal">
//               <img
//                 src="https://i.pinimg.com/originals/58/81/48/5881489fcde058a20cbc811d1a1cf9d7.gif" // Replace with your image path
//                 alt="Your Image"
//                 className="modal-content"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SearchBar;
