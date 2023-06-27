import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getPostOptions } from "../utils";
import CurrentUserContext from "../contexts/current-user-context";
import { Dialog, DialogContent, DialogTitle, Typography, Button, Paper, styled } from "@mui/material";
// import { styled } from "@mui/material/styles";

export default function InviteForm({susuData}) {
    // const [userInput, setUserInput] = useState('');
    const {userdata} = useContext(CurrentUserContext);
    const{id} = useParams()
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    
    const successfulInvite = () => {
        return (
            <Dialog open={true} maxWidth="md" onClose={() => setOpen(false)}>
                <DialogTitle>
                    <Typography variant="h4">Success</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="h6">Your invitation has been sent</Typography>
                </DialogContent>
            </Dialog>
        )
    }
    const sendInvite = async (e) => {
        e.preventDefault();
        const handleFetch = async () => {
            try {
                const userData = await fetch(`/api/user/${e.target[0].value}`);
                let userRes = await userData.json();
                const postOption = getPostOptions({receiver_id:userRes.id, susu_id: susuData[0].susu_id});
                console.log(postOption, userRes,  1)
                const invite = await fetch(`/api/invites`, postOption);
                setOpen(true);
                console.log('successful');
            } catch (err) {
                console.error(err);
                return null;
            }
        };

        handleFetch();
    }
    
    return (
    <>
        <form onSubmit={sendInvite}>
            Invite: <input name="username" defaultValue="Enter Username"  />
            {/* <input name="susuID" defaultValue="Enter Susu ID"  /> */}
            <button type="submit">Invite</button>
        </form>
        {open ? successfulInvite() : null}
    </>);
}