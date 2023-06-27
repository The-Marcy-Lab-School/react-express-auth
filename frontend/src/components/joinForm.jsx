import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import "../JoinForm.css";
export default function JoinSusu() {
  const getFetchOptions = (body, method = "POST") => ({
    method,
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const joiningSusu = async (e) => {
    e.preventDefault();
    const user = await fetch(`/api/me`);
    const userdata = await user.json();
    const handleFetch = async () => {
      try {
        const r = await fetch(`/api/susu/${e.target[1].value}`);
        const data = await r.json();
        console.log(data[0]);
        let user_id = userdata.id;
        let susu_id = e.target[1].value;
        let make_payments = false;
        let cardoptions = getFetchOptions({ user_id, susu_id, make_payments });
        console.log(cardoptions);
        if (e.target[0].value === data[0].password_hash) {
          const addcard = await fetch("/api/susuform", cardoptions);
          navigate(`/susu/${e.target[1].value}`);
        }
      } catch (err) {
        console.error(err);
        return null;
      }
    };
    handleFetch();
  };

  return (
    <>
      <Form onSubmit={joiningSusu} id="form_container">
        <h1>Join A Susu!</h1>
        <Form.Group className="mb-3" id='form-password'>
          <Form.Label>Enter Susu Password:</Form.Label>
          <Form.Control id ="form_input" name="susuPassword" placeholder="password" />
        </Form.Group>

        <Form.Group className="mb-3" id='form-ID'>
          <Form.Label>Enter Susu ID:</Form.Label>
          <Form.Control id ="form_input" name="susuID" placeholder="ID" />
        </Form.Group>

        <button className="form_button" type="submit">Submit</button>
      </Form>
    </>
  );
}

