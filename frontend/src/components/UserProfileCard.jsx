import React from "react";

const UserProfileCard = ({ username, bio, profileimage }) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>{bio}</h2>
      <img src={profileimage} alt="User Profile" />
    </div>
  );
};

export default UserProfileCard;
