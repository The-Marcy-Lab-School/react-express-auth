// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'
// const ChatsPage = (props) => {
//     const chatProps = useMultiChatLogic('2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6', props.user.username, props.user.secret)

//     return (
//         <>
//         <div style = {{height: '100vh'}}>
//             <MultiChatSocket {...chatProps}/>
//             <MultiChatWindow {...chatProps} style= {{height:'100'}}/>
//         </div>
//         </>
//      )
// }
// export default ChatsPage

// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

// const ChatsPage = () => {
//     const chatProps = useMultiChatLogic('2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6', 'adam')

//     return (
//         <div style={{ height: '100vh' }}>
//             <MultiChatSocket {...chatProps} />
//             <MultiChatWindow {...chatProps} style={{ height: '100%' }} />
//         </div>
//     )
// }

// export default ChatsPage

// import React from 'react';

// import {
//   MultiChatSocket,
//   useMultiChatLogic,
//   MultiChatWindow ,
// } from 'react-chat-engine-advanced';

// export function ChatsPage() {
//   const chatProps = useMultiChatLogic(
//     '2b4601bf-3d7e-4f38-a3b3-cf934a21e3a6',
//     'adam',
//     'adam'
//   );
//   console.log("chatlogs", chatProps)
//   return (
//     <>
//       <MultiChatWindow {...chatProps} />
//       <MultiChatSocket {...chatProps} />
//     </>
//   );
// }

// export default ChatsPage
import React, { useContext } from 'react';
import CurrentUserContext from "../contexts/current-user-context";
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export function ChatsPage() {
  const { currentUser } = useContext(CurrentUserContext);
  console.log("message chat user", currentUser.username);
  
  return (
    <div>
      <PrettyChatWindow 
        projectId=
        username={currentUser.username}
        secret={currentUser.username}
        style={{ height: '650px' }} // Fixed height
      />
    </div>
  );
}

export default ChatsPage;
