import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UsersList from "../components/UsersList";

export default function DiscoverPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return <>
    <h1>Users</h1>
    <UsersList users={users} />
  </>;
}
