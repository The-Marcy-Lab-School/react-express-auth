import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useSocket } from '../contexts/SocketProvider';
import Peer from 'peerjs';
import './Room.css';
import { FaMicrophone } from 'react-icons/fa';
import { FaMicrophoneSlash } from 'react-icons/fa6';
import { FaVideo } from 'react-icons/fa';
import { FaVideoSlash } from 'react-icons/fa';
import { IoChatbox } from 'react-icons/io5';

const Room = () => {
  const { roomid } = useParams();
  const roomId = roomid;
  console.log(roomId);
  const socket = useSocket();
  const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001',
  });
  const videoGrid = useRef();
  const peers = useRef({});
  const [messages, setMessages] = useState([]);
  const [muted, setMuted] = useState(false);
  const [hidden, setHidden] = useState(false);
  let myVideo = useRef({});
  let myStream = useRef();

  useEffect(() => {
    console.log(roomId);
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        myVideo.current = document.createElement('video');
        myVideo.current.muted = true;
        myStream.current = stream;
        addVideoStream(myVideo.current, stream);

        myPeer.on('call', (call) => {
          console.log('call');
          call.answer(stream);
          const video = document.createElement('video');
          call.on('stream', (userVideoStream) => {
            addVideoStream(video, userVideoStream);
          });
        });

        socket.on('user-connected', (userId) => {
          setTimeout(() => connectToNewUser(userId, stream), 1000);
        });
      });

    socket.on('createMessage', (message) => {
      console.log('from server: ' + message);
      setMessages((prevList) => [...prevList, message]);
    });

    socket.on('user-disconnected', (userId) => {
      if (peers.current[userId]) peers.current[userId].close();
    });
    console.log(myPeer);
    console.log(socket);
    myPeer.on('open', (id) => {
      console.log('mypeer open');
      socket.emit('join-room', roomId, id);
    });
  }, [roomId]);

  function connectToNewUser(userId, stream) {
    console.log('Logged');
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', (userVideoStream) => {
      addVideoStream(video, userVideoStream);
    });
    call.on('close', () => {
      video.remove();
    });

    peers.current[userId] = call;
  }

  function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    console.log('what');
    const grid = videoGrid.current;
    if (grid) {
      grid.appendChild(video); // Use appendChild instead of append
    }
  }

  const handleChatSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    console.log(form.chat_message.value);
    if (form.chat_message.value.length > 0) {
      console.log('sending it');
      socket.emit('message', form.chat_message.value);
      event.target.reset();
    }
  };

  const toggleMute = () => {
    console.log(myVideo.current);
    console.log(myVideo.current.setMediaKeys);
    console.log(myStream.current.getAudioTracks()[0]);
    const bool = myStream.current.getAudioTracks()[0].enabled;
    console.log(bool);
    setMuted(!muted);
    if (bool) {
      myStream.current.getAudioTracks()[0].enabled = false;
    } else {
      myStream.current.getAudioTracks()[0].enabled = true;
    }
  };

  const toggleVideo = () => {
    console.log(myVideo.current);
    console.log(myStream.current.getVideoTracks()[0]);
    const bool = myStream.current.getVideoTracks()[0].enabled;
    console.log(bool);
    setHidden(!hidden);
    if (bool) {
      myStream.current.getVideoTracks()[0].enabled = false;
    } else {
      myStream.current.getVideoTracks()[0].enabled = true;
    }
  };

  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="main-videos">
            <div id="video-grid" ref={videoGrid}></div>
          </div>
          <div className="main-controls">
            <div className="controls-block">
              <div className="controls-button" onClick={toggleMute}>
                {muted ? (
                  <>
                    <FaMicrophoneSlash className="red" size={24} />
                    <span>Unmute</span>
                  </>
                ) : (
                  <>
                    <FaMicrophone size={24} />
                    <span>Mute</span>
                  </>
                )}
              </div>

              <div className="controls-button" onClick={toggleVideo}>
                {hidden ? (
                  <>
                    <FaVideoSlash className="red" size={24} />
                    <span>Show Video</span>
                  </>
                ) : (
                  <>
                    <FaVideo size={24} />
                    <span>Stop Video</span>
                  </>
                )}
              </div>
            </div>
            <div className="controls-block">
              <div className="controls-button">
                <IoChatbox size={24} />
                <span>Chat</span>
              </div>
            </div>
            <div className="controls-block">
              <div className="controls-button">
                <span className="leave-meeting">Leave</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="header">
            <h6>Chat</h6>
          </div>
          <div className="chat-window">
            <ul className="messages">
              {messages.map((str, index) => (
                <li key={index}>{str}</li>
              ))}
            </ul>
          </div>
          <div className="message-container">
            <form onSubmit={handleChatSubmit}>
              <input
                id="chat_message"
                name="chat_message"
                type="text"
                placeholder="Type message here..."
              ></input>
              <button>Send</button>
            </form>
            {/* <input id="chat_message" type='text' placeholder='Type message here...'></input> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
