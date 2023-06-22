import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";
import { getPostOptions, fetchHandler, deleteOptions } from "../utils";
import FriendsCard from "../components/UserCard";
import UserFriendsCard from "../components/UserFriendsCard";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  useEffect(() => {
    async function getData() {
      const urlFetch = await fetch("/api/friends");
      const res = await urlFetch.json();
      setFriends(res);
    }
    getData();
  }, []);

  const findUserIdByName = (username) => {
    const user = users.find((user) => user.username === username);
    if (!user) return "users not found";
    return user.id;
  };

  console.log(findUserIdByName("ayaz"));

  const handleAddFriend = async (username) => {
    const friendId = findUserIdByName(username);
    const [data, error] = await fetchHandler(
      `/api/friends`,
      getPostOptions({ friendId })
    );
    if (error) return console.log(error);
    console.log(data);
  };

  const handleRemoveFriend = async (username) => {
    const friendId = findUserIdByName(username);
    console.log(friendId);

    const [data, error] = await fetchHandler(`/api/friends`, {
      method: "DELETE",
      body: JSON.stringify({ friendId: friendId }),
      credentials: "include",
    });
    if (error) return console.log(error);
    console.log(data);
  };

  return (
    <>
      <div className="friendsBoxes">
        <h1>Friends</h1>
        <div>
          {friends.map((friend) => {
            return (
              <UserFriendsCard
                key={friend.id}
                friend={friend.username}
                onClick={() => handleRemoveFriend(friend.username)}
              />
            );
          })}
        </div>
      </div>
      <div className="userBoxes">
        <h1>Users</h1>
        <div>
          {users.map((user) => {
            return (
              <FriendsCard
                key={user.id}
                user={user.username}
                onClick={() => handleAddFriend(user.username)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
