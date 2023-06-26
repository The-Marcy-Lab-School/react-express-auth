import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../Card.css";

export default function SusuCard({ susu }) {
  return (
    <>
      <Card className="card_container">
        <Card.Body className="card_body">
          <Card.Img
            variant="top"
            src="https://static.thenounproject.com/png/1707999-200.png"
            id="card-image"
          />
          <Card.Title className="card_title">{susu.name}</Card.Title>
          
          <Card.Subtitle className="mb-2 text-muted" id="subtitle">
             ID: {susu.id}
          </Card.Subtitle>
          <ListGroup variant="flush">
            <ListGroup.Item id="payment_amount">
              <span> ${susu.payment_amount}</span>
            </ListGroup.Item>
            <ListGroup.Item id="payment_made">Payment Made: {susu.make_payments}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer id="card_footer">
          <Link to={`/susu/${susu.susu_id}`}>
            <Button variant="primary" size="lg" id="form_button">
              Open Susu
            </Button>
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
}

// Alt Card thats kinda cool

// <>
// <div className="card">
//   <div className="card-content">
//     <div className="card-top">
//       <span className="card-title">01.</span>
//       <p>Susu Name.</p>
//     </div>
//     <div className="card-bottom">
//       <p>Hover Me?</p>
//       <svg width="32" viewBox="0 -960 960 960" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M226-160q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-414q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19ZM226-668q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Zm254 0q-28 0-47-19t-19-47q0-28 19-47t47-19q28 0 47 19t19 47q0 28-19 47t-47 19Z"></path></svg>
//     </div>
//   </div>
//   <div className="card-image">
//     <img width="48" viewBox="0 -960 960 960" height="48" src="https://www.svgrepo.com/show/20080/money.svg"/>
//   </div>
// </div>
//         </>
