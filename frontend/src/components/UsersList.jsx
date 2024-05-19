import UserLink from "../components/UserLink";

export default function UsersList({ users }) {
  return <>
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
