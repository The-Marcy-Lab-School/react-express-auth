import React from "react";
import {
  useMultiChatLogic,
  MultiChatSocket,
  MultiChatWindow,
} from "react-chat-engine-advanced";
//import Header from "@/components/customHeader";
import StandardMessageForm from "../CustomMessageForm/StandardMessageForm";
//import Ai from "@/components/customMessageForms/Ai";
//import AiCode from "@/components/customMessageForms/AiCode";
//import AiAssist from "@/components/customMessageForms/AiAssist";

const Chat = ({ user, secret }) => {
  const chatProps = useMultiChatLogic(
   
    'adam',
    'adam'
  );

  return (
    <div style={{ flexBasis: "100%" }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
     
        renderMessageForm={(props) => {
        //   if (chatProps.chat?.title.startsWith("AiChat_")) {
        //     return <Ai props={props} activeChat={chatProps.chat} />;
        //   }
        //   if (chatProps.chat?.title.startsWith("AiCode_")) {
        //     return <AiCode props={props} activeChat={chatProps.chat} />;
        //   }
        //   if (chatProps.chat?.title.startsWith("AiAssist_")) {
        //     return <AiAssist props={props} activeChat={chatProps.chat} />;
        //   }

          return (
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          );
        }}
      />
    </div>
  );
};

export default Chat;