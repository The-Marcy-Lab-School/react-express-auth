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
  const [responseInput, setResponseInput] = useState("");
  const [userInput, setUserInput] = useState("");
  const { listening, transcript, resetTranscript } = useSpeechRecognition();
  const messages = [
    { id: 1, userid: 14, ai_response: "helo", user_response: "he" },
    { id: 2, userid: 14, ai_response: "ho", user_response: "hello" },
  ];

  async function callGpt3API(message) {
    // ... Your code to call the API ...
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: 'Bearer ' 
            },
            body: JSON.stringify({
              messages: [{ role: 'user', content: message }],
              model: "gpt-3.5-turbo" 
            })
  })
  }
  const sendMessagesToBackend = async (aiResponse, userResponse) => {
    // ... Your code to send messages to the backend ...
    console.log("user res",aiResponse, userResponse )
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
    if (!listening && (transcript || userInput)) {
      const inputToUse = userInput || transcript;
      callGpt3API(inputToUse).then((response) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(response);
        speechSynthesis.speak(utterance);

        // Send messages to the backend
        console.log("user", inputToUse, response);
        sendMessagesToBackend(response, inputToUse);

        // Clear both responseInput and userInput
        setResponseInput("");
        setUserInput("");

        // Reset the transcript
        resetTranscript();
      });
    }
  }, [transcript, listening, userInput, resetTranscript]);

  const handleResponseInputChange = (event) => {
    // setResponseInput(event.text);
  };

  const handleSubmit = (event) => {
    // event.preventDefault();

    // Set the user's typed input and clear responseInput
    setUserInput(event);
    setResponseInput("");
  };

  return (
    <div className="chatBox">
      <div className="chatSidebar">
        <div className="a.i">okm</div>

        {listening ? <p>wrk</p> : <p>CLICK</p>}
        <button onClick={() => speech.startListening()}>Ask</button>

        {transcript && <div>{transcript}</div>}
        {/* <ChatList {...chatProps} /> */}
      </div>
      <div className="chatContent">
        <div className="messages-container">
          {messages.map((message) => (
            <div key={message.id}>
              <div className="message user-message">{message.user_response}</div>
              <div className="message assistant-message">{message.ai_response}</div>
            </div>
          ))}
        </div>

        <MessageForm
          style={{
            border: "1px solid #ccc",
            width: "100%",
          }}
          onSubmit={(event) => handleSubmit(event.text)}
        />
      </div>
    </div>
  );
}

export default SearchBar;
