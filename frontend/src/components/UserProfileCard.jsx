import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { logUserOut } from "../adapters/auth-adapter";

const UserProfileCard = ({ username, bio, profileimage }) => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);


  const handleLogout = async () => {
    logUserOut(); // Call the 'logUserOut' function from the auth adapter
    setCurrentUser(null); // Set the current user to null
    navigate('/'); // Navigate to the home page
  };

  return (
    <div className="flex flex-row justify-center items-center w-full">
      <div className="flex flex-col justify-around mb-[4rem]">
        <img src={profileimage} alt="User Profile" className="rounded-full mb-[5rem] h-[15rem] w-[15rem]" />
        {!!isCurrentUserProfile && <button onClick={handleLogout} className="w-[5rem] h-[2rem] bg-[#989A99] ml-[15rem] rounded-lg mt-[3rem] z-0">Log Out</button>}
        <div className="flex flex-col items-center pt-[2rem] bottom-0 border-t-2 mr-[8rem] border-black z-1">
          <p>If the user had any data, it would be here</p>
          <p>Miscellaneous information or something</p>
        </div>
      </div>

      <div className="h-full flex flex-col space-x-[8rem] mt-[2rem]">
        <h1 className="text-3xl">{username}</h1>
        <h2 className="text-xl mt-[20%]">{bio}</h2>
        <div className="bg-[#989A99] flex flex-col mb-[10rem] z-0 right-0 bottom-0 items-center justify-center">
          <p>If the user had any data, here it would be</p>
          <p>Fake Bio or something ahhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
