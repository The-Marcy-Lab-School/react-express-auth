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

