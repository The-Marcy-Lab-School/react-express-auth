import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
import UserLink from "../components/UserLink";
import ExercisePlaceHolder from "../components/ExercisePlaceHolder";
import FormExercisePlace from "../components/FormExercisePlace";
// DELETE AFTER MARVIN MERGE
export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return <>
    <h1>Users</h1>
     {/* DELETE AFTER MARVIN MERGE */}
     <FormExercisePlace/>
     <ExercisePlaceHolder/>
    <ul>
      {
        users.map((user) => <li key={user.id}><UserLink user={user} /></li>)
      }
    </ul>
  </>;
}
