import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function JoinSusu() {
    const getFetchOptions = (body, method = 'POST') => ({
        method,
        credentials: 'include', // IMPORTANT, this tells fetch to include cookies
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    // const [userInput, setUserInput] = useState('');
    const{id} = useParams()
    const navigate = useNavigate();
    const joiningSusu = async (e) => {
        e.preventDefault();
        // const options = getFetchOptions('GET');
        const user = await fetch(`/api/me`)
        const userdata = await user.json();
        // console.log(data)
        const handleFetch = async () => {
            try {
                const r = await fetch(`/api/susu/${e.target[1].value}`);
                const data = await r.json();
                // console.log(data)
                // console.log(e.target[0].value)
                // console.log(data.password_hash)
                let user_id = userdata.id
                let susu_id = e.target[1].value
                let make_payments = false
                let cardoptions = getFetchOptions({user_id, susu_id, make_payments})
                console.log(cardoptions)
                if (e.target[0].value === data.password_hash) {
                    const addcard = await fetch('/api/susuform', cardoptions)
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