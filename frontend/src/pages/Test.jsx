import React, { useEffect, useState } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from the API and set it in the state
    fetch('api/q')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data)})
      .catch(error => console.error(error));
  }, []);
console.log("data users" + users)
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Name: {user.name}, Email: {user.email} {/* Replace with your actual properties */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
