import { useContext, useState } from 'react';
import { fetchHandler } from '../utils';
import CurrentUserContext from '../contexts/current-user-context';

export default function CreateGroceryForm() {
    const [ inputValue, setInputValue ] = useState("");
    const { currentUser } = useContext(CurrentUserContext);

    const handleCreate = async(e) => {
        e.preventDefault();
        try{
            const res = await fetchHandler(`/api/grocerylist/${currentUser.id}`,{
                method: "POST",
                headers:{
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({list_name:inputValue}),
            });
        }catch(err){
            console.log(err);
            return null;
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }
    console.log(inputValue)

  return <form onSubmit={handleCreate}>
    <label htmlFor="listName">Name Your New Grocery List</label>
    <input type = "text" id="listName" name="listName" value={inputValue} onChange={handleChange}/>

    <button>Create</button>
  </form>
}
