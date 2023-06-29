import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { loadSusuDetails } from "../adapters/susu-adapter";
import { logUserIn, checkForLoggedInUser } from "../adapters/auth-adapter";
import SusuMembers from "./Members";
import InviteForm from "./InviteForm";
import PaymentChart from "./PaymentChart";
import CurrentUserContext from "../contexts/current-user-context";
import "../styles/PaymentDetails.css";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  FormControl,
  TextField,
  InputLabel,
  Input,
  FormHelperText,
} from "@mui/material";

export default function detailsLink() {
  const { id } = useParams();
  const [errorText, setErrorText] = useState(null);
  const [data, setData] = useState([]);
  // const { currentUser } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [unAuthDialog, setUnAuthDialog] = useState(false);
  const [ deleteUser, setDeleteUser ] = useState('');
  const [ deletePassword, setDeletePassword ] = useState('');
  const [ payments, setPayments ] = useState({});

  useEffect(() => {
    const loadLoggedInUser = async () => {
      try {
        const loggedInUser = await checkForLoggedInUser();
        console.log(loggedInUser);
        setCurrentUser(loggedInUser);
      } catch (error) {
        console.error(error);
      }
    };
    loadLoggedInUser();
  }, [data]);

  useEffect(() => {
    const loadDetails = async () => {
      const [details, error] = await loadSusuDetails(id);
      if (error) return setErrorText(true);
      setData(details);
    };
    loadDetails();
  },[payments])
  console.log(data, data[0]);

  const deleteAuth = () => {
    return (
      <Dialog open={open} maxWidth="md" onClose={() => setOpen(false)}>
        <DialogTitle>
          <Typography variant="h6">Login to continue</Typography>
        </DialogTitle>
        <DialogContent sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}>
          <FormControl>
            <TextField
              id="username"
              autoComplete="username"
              label="Username"
              variant="outlined"
              value={deleteUser}
              onChange={(event) => {
                setDeleteUser(event.target.value);
              }}
            />
            <TextField
              type="password"
              id="password"
              autoComplete="password"
              label="Password"
              variant="outlined"
              value={deletePassword}
              onChange={(event) => {
                setDeletePassword(event.target.value);
              }}
            />
            <FormHelperText id="my-helper-text">
              You can't undo this operation
            </FormHelperText>
            <Button variant="contained" color="error" onClick={handleDelete}>
              Delete
            </Button>
          </FormControl>
        </DialogContent>
      </Dialog>
    );
  };

  const deleteUnAuth = () => {
    return (
      <Dialog
        open={unAuthDialog}
        maxWidth="md"
        onClose={() => setUnAuthDialog(false)}
      >
        <DialogTitle>
          <Typography variant="h4">Unauthorized</Typography>
        </DialogTitle>
        <DialogContent>
          <Typography variant="h6">
            Your username and/or password is incorrect
          </Typography>
        </DialogContent>
      </Dialog>
    );
  };

  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      const [user, error] = await logUserIn({
        username: deleteUser,
        password: deletePassword,
      });
      if (error) return setErrorText(error.statusText);
      console.log(user);
      if (user.id === currentUser.id && user.id === data[0].owner) {
        await fetch(`/api/susu/${Number(data[0].susu_id)}`, {
          method: "DELETE",
          credentials: "include",
        });
        navigate("/susu");
      } else {
        setUnAuthDialog(true);
      }
    } catch {
      console.error(error);
    }
  };

  return (
    <>
      <h1 id="page_title">{data.length > 0 ? data[0].name : ""}</h1>
      <h3 id="this_susu_id">Susu ID:{data.length > 0 ? data[0].susu_id : ""}</h3>
      <div id="members_and_chart">
        <div id="member_section">
          <h2 id="member_title">Members</h2>
          <ul id="member-list">
            {data.map((user) => (
              <div key={user.user_id}>
<SusuMembers payments={payments} setPayments={setPayments} user={user} owner={currentUser.id!==user.owner ? true : false}/>
              </div>
            ))}
          </ul>
        </div>
        {
          <div style={{ width: "30%", "margin-left": "10em" }}>
            <PaymentChart data={data} />
          </div>
        }
        <div id="payment_info">
          <div id="payment_section">
            <h1 id="payment_title">Payment</h1>
            <h2 id="amount">
              {data.length > 0 ? data[0].payment_amount : ""}
            </h2>
          </div>
          <div id="payment_time">
            <h1 id="payment_details_title">Payment Interval</h1>
            <h2>
              Every {data.length > 0 ? data[0].next_payment : ""}{" "}
              Days
            </h2>
          </div>
        </div>
      </div>
      {data.length > 0 && currentUser && currentUser.id === data[0].owner ? (
        <>
          {" "}
          <InviteForm susuData={data} />{" "}
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpen(true)}
          >
            Delete Susu
          </Button>{" "}
        </>
      ) : (
        <Button variant="contained" color="error" disabled>
          Delete Susu
        </Button>
      )}
      {open ? deleteAuth() : null}
      {unAuthDialog ? deleteUnAuth() : null}
    </>
  );
}
