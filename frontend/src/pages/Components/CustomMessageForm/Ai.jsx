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

function SearchBar() {

  // var divElement = document.getElementById("ce-upload-document-button");

  // // Remove the class from the element
  // divElement.classList.remove("ce-attachment-icon");

  // // Remove the element from the DOM
  // divElement.parentNode.removeChild(divElement);

  const [responseInput, setResponseInput] = useState("");
  const [userInput, setUserInput] = useState("");
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
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 23000); // 23 seconds in milliseconds
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
              Authorization: 'Bearer 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' 
            },
            body: JSON.stringify({
              messages: [{ role: 'user', content: message }],
              model: "gpt-3.5-turbo" 
            })
  })

  const data = await response.json();
  return data.choices[0].message.content
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
    // event.preventDefault();

    // Set the user's typed input and clear responseInput
    setUserInput(event);
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
<>
          <button onClick={showImageModal}>Show Image</button>
          {modalVisible && (
            <div className="modal">
              <img
                src="https://i.pinimg.com/originals/58/81/48/5881489fcde058a20cbc811d1a1cf9d7.gif" // Replace with your image path
                alt="Your Image"
                className="modal-content"
              />
            </div>
          )}
   </>   

    <div className="chatBox">
      <div className="chatSidebar">
        <div className="a.i"> 
            <select value={selectedLanguage} onChange={handleLanguageChange}>
            <option value="es-ES">Spanish</option>
            <option value="fr-FR">French</option>
            <option value="en-US">English</option>
          </select>
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
<div style={{ display: "flex" }}>
          <MessageForm
            style={{
              border: "1px solid #ccc",
              width: "100%",
            }}
            onSubmit={(event) => handleSubmit(event.text)}
          />
          <button
            onClick={() => {
              // {showImageModal}
              // Handle the button click action here
              console.log("Button clicked!");
              speech.startListening()
              // You can add your custom logic here
            }}
          >
            Your Button
          </button>
          
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
