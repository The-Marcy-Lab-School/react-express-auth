import React, { useEffect, useState } from "react";

function FetchChatData() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('api/gettMessages');
        const data = await response.json();
        setChats(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("chatboxs", chats);

  return (
    <>
    
    </>
  )
}

export default FetchChatData;
