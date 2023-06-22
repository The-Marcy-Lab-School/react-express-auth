import { Link } from "react-router-dom";

export default function UserLink({ user, username }) {
  return (
    <Link name={username} to={`/users/${user.id}`}>
      {user.username}
    </Link>
  );
}
