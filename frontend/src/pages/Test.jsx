

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



////A.I TEST
import React, { useEffect } from "react";
import "regenerator-runtime/runtime"; // Import regenerator-runtime to support async/await
import speech, { useSpeechRecognition } from "react-speech-recognition";
const key = "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"
function Test() {
  const { listening, transcript } = useSpeechRecognition();

  async function callGpt3API(message) {
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer  ${key}` // Replace with your actual API key
        },
        body: JSON.stringify({
          messages: [{ role: "user", content: message }],
          model: "gpt-3.5-turbo" // Update to the correct model name
        })
      });

      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  useEffect(() => {
    if (!listening && transcript) {
      callGpt3API(transcript)
        .then(response => {
          const speechSynthesis = window.speechSynthesis;
          const utterance = new SpeechSynthesisUtterance(response);
          speechSynthesis.speak(utterance);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }, [transcript, listening]);

  return (
    <div>
      {listening ? <p>wrk</p> : <p>CLICK</p>}
      <button onClick={() => speech.startListening()}>Ask</button>
      {transcript && <div>{transcript}</div>}
    </div>
  );
}

export default Test;


// import{Configuration, OpenAIAPI} from "openai"
// const completion = new OpenAIAPI(new Configuration({
//   apiKey: "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"
// }));

//  openai.createCompletion({
//   model: "text-davinci-003",
//   messages: [
// {role:"user", content:"hello"}
//   ]
// })
// .then (res => console.log(res))