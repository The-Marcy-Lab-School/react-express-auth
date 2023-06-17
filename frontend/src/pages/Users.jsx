import { useEffect, useState } from "react";
import { getAllUsers } from "../adapters/user-adapter";
// import UserLink from "../components/UserLink";
import { Link } from 'react-router-dom';

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(setUsers);
  }, []);

  return (
    <>
      <h1>Welcome Page</h1>
      <ul>
        <p>This is the page the user sees when they open our page</p>
        <p className="box">At CareCompanion, our mission is to empower People of Color in the healthcare system by providing an application that allows patients to rate and review their healthcare experiences with physicians, primary care providers, hospitals, and doctor's offices. CareCompanion aims to promote equity, accountability, and transparency by amplifying the voices of people in marginalized communities.</p>

        <p> About the site</p>
        <p className="box">Do you want to submit a review on a medical professional (doctor, nurse, pa) or a whole facility management? Want to find previous reviews on certain medical professionals and facilities too? To get started, click on to <Link to="/sign-up"> sign-up/sign-in!</Link></p>

        <h1>Stats and Stories</h1>
        <p className="box">
          Stats1
          stats2
          Stories1
          Stories2
        </p>

        {users.map((user) => (
          <li key={user.id}>
            <UserLink user={user} />
          </li>
        ))}
      </ul>
    </>
  );
}
