import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function FriendsCard(props) {
  const { isSafe } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="card-name">{props.user}</Card.Title>
        <Card.Subtitle className="card-status">Safe status: {props.status}</Card.Subtitle>
        <Card.Text className="card-text">
          You can add {props.user}. 
          Is {props.user} safe?: {props.status}
        </Card.Text>
        <Button
          onClick={props.onPing}
          variant={isSafe ? "secondary" : "danger"}
          disabled={!isSafe}
        >
          Ping
        </Button>
        <Button onClick={props.onClick} variant="secondary">
          Add Friend
        </Button>
      </Card.Body>
    </Card>
  );
}

export default FriendsCard;
