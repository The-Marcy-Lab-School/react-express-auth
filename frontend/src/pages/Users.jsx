import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";
import PaymentDetails from "../components/payment-details";


export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return <>
    <h1>Payements:</h1>
    <PaymentDetails />
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
