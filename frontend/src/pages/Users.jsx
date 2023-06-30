import { useEffect, useState, useContext } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";
import { getPostOptions, fetchHandler, deleteOptions } from "../utils";
import FriendsCard from "../components/UserCard";
import UserFriendsCard from "../components/UserFriendsCard";
import UserItem from "../components/UserItem";
import AllUsersContext from '../contexts/all-users-context'

export default function UsersPage() {
  // const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);

  const { users, setUsers } = useContext(AllUsersContext);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  useEffect(() => {
    async function getData() {
      const urlFetch = await fetch("/api/friends");
      const res = await urlFetch.json();
      console.log(res, "RES")
      setFriends(res);
    }
    getData();
  }, []);


  const findUserIdByName = (username) => {
    const user = users.find((user) => user.username === username);
    if (!user) return "users not found";
    return user.id;
  };

  // console.log(findUserIdByName("ayaz"));

  const handlePing = async(username) => {
    // const friendId = findUserIdByName(username);
    // const [data, error] = await fetchHandler(`/api/pings`, 
    //   getPostOptions({ friendID })
    // );
    // if (error) {
    // console.log(error);
    // } else {
    // console.log(`Ping!`);
    // }

    // try {
    //   await knex('pings').insert({
    //     senderId: loggedInUserId,
    //     receiverId: receiverId,
    //   });
    //   console.log(`${loggedInUser} asked if you're safe`);
    //   } catch (error) {
    //     console.log(error);
    //   }

    const friendId = findUserIdByName(username);

    try {
      await fetchHandler('/api/pings', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ receiverId: friendId }),
      });
      console.log(`${username} asked if you're safe`);
    } catch (error) {
      console.log(error);
    }
  };

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
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ friendId }),
    });
    if (error) return console.log(error);
    console.log(data);
  };

  return (
    <>
      <div className="users-container">
        <div className="friends-list">
          <h1 className="list-title">Friends</h1>
          <div>
            {friends.map((friend) => {
              console.log(friend.isSafe, 'SAFE!')
              return (
                <UserFriendsCard
                  key={friend.id}
                  friend={friend.username}
                  status={friend.isSafe}
                  onPing={() => handlePing(friend.username)}
                  onClick={() => handleRemoveFriend(friend.username)}
                />
              );
              // <UserItem
              //   key={friend.id}
              //   user={friend.username}
              //   onPing={handlePing}
              //   onRemoveFriend={handleRemoveFriend}
              // />
            })}
          </div>
        </div>
        <div className="users-list">
          <h1 className="list-title">Users</h1>
          <div>
            {users.map((user) => {
              return (
                <FriendsCard
                  key={user.id}
                  user={user.username}
                  status={user.isSafe}
                  onPing={() => handlePing(user.username)}
                  onClick={() => handleAddFriend(user.username)}
                />
              );
              // <UserItem
              //   key={user.id}
              //   user={user.username}
              //   onPing={handlePing}
              //   onAddFriend={handleAddFriend}
              // />
            })}
          </div>
        </div>
      </div>
    </>
  );
}
