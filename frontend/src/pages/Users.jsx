import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadUsers = async () => {
      const [data, error] = await getAllUsers();
      if (error) setError(error);
      else if (data) setUsers(data);
    }
    loadUsers();
  }, []);

  if (error) return <p>Sorry, there was a problem loading users. Please try again later.</p>;

  return <>
    <h1>Users</h1>
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
