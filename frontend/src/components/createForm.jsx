import { useState, useContext } from "react";
import CurrentUserContext from "../contexts/current-user-context";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../CreateForm.css";


export default function CreateSusu() {
  const { currentUser } = useContext(CurrentUserContext);
  const [id, setID] = useState("");
  const navigate = useNavigate();
  const getFetchOptions = (body, method = "POST") => ({
    method,
    credentials: "include", // IMPORTANT, this tells fetch to include cookies
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const susuCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formInfo = Object.fromEntries(formData.entries());
    formInfo.owner = currentUser.id;
    console.log(formInfo);
    const options = getFetchOptions(formInfo, "POST");
    const result = await fetch(`/api/susu`, options);
    const r = await result.json();
    let susu_id = r.id;
    let user_id = currentUser.id;
    let make_payments = false;
    let cardoptions = getFetchOptions({ user_id, susu_id, make_payments });
    console.log(cardoptions);
    const addcard = await fetch("/api/susuform", cardoptions);
    navigate(`/susu/${susu_id}`);
  };

  return (
    <>
      <Form onSubmit={susuCreate} id="formcontainer">
        <h2>Create Your Own Susu!</h2>
        <Form.Group className="mb-3" id="form-name">
          <Form.Label>Enter Susu Name:</Form.Label>
          <Form.Control name="name" placeholder="Susu Name" />
        </Form.Group>

        <Form.Group className="mb-3" id="form-password">
          <Form.Label>Enter Susu Password:</Form.Label>
          <Form.Control name="password_hash" placeholder="Password" />
        </Form.Group>

        <Form.Label>Enter Susu Amount:</Form.Label>
        <InputGroup id="form-amount">
          <InputGroup.Text className="mb-3">$</InputGroup.Text>
          <Form.Control name="payment_amount" placeholder="1000" />
        </InputGroup>

        <Form.Check
          className="input"
          type="radio"
          name="next_payment"
          value="7"
          label="Every Week"
        ></Form.Check>
        <Form.Check
          className="input"
          type="radio"
          name="next_payment"
          value="30"
          label="Every Month"
        ></Form.Check>
        <Form.Check
          className="input"
          type="radio"
          name="next_payment"
          value="90"
          label="Every Three Months"
          defaultChecked = {true}
        ></Form.Check>

        <button className="form_button" type="submit">Submit</button>
      </Form>
    </>
  );
}

       
