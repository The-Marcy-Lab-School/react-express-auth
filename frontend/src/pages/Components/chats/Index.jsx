import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

export default function App() {
  return (
    <PrettyChatWindow
      projectId="94e5be9a-acd1-49a6-840f-ccbbca1be304"
      username="earth"
      secret="earth"
      style={{ height: '100vh' }}
    />
  );
}



// import React from "react";
// import {
//   useMultiChatLogic,
//   MultiChatSocket,
//   MultiChatWindow,
// } from "react-chat-engine-advanced";
// //import Header from "@/components/customHeader";
// import StandardMessageForm from "../CustomMessageForm/StandardMessageForm";
// //import Ai from "@/components/customMessageForms/Ai";
// //import AiCode from "@/components/customMessageForms/AiCode";
// //import AiAssist from "@/components/customMessageForms/AiAssist";

// const Chat = ({ user, secret }) => {
//   const chatProps = useMultiChatLogic(
//     '94e5be9a-acd1-49a6-840f-ccbbca1be304',
//     'earth',
//     'earth'
//   );

//   return (
//     <div style={{ flexBasis: "100%" }}>
//       <MultiChatSocket {...chatProps} />
//       <MultiChatWindow
//         {...chatProps}
//         style={{ height: "100vh" }}
     
//         renderMessageForm={(props) => {
//         //   if (chatProps.chat?.title.startsWith("AiChat_")) {
//         //     return <Ai props={props} activeChat={chatProps.chat} />;
//         //   }
//         //   if (chatProps.chat?.title.startsWith("AiCode_")) {
//         //     return <AiCode props={props} activeChat={chatProps.chat} />;
//         //   }
//         //   if (chatProps.chat?.title.startsWith("AiAssist_")) {
//         //     return <AiAssist props={props} activeChat={chatProps.chat} />;
//         //   }

//           return (
//             <StandardMessageForm props={props} activeChat={chatProps.chat} />
//           );
//         }}
//       />
//     </div>
//   );
// };

// export default Chat;


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
//   MessageForm
// } from "react-chat-engine-advanced";
// import { ChatEngine, ChatSettingsTop, NewMessageForm } from 'react-chat-engine';
// import { MessageBubble } from 'react-chat-engine';
// import StandardMessageForm from "../CustomMessageForm/StandardMessageForm";
// import "@/index"
//import { ChatObject, MessageObject } from 'react-chat-engine-advanced';
//import AIChatForm from "./AIChatForm"; // Import the AI chat form component

// const Chat = ({ user, secret }) => {
//     const chatProps = useMultiChatLogic(
//       '2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6',
//       'adam',
//       'adam'
//     );
  
//     return (
//       <div style={{ flexBasis: '100%' }}>
//         <MultiChatSocket {...chatProps} />
//         <MultiChatWindow
//           {...chatProps}
//           style={{ height: '100vh' }}
//           renderMessageForm={(props) => {
//             return (
//               <div>
//                 {/* Your persistent chat card */}
//                 <div className="persistent-card">
//                   <h3>Persistent Chat</h3>
//                   <p>This chat is always available.</p>
//                 </div>
  
//                 {/* Render the standard message form */}
//                 <StandardMessageForm props={props} activeChat={chatProps.chat} />
//               </div>
//             );

//           }}

//           renderChatCard={(chat, index) => {
//             // Customize how each chat is rendered here
//             return (
//               <div key={chat.id} className="custom-chat-card">
//                 <h3>{chat.title}</h3>
//                 {/* Add more chat details or components here */}
//               </div>
//             );
//           }}
//         />
//       </div>
//     );
//   };
  
//   export default Chat;
// const Chat = ({ user, secret }) => {
//     const [message, setMessage] = useState('');


//     const handleSubmit = (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
//         console.log('Typed Message:', message); // Log the typed message to the console
//       };

//     const chatProps = useMultiChatLogic(
//       '2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6',
//       'adam',
//       'adam'
//     );
//   console.log("chat props",{...chatProps})
//     return (
        
//     <>

//     {/* renderNewMessageForm={(creds, chatId) => {}} */}
//     {/* <ChatList {...chatProps} /> */}
//  < ChatEngine
//    projectID= '2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
//    userName='adam'
//    userSecret='adam'
// {...chatProps}
// //   renderNewChatForm={(creds) => {
// //     console.log("creds",creds)
// //     return(<>fdv</>)
// //   }}

// //   renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {
// //     console.log("message bubble",`${message.sender_username}:${message.text}`)
// //     return(<> {`${message.sender_username}:${message.text}`} </>)
// //   } }

// //   renderChatFeed={(chatAppState) => {  style={{ height: '100vh' }}}}

//   renderMessageForm={(props) => {
//             //   if (chatProps.chat?.title.startsWith("AiChat_")) {
//             //     return <Ai props={props} activeChat={chatProps.chat} />;
//             //   }
//             //   if (chatProps.chat?.title.startsWith("AiCode_")) {
//             //     return <AiCode props={props} activeChat={chatProps.chat} />;
//             //   }
//             //   if (chatProps.chat?.title.startsWith("AiAssist_")) {
//             //     return <AiAssist props={props} activeChat={chatProps.chat} />;
//             //   }
    
//               return (
//                 <StandardMessageForm props={props} activeChat={chatProps.chat} />
//               );
//             }}
            

// //   renderChatFeed={(chatAppState) => {

// //     console.log("state",chatAppState)

// //     return (<>fdfv
    
// //     </>)
// //   }}
// />
// {/* <div className="chatBox">
//     <div>
//         <>ewfe</>
//         <ChatList {...chatProps} />
//     </div>
//     <ChatFeed {...chatProps}  />
// </div> */}




// <div className="chatBox">
//   <div className="chatSidebar">
//     <div className="a.i">okm</div>
//     {/* <ChatList {...chatProps} /> */}
//   </div>
//   <div className="chatContent">
//     {/* <ChatFeed {...chatProps}  /> */}
//     {/* <StandardMessageForm props={props} activeChat={chatProps.chat} /> */}

//     <MessageForm
//     style={{
//       border: '1px solid #ccc',
//       width: '100%'
//     }}
//    // value={message}
//    value={message}
//    //onChange={(e) => setMessage(e.target.value)}
// //    onChange={function noRefCheck(e){console.log(e)}}
//     onSubmit={function noRefCheck(d){console.log(d.text)}}
//     // onChange={function noRefCheck(r){console.log("this is e",r)}}
//   />
//     <div>
// </div>
//   </div>
// </div>


// {/* <ChatFeed {...chatProps} style={{ height: '300px' , width:"300px"}}  />   */}

//     {/* <ChatList {...chatProps} /> 
//     <ChatFeed {...chatProps} style={{ height: '300px' , width:"300px"}}  />  */}
//         {/* <MultiChatSocket {...chatProps} /> */}
//         {/* <MultiChatWindow  {...chatProps.chats.id} /> */}
//         {/* <ChatFeed {...chatProps} style={{ height: '500px' , width:"500px"}}  />  */}
       
//         {/* <PeopleSettings {...chatProps} />
//        <ChatEngine
//        projectID='2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
//        userName='adam'
//        userSecret='adam'

// //        renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {
// //        return (<MessageBubble lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />)}}

//        //renderNewMessageForm={(creds, chatID) => <NewMessageForm />}
// // renderChatCard={(chat, index) => {
    
// //     // Customize how each chat is rendered here
// //     console.log("chat card",chat)
// //     return (
// //       <div key={chat.id} className="custom-chat-card">
// //         <h3>{chat.title}</h3>
// //         {/* Add more chat details or components here */}
   
// {/* //     );


   
    
// //   }}


//   //renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {console.log(chat)}}
//     //    /> */}


//        {/* <MultiChatWindow/> */}
//        {/* <MessageList {...chatProps}   messages={{}} /> */}
         
//        {/* <ChatForm renderChatCard={(chat, index) => {}}  /> */}


// </>
//     );
//   };
  
//   export default Chat;
  


//   <MultiChatWindow
//   {...chatProps}

//   style={{ height: '100vh' }}
// //   renderMessageForm={(props) => {
// //    // console.log("props", props)
// //     console.log("props", props)
// //     return (
// //       <div>
// //         {/* Your persistent chat card */}
   
// //       </div>
// //     );
// //   }}


//   renderChatCard={(chat, index) => {
//     // Customize how each chat is rendered here

//     const handleChatClick = (chat) => {
//         console.log("Clicked chat:", chat);
//         // Add logic to handle chat card click, e.g., open the chat.
//       };
//     return (
//         <>
//         <PeopleSettings       style={{backgroundcolor: 'red' }} /> 
//         </>
//     )
//   }}
// //   renderNewChatForm={(creds) => {
// //     console.log("cred", creds)
// //     return (
// //         <></>
// //     )
// //   }}
// // 	renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => {console.log("things",creds, chat, lastMessage, message, nextMessage)
// // return (<>vc</>)
// // }}

// df ={(ce) => {

// //console.log("ww",{...chatProps})
// return(
//   <>edf</>
// )

// }}


// />