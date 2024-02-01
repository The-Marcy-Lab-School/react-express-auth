import { useNavigate } from "react-router-dom";
import { updateUsername, updateProfilePic } from "../adapters/user-adapter";
import { useState } from "react";

export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  const [newProfilePic, setNewProfilePic] = useState(currentUser.profilePic)

  const upload = async (file) => {
    try {
      console.log(file)
      const formData = new FormData()
      formData.append("file", file)
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
    
      const jsonResponse = await res.json();
      console.log(jsonResponse)
      return jsonResponse

    }catch (err) {
      console.log(err)
    }
  }
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
    const [user, error] = await updateUsername(Object.fromEntries(formData));
    // If our user isn't who they say they are
    // (an auth error on update) log them out
    // We added the httpStatus as a custom cause in our error
    if (error?.cause > 400 && error?.cause < 500) {
      // setCurrentUser(null);
      // return navigate('/');
    }

    setCurrentUser(user);
    event.target.reset();
  };
  const handlePicSubmit = async (event) => {
    event.preventDefault();
    let prevPic = currentUser.profile_pic
    if(prevPic){
      deletePrevPic(prevPic)
    }
    console.log("clicked")
    console.log(currentUser)
    if(newProfilePic !== null){
      const imgUrl =  await upload(newProfilePic)
      console.log(imgUrl)
      const user = await updateProfilePic({id : currentUser.id, profile_pic : imgUrl})
      // If our user isn't who they say they are
      // (an auth error on update) log them out
      // We added the httpStatus as a custom cause in our error

  
      setCurrentUser(user[0]);
      console.log(user[0])
      event.target.reset();
      // console.log("yeah")
    } 
  };

  return( <><form onSubmit={handleASubmit} aria-labelledby="update-heading">
  <h2 id="update-heading">Update Username</h2>
  <label htmlFor='username'>New Username</label>
  <input type='text' id='username' name='username'/>
  <input type="hidden" name="id" value={currentUser.id} />

  <button>Update Username</button>
</form>

<form onSubmit={handlePicSubmit}>
<input type="file" id='profilePic' name='profilePic' onChange={e=> setNewProfilePic(e.target.files[0])}></input>
  <input type="hidden" name="id" value={currentUser.id} />
  <button>Update profile Picture</button>
  </form></> 
  )
}
