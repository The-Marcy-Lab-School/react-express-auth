//////CODE USE FOR TESTING FETCHING FROM DATABASE/////////
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



//////////////////A.I TEST USING A NEW API FROM RAPID API///////////////
/*import React, { useEffect } from "react";
import "regenerator-runtime/runtime"; // Import regenerator-runtime to support async/await
import speech, { useSpeechRecognition } from "react-speech-recognition";
const key = "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"
function Test() {
  const { listening, transcript } = useSpeechRecognition();

  const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';

  // document.getElementById('translate-button').addEventListener('click', () => {
  //   //const selectedLanguage = document.getElementById('language-select').value;
    
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       'X-RapidAPI-Key': 'c93e3c76b1msh4fda92c5708b84bp15efbejsnd23ad28ec16b',
  //       'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
  //     },
  //     body: JSON.stringify({
  //       from: 'en',
  //       to: 'es',
  //       q: `${transcript}`,
  //     })
  //   };
    
  //   fetch(url, options)
  //     .then(response => response.text())
  //     .then(result => console.log(result))
  //     .catch(error => console.error(error));
  // });
  
console.log("translate" , transcript)



  return (
    <div>
      {listening ? <p>wrk</p> : <p>CLICK</p>}
      <button onClick={() => speech.startListening()}>Ask</button>
      {transcript && <div>{transcript}</div>}
    </div>
  );
}

export default Test;

//RUNNING INSTALLATIONS TO TEST A.I
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

// import {Configurationn, OpenAIAPI} from "openai";
// const configuration = new Configurationn ({
//   organization : "org-MabACTtNENXNK3F2JLFEMX4r",
//   apiKey : "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",
// })
// const openai = new OpenAIAPI(configuration);

// const completion = await openai.createChatCompletion({
//   model: "gpt-3.5-turbo",
//   messages: [
//     {role:"user", content:"Hello Word"},
//   ]
// })
// console.log(completion.data.choices[0].messages)

*/

/* TESTING WITH OTHER API
import React from "react";
import "regenerator-runtime/runtime"; // Import regenerator-runtime to support async/await
import speech, { useSpeechRecognition } from "react-speech-recognition";

const Test = () => {
  const { listening, transcript } = useSpeechRecognition();
  let tt 
  const translateText = async (text) => {
    const url = 'https://rapid-translate-multi-traduction.p.rapidapi.com/t';
    console.log(text)
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'c93e3c76b1msh4fda92c5708b84bp15efbejsnd23ad28ec16b',
        'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
      },
      body: JSON.stringify({
        from: 'en',
        to: 'es', // Change this to the target language
        q: text,
      })

    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      tt = result
      console.log(result.toString());
    } catch (error) {
      console.error(error);
    }
  };
  
  // This will be called when speech recognition ends
  // const handleSpeechEnd = () => {
  //   if (transcript) {
  //     translateText(transcript);
  //   }
  // };
  
  //speech.onEnd = handleSpeechEnd;

  if (transcript) {
    translateText(transcript);
  }

  return (
    <div>
      {listening ? <p>Listening...</p> : <p>Click to start speaking</p>}
      <button onClick={() => speech.startListening()}>Start Listening</button>
      {transcript && <div>{transcript}</div>}
      <>{tt}</>
    </div>

  );
};

export default Test;

*/




///////A.I THAT WORKS FOR ME///////////////

// import React, { useEffect } from "react";
// import "regenerator-runtime";
// import speech, { useSpeechRecognition } from "react-speech-recognition";

// function Test() {
//   const { listening, transcript } = useSpeechRecognition();

//   async function callGpt3API(message) {
//     const response = await fetch('https://api.openai.com/v1/chat/completions', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer' 
//       },
//       body: JSON.stringify({
//         messages: [{ role: 'user', content: message }],
//         model: "gpt-3.5-turbo" 
//       })
//     });

//     const data = await response.json();
//     return data.choices[0].message.content;
//   }

//   useEffect(() => {
//     if (!listening && transcript) {
//       callGpt3API(transcript).then((response) => {
//         const speechSynthesis = window.speechSynthesis;
//         const utterance = new SpeechSynthesisUtterance(response);
//         speechSynthesis.speak(utterance);
//       });
//     }
//   }, [transcript, listening]);

//   return (
//     <>
//       {listening ? <p>wrk</p> : <p>CLICK</p>}
//       <button onClick={() => speech.startListening()}>Ask</button>
//       {transcript && <div>{transcript}</div>}
//     </>
//   );
// }

// export default Test;


import React, { useEffect, useState } from "react";
import Chatbox from "./ChatBox";
import "regenerator-runtime";
import speech, { useSpeechRecognition } from "react-speech-recognition";

function Test() {
  const [responseInput, setResponseInput] = useState("");
  const [userInput, setUserInput] = useState(""); // To store user's typed input
  const { listening, transcript } = useSpeechRecognition();

  


  async function callGpt3API(message) {
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
    });

    const data = await response.json();
    return data.choices[0].message.content;//A.I will read the responses after the fetch request
  }


  //This function will send messages to backend base on user and a.i response
  // async function sendMessagesToBackend(aiResponse, userResponse) {
  //   try {
  //     console.log("types response", aiResponse, userResponse);
  //     const response = await fetch('/api/insertMessage', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ aiResponse, userResponse }),
  //     });
  
  //     const data = await response.json();
  //     console.log("response json", data);
  //   } catch (error) {
  //     console.error("Error sending data to backend:", error);
  //   }
  // }
  

  const sendMessagesToBackend = async (aiResponse, userResponse ) => {
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
  }
  
  useEffect(() => {
    console.log("user", userInput)
    if (!listening && (transcript || userInput)) {
      const inputToUse = userInput || transcript;
      callGpt3API(inputToUse).then((response) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(response);
        speechSynthesis.speak(utterance);

        // Send messages to the backend
        sendMessagesToBackend(response, inputToUse);
        setUserInput("")//Rest user input for other inputs
      });
    }
  }, [transcript, listening, userInput]);

  const handleResponseInputChange = (event) => {
    setResponseInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setUserInput(responseInput); // Set the user's typed input
    setResponseInput("");
  };

  return (
    <>
      {listening ? <p>wrk</p> : <p>CLICK</p>}
      <button onClick={() => speech.startListening()}>Ask</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={responseInput}
          onChange={handleResponseInputChange}
          placeholder="Type your response..."
        />
        <button type="submit">Submit</button>
      </form>
      {transcript && <div>{transcript}</div>}
      <Chatbox/>
    </>
  );
}

export default Test;
