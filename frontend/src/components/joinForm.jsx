import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JoinSusu() {
    // const [userInput, setUserInput] = useState('');
    const{id} = useParams()
    const navigate = useNavigate();
    const joiningSusu = async (e) => {
        e.preventDefault();
        // const options = getFetchOptions('GET');

        const handleFetch = async () => {
            try {
                const r = await fetch(`/api/susu/${e.target[1].value}`);
                const data = await r.json();
                console.log(data)
                console.log(e.target[0].value)
                console.log(data.password_hash)
                if (e.target[0].value === data.password_hash) {
                    navigate(`/susu/${e.target[1].value}`);
                }
            } catch (err) {
                console.error(err);
                return null;
            }
        };

        handleFetch();
    }
    
    return (<> 
    <form onSubmit={joiningSusu}>
        Join Susu: <input name="susuPassword" defaultValue="Enter Susu Password"  />
        <input name="susuID" defaultValue="Enter Susu ID"  />
        <button type="submit">Submit</button>
        </form>
        </>
        )
}