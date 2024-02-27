import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { updateUsername, updateProfilePic } from '../adapters/user-adapter';

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState(currentUser.username);
  const [newProfilePic, setNewProfilePic] = useState(currentUser.profilePic);

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
      <div className="info w-56">
        <form
          className="flex flex-col w-56 space-y-2"
          onSubmit={handleASubmit}
          aria-labelledby="update-heading"
        >
          <h2 className="mb-2 text-2xl" id="update-heading">
            Update Username
          </h2>
          <label htmlFor="username">New Username</label>
          <input
            className="h-12 border-2 border-black"
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

          <button className="mt-5" style={buttonStyles}>
            Update Username
          </button>
        </form>

        <form
          onSubmit={handlePicSubmit}
          className="flex flex-col w-56 space-y-2"
        >
          <h1 className="mt-8 mb-2 text-2xl w-80"> Update Profile Picture </h1>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            className="hidden"
            onChange={(e) => setNewProfilePic(e.target.files[0])}
          />
          <label
            htmlFor="profilePic"
            className="inline-block cursor-pointer bg-blue-200 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out"
          >
            <p className="w-80"> Choose Profile Picture </p>
          </label>

          <button style={buttonStyles}>Update profile Picture</button>
        </form>
      </div>
    </>
  );
}
