import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import GroceryList from "../components/GroceryCard";
import { fetchHandler } from "../utils";

export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  const [ lists , setList ] = useState([]);

  const loadUser = async () => {
    const [user, error] = await getUser(id);
    if (error) return setErrorText(error.statusText);
    setUserProfile(user);
  };

  const doFetch = async () => {
    try{
      const res = await fetchHandler(`/api/grocerylist/${id}`,{
        method: "GET",
        headers: {
          "Content-Type" : "application/json",
        },
      });
      console.log(res[0]);
      setList(res[0]);
    }catch(err){
      console.log(err)
      return null;
    }
  };
  
  useEffect(() => {
    const loadInfoUser = async () => {
      try{
        await loadUser();
        await doFetch();
      }catch(err){
        console.log(err);
        return null;
      }
    }
    loadInfoUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  console.log(lists)

  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button> }
    <p>If the user had any data, here it would be</p>
    <p>Fake Bio or something</p>
    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }

    <div className="ui centered cards">
      {lists.map(groceryList => {
        return <GroceryList key={groceryList.grocerylist} grocery={groceryList}/>
      })}
    </div>
  </>;
}
