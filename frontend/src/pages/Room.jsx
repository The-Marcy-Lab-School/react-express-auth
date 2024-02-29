import { useEffect, useRef, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Peer from 'peerjs';
import './Room.css';
import { FaMicrophone, FaVideo, FaVideoSlash } from 'react-icons/fa';
import { FaMicrophoneSlash } from 'react-icons/fa6';
import { IoChatbox } from 'react-icons/io5';
import { useSocket } from '../contexts/SocketProvider';
import CurrentUserContext from '../contexts/current-user-context';
import { NavLink, useNavigate } from 'react-router-dom';


const Room = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { roomid } = useParams();
  const roomId = roomid;
  const socket = useSocket();
  // const socket = io('http://localhost:3000')
  const myPeer = new Peer(undefined, {
    host: '0.peerjs.com',
    port: '443',
  });
  const videoGrid = useRef();
  const peers = useRef({});
  const [messages, setMessages] = useState([]);
  const [muted, setMuted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const myVideo = useRef({});
  const myStream = useRef();

  useEffect(() => {
    if (currentUser) {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then((stream) => {
          myVideo.current = document.createElement('video');
          myVideo.current.muted = true;
          myStream.current = stream;
          addVideoStream(myVideo.current, stream, currentUser.username);

          myPeer.on('call', (call) => {
            call.answer(stream);
            const video = document.createElement('video');
            call.on('stream', (userVideoStream) => {
              addVideoStream(video, userVideoStream, currentUser.username);
            });
          });

          socket.on('user-connected', (userId, username) => {
            setTimeout(() => connectToNewUser(userId, stream, username), 1000);
          });
        });

      socket.on('createMessage', (message, username) => {
        console.log('created a msg');
        let messageobj = { username, message };
        setMessages((prevList) => [...prevList, messageobj]);
      });

      socket.on('user-disconnected', (userId) => {
        if (peers.current[userId]) peers.current[userId].close();
        removeEmptyVideoContainers();
      });
      myPeer.on('open', (id) => {
        socket.emit('join-room', roomId, id, currentUser.username);
      });
    }
  }, [currentUser]);

  function connectToNewUser(userId, stream, username) {
    const call = myPeer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', (userVideoStream) => {
      addVideoStream(video, userVideoStream, username);
    });
    call.on('close', () => {
      video.parentNode.remove();
    });

    peers.current[userId] = call;
  }

  function addVideoStream(video, stream, username) {
    video.srcObject = stream;
    video.setAttribute('data-username', username);
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    const grid = videoGrid.current;
    if (grid) {
      const container = document.createElement('div');
      container.classList.add('video-container');

      const usernameText = document.createElement('span');
      usernameText.innerText = username;
      usernameText.classList.add('username-text');

      const h1 = document.createElement('h1');
      h1.innerText = username; // Or any desired content

      container.appendChild(video);
      container.appendChild(usernameText);
      container.appendChild(h1);

      grid.appendChild(container);
    }
    removeEmptyVideoContainers();
  }

  const handleChatSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    if (form.chat_message.value.length > 0) {
      socket.emit('message', form.chat_message.value, currentUser.username);
      event.target.reset();
    }
  };

  const toggleMute = () => {
    const bool = myStream.current.getAudioTracks()[0].enabled;
    setMuted(!muted);
    if (bool) {
      myStream.current.getAudioTracks()[0].enabled = false;
    } else {
      myStream.current.getAudioTracks()[0].enabled = true;
    }
  };

  const toggleVideo = () => {
    console.log(socket);
    const bool = myStream.current.getVideoTracks()[0].enabled;
    setHidden(!hidden);
    if (bool) {
      myStream.current.getVideoTracks()[0].enabled = false;
    } else {
      myStream.current.getVideoTracks()[0].enabled = true;
    }
  };
  function removeEmptyVideoContainers() {
    const grid = videoGrid.current;
    if (grid) {
      const videoContainers = grid.querySelectorAll('.video-container');
      videoContainers.forEach((container) => {
        if (!container.querySelector('video')) {
          container.remove();
        }
      });
    }
  }
  const navigate = useNavigate();

  const handleLeave = () => {
    navigate('/community')
  }

  return (
    <>
      <div className="main">
        <div className="main-left">
          <div className="main-videos px-5 pt-5">
            <div className='grid grid-cols-2' id="video-grid" ref={videoGrid}></div>
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
                <span onClick={handleLeave} className="leave-meeting flex w-full justify-center rounded-md bg-red-600 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Leave</span>
              </div>
            </div>
          </div>
        </div>
        <div className="main-right">
          <div className="header font-bold mb-5 mt-2">
            <h6>Chat</h6>
          </div>
          <div className="chat-window">
            <ul className="messages">
              {messages.map((msgObj, index) => (
                <li className="message-div" key={index}>
                  <div>
                    <span className="chat-username">{msgObj.username}</span>
                    <span className="chat-message">{msgObj.message}</span>
                    <span className="chat-time">
                      {new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                </li>
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
              <button
              className="send flex w-full mt-12 justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              style={{
                borderRadius: '5px',
                background: '#EA580C',
                // boxShadow: '-5px 5px 10px rgba(253, 186, 116, 0.5), 5px -5px 10px rgba(234, 88, 12, 0.5)',
                transition: 'boxShadow 0.3s ease-in-out'
              }}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
