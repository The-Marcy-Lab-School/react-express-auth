import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CurrentUserContext from "../contexts/current-user-context";
import { getUser } from "../adapters/user-adapter";
import { logUserOut } from "../adapters/auth-adapter";
import UpdateUsernameForm from "../components/UpdateUsernameForm";
import { createTask } from  '../adapters/task-adapter'
export default function UserPage() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);
  const [userProfile, setUserProfile] = useState(null);
  const [errorText, setErrorText] = useState(null);
  const [task, setTask] = useState({
    taskname: '',
    description:''
    

  })
  
  
  const { id } = useParams();
  const isCurrentUserProfile = currentUser && currentUser.id === Number(id);

  useEffect(() => {
    const loadUser = async () => {
      const [user, error] = await getUser(id);
      if (error) return setErrorText(error.message);
      setUserProfile(user);
    };
                          
    loadUser();
  }, [id]);

  const handleLogout = async () => {
    logUserOut();
    setCurrentUser(null);
    navigate('/');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTask(prevtask => ({
      ...prevtask,
      [name]: value
    }));
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    let form = new FormData(event.target)
    console.log(form)

    setTask({ taskname: '', description: '' });
    for (const [task, description] of form) {
      
        console.log(task,description)
    }
    
  };

  /*const handleSubmit = async (event) => {
    event.preventDefault();
    if (!task.taskname || !task.description) {
      return setErrorText('Missing task name or description');
  }
    try {
        // Assuming createTask function takes an object with task details
        const newTask = await createTask({
            taskname: task.taskname,
            description: task.description,
            userId: currentUser.id // Add the userId if your task is related to the user
        });
   console.log(newTask)
        // Handle the response here. For example, you can clear the form.
        setTask({ taskname: '', description: '' });

        // Optionally, you can add the newly created task to a state array to display it
        // setCreatedTasks([...createdTasks, newTask]);

    } catch (error) {
        setErrorText(error.message || 'Failed to create task');
    }
};*/

  


  if (!userProfile && !errorText) return null;
  if (errorText) return <p>{errorText}</p>;

  // What parts of state would change if we altered our currentUser context?
  // Ideally, this would update if we mutated it
  // But we also have to consider that we may NOT be on the current users page
  const profileUsername = isCurrentUserProfile ? currentUser.username : userProfile.username;

  return <>
    <h1>{profileUsername}</h1>
    { !!isCurrentUserProfile && <button onClick={handleLogout}>Log Out</button>}
     <button> Delete Account</button>
    <p>If the user had any data, here it would be</p>
    <p>Fake Bios or something</p>
    {
      !!isCurrentUserProfile
        && <UpdateUsernameForm currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    }


<form onSubmit={handleSubmit} aria-labelledby="task-form">
      <h2 id='task-form'>Add a task!</h2>
      <label htmlFor="task">task</label>
      <input value={task.taskname} onChange={handleChange} type="text" autoComplete="task" id="task" name="taskname" />

      <label htmlFor="description">description</label>
      <input value={task.description} onChange={handleChange} type="text" autoComplete="current-password" id="description" name="description" />

      <button>Add Task!</button>
    </form>

    <section>

    </section>
  </>;
}
