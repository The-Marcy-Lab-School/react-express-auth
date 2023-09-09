// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic, ChatCard, MessageForm} from 'react-chat-engine-advanced'
// import Header from "./Header"
// import React from 'react';
// const ChatsPage = (props) => {
//    // const chatProps = useMultiChatLogic('2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6', "adam","adam")

// //     <>
// //     <div style = {{height: '100vh'}}>
// //         <MultiChatSocket {...chatProps} />
// //         <MultiChatWindow {...chatProps} style= {{height:'100'}}
        
// //             //  renderChatHeader={(chat) => <Header chat ={chat} />}
           
// //         />
// //          <MessageForm
   
// //    onChange={function noRefCheck(){   console.log("work")}}
// //    onSubmit={function noRefCheck(){}}
// //    renderMessageForm={function noRefCheck(){}}
// //    style={{
     
// //      border: '2px solid red',
// //      maxWidth: '600px'
// //    }}
// //  />
// //   </div>
    
// //     </>



//     return (
//         <>
//       <MessageForm
//   attachmentInputIconStyle={{
//     border: '2px solid black'
//   }}
//   attachmentInputStyle={{
//     border: '2px solid yellow',
//     padding: '6px 8px'
//   }}
//   draftAttachmentRemoveStyle={{
//     border: '2px solid purple'
//   }}
//   draftAttachmentStyle={{
//     border: '2px solid orange'
//   }}
//   draftFileStyle={{
//     border: '2px solid pink'
//   }}
//   draftImageStyle={{
//     border: '2px solid grey'
//   }}
//   inputStyle={{
//     border: '2px solid green'
//   }}
//   onChange={function noRefCheck(){}}
//   onSubmit={function noRefCheck(value){console.log(value)}}
//   sendButtonStyle={{
//     border: '2px solid blue'
//   }}
//   style={{
//     border: '2px solid red',
//     maxWidth: '600px'
//   }}
// />    </>
//      )
// }
// export default ChatsPage

// // import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

// // const ChatsPage = () => {
// //     const chatProps = useMultiChatLogic('2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6', 'adam')

// //     return (
// //         <div style={{ height: '100vh' }}>
// //             <MultiChatSocket {...chatProps} />
// //             <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
// //         </div>
// //     )
// // }

// // export default ChatsPage

// // import React from 'react';

// // import {
// //   MultiChatSocket,
// //   useMultiChatLogic,
// //   MultiChatWindow ,
// // } from 'react-chat-engine-advanced';

// // export function ChatsPage() {
// //   const chatProps = useMultiChatLogic(
// //     '2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6',
// //     'adam',
// //     'adam'
// //   );
// //   console.log("chatlogs", chatProps)
// //   return (
// //     <>
// //       <MultiChatWindow {...chatProps} />
// //       <MultiChatSocket {...chatProps} />
// //     </>
// //   );
// // }
// //{currentUser.username}
// // export default ChatsPage
// // import React, { useContext } from 'react';
// // import CurrentUserContext from "../contexts/current-user-context";
// // //import { PrettyChatWindow } from 'react-chat-engine-pretty';
// // imp
// // // import { 
// // //   ChatEngine, 
// // //   ChatList, ChatCard, NewChatForm,
// // //   ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
// // //   ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
// // // } from 'react-chat-engine'


// // import React from 'react';
// // import { ChatEngine } from 'react-chat-engine-advanced';



// // export function ChatsPage() {
// //   //const { currentUser } = useContext(CurrentUserContext);
// //  // console.log("message chat user", currentUser.username);
  
// //   // return (
// //   //   <div>
// //   //     <PrettyChatWindow 
// //   //       projectId='2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
// //   //       username="b"
// //   //       secret="b"
// //   //       style={{ height: '1050px' }} // Fixed height
// //   //       renderChatList={(chatAppState) => <ChatList {...chatAppState} />}

// //   //     />
// //   //   </div>
// //   // );

// //   	return (
// // 		<ChatEngine
// //     projectId='2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
// //     username="adam"
// //    secret="adam"
// // 		/>
// // 	);
// // }


// // export default ChatsPage;


// // import React from 'react';
// // import { ChatEngine } from 'react-chat-engine';

// // function A() {
// // 	return (
// // 		<ChatEngine
// //     projectId='2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
// //     username="b"
// //    secret="b"
// // 		/>
// // 	);
// // }

// // export default A;




import React from 'react';
import { ChatEngine } from 'react-chat-engine';

function App() {
 // const chatProps = useMultiChatLogic('2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6', "adam","adam")
	return (
		<ChatEngine
			projectID='2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6'
			userName='adam'
			userSecret='adam'
			// Render Custom Components
			height='100vh'
			renderChatList={(chatAppState) => {chatAppState}}
			
		/>
	);
}

export default App;