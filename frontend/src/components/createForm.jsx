import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";


// export default function CreateSusu() {
    //     const getFetchOptions = (body, method = 'POST') => ({
        
    export default function CreateSusu() {
            const { currentUser } = useContext(CurrentUserContext);
        const [id, setID] = useState('');
        const navigate = useNavigate();
        const getFetchOptions = (body, method = 'POST') => ({
        method,
        credentials: 'include', // IMPORTANT, this tells fetch to include cookies
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const susuCreate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formInfo = Object.fromEntries(formData.entries());
        formInfo.owner = currentUser.id;
        console.log(formInfo);
        // const user = await fetch(`/api/me`)
        // // console.log(formInfo);
        // const data = await user.json();
        // setID(data.id);
        // const form = e.target;
        // const formData = new FormData(form);
        // const formInfo = Object.fromEntries(formData.entries());
        // // console.log(formInfo);
        const options = getFetchOptions(formInfo, 'POST');
        const result = await fetch(`/api/susu`, options);
        // console.log(result);
        // console.log(options);
        const r = await result.json()
        // user_id, susu_id, make_payments
        let susu_id = r.id
        let user_id = currentUser.id
        let make_payments = false
        let cardoptions = getFetchOptions({user_id, susu_id, make_payments })
        console.log(cardoptions)
        const addcard = await fetch('/api/susuform', cardoptions)
        navigate(`/susu/${susu_id}`);
    }
    return( <>
    <form method="post" onSubmit={susuCreate}>
        Creat Susu:
        <label>
        Susu Name: <input name="name" defaultValue="Enter Susu Name" />
        Susu Password: <input name="password_hash" defaultValue="Enter Susu Password" />
        {/* <input type="hidden" name="owner" value={currentUser.id}/> */}
        </label>
        <hr />
        Fixed Amount: <label><input name ="payment_amount" defaultValue="1000"/></label>
        <hr />

        <label>Every Week <input type="radio" name="next_payment" value="7" /></label>
        <label> Every Month <input type="radio" name="next_payment" value="30" defaultChecked={true} /></label>
        <label>Every Three Months <input type="radio" name="next_payment" value="180" /></label>

        <button type="submit">Submit form</button>
        </form>
    </>)
}