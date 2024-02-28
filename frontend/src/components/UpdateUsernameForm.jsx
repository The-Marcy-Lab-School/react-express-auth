import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { updateUsername, updateProfilePic } from '../adapters/user-adapter';

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(currentUser.username);
  const [newProfilePic, setNewProfilePic] = useState(currentUser.profilePic);

  const modalBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const modal = document.querySelector('.modal');
    const modalWrap = document.querySelector('.modal-wrap');

    const openModal = () => {
      modal.style.opacity = 1;
      modal.style.pointerEvents = 'auto';
      modalWrap.style.opacity = 1;
      modalWrap.style.transform = 'scale(1)';
    }

    const closeModal = () => {
      modal.style.opacity = 0;
      modal.style.pointerEvents = 'none';
      modalWrap.style.opacity = 0;
      modalWrap.style.transform = 'scale(0.6)';
    }

    const modalBtn = modalBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (modalBtn) {
      modalBtn.addEventListener('click', openModal);
    }
    

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    return () => {
      if (modalBtn) {
        modalBtn.removeEventListener('click', openModal);
      }

      if (closeBtn) {
        closeBtn.removeEventListener('click', closeModal);
      }
    };
  }, []); 


  const upload = async (file) => {
    try {
      console.log(file);
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const jsonResponse = await res.json();
      console.log(jsonResponse);
      return jsonResponse;
    } catch (err) {
      console.log(err);
    }
  };

  const deletePrevPic = async (prevPic) => {
    if (prevPic) {
      try {
        const response = await fetch(`/api/delete/${prevPic}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          console.log(`File ${prevPic} deleted successfully.`);
        } else {
          console.error(`Failed to delete file ${prevPic}.`);
        }
      } catch (error) {
        console.error('Error deleting file:', error);
      }
    }
  };
  const handleASubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const user = await updateUsername(Object.fromEntries(formData));

    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    // if (user?.cause > 400 && user?.cause < 500) {
    //   setCurrentUser(null);

    // }

    setCurrentUser(user);
    event.target.reset();
    return window.location.reload();
  };

  const handlePicSubmit = async (event) => {
    event.preventDefault();
    const prevPic = currentUser.profile_pic;
    if (prevPic) {
      deletePrevPic(prevPic);
    }

    if (newProfilePic !== null) {
      const imgUrl = await upload(newProfilePic);

      const user = await updateProfilePic({
        id: currentUser.id,
        profile_pic: imgUrl,
      });
      // If our user isn't who they say they are
      // (an auth error on update) log them out
      // We added the httpStatus as a custom cause in our error

      setCurrentUser(user[0]);
      event.target.reset();
    }
  };

  const buttonStyles = {
    borderRadius: '5px',
    background: '#3B82F6',
    boxShadow: '-10px 10px 20px #bebebe, 10px -10px 20px #ffffff',
    width: '100%',
    height: '80%',
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    fontSize: '14px',
    transition: 'background 1ms ease-in',
  };

  return (
    <>
     <div class="modal" style={{zIndex: '99999999999'}}>    
            <div class="modal-wrap" > 
              <button  className=" px-3 h-8 bg-blue-300 ml-2 rounded-md mt-2 text-white" ref={closeBtnRef} id="close-btn"> X </button>
              <h1 className="text-xl font-bold text-center mb-10">Upload Profile Picture</h1>
                <label
                  htmlFor="profilePic"
                  className="inline-block cursor-pointer hover:bg-blue-200 text-white font-semibold py-2 px-4 transition duration-200 ease-in-out"
                >
                    <img
                      src='https://www.pngplay.com/wp-content/uploads/8/Upload-Icon-Logo-PNG-Photos.png'
                      alt="Profile"
                      className="inline-block cursor-pointer py-2 px-8 transition duration-200 ease-in-out"
                    />
                </label>

                <div className='w-full flex justify-center items-center'>
                  <button 
                    className="flex w-3/4 mt-12 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    style={{
                      borderRadius: '5px',
                      background: 'linear-gradient(225deg, #93C5FD, #2563EB)',
                      boxShadow: '-5px 5px 10px rgba(147, 197, 253, 0.5), 5px -5px 10px rgba(37, 99, 235, 0.5)',
                      transition: 'boxShadow 0.3s ease-in-out'
                    }}>Upload</button>
                </div>
              </div>
                
            </div>
      <div className="info w-56">
        <form
          className="flex flex-col w-56 space-y-2"
          onSubmit={handleASubmit}
          aria-labelledby="update-heading"
        >
          <h2 className="mb-2 text-2xl font-bold" id="update-heading">
            Update Username
          </h2>
          <label htmlFor="username">New Username</label>
          <input
            className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
            type="text"
            id="username"
            name="username"
          />
          <input
            className="h-18"
            type="hidden"
            name="id"
            value={currentUser.id}
          />

          <button className="flex w-full mt-2 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 mt-5" 
            style={{
              borderRadius: '5px',
              background: 'linear-gradient(225deg, #93C5FD, #2563EB)',
              boxShadow: '-5px 5px 10px rgba(147, 197, 253, 0.5), 5px -5px 10px rgba(37, 99, 235, 0.5)',
              transition: 'boxShadow 0.3s ease-in-out'
            }}
          >
            Update Username
          </button>
        </form>

        <form
          onSubmit={handlePicSubmit}
          className="flex flex-col w-56 space-y-2"
        >
          <h1 className="mt-8 mb-2 text-2xl w-80 font-bold"> Update Profile Picture </h1>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            className="hidden"
            onChange={(e) => setNewProfilePic(e.target.files[0])}
          />
        
        </form>

        <button
          ref={modalBtnRef} 
          id="modal-btn"
          className="flex w-full mt-2 justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          style={{
             borderRadius: '5px',
             background: 'linear-gradient(225deg, #93C5FD, #2563EB)',
             boxShadow: '-5px 5px 10px rgba(147, 197, 253, 0.5), 5px -5px 10px rgba(37, 99, 235, 0.5)',
             transition: 'boxShadow 0.3s ease-in-out'
          }}
        >
          Update profile picture
        </button>
      </div>
    </>
  );
}
