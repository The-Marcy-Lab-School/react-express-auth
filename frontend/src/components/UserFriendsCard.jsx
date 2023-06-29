import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserFriendsCard(props) {
  const { isSafe } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="card-name">{props.friend}</Card.Title>
        <Card.Subtitle className="card-status">Safe status: {props.status}</Card.Subtitle>
        <Card.Text className="card-text">
          You're friends with {props.friend}. 
          Is {props.friend} safe?: {props.status}
        </Card.Text>
        <Button
          onClick={props.onPing}
          variant={isSafe ? "secondary" : "danger"}
          disabled={!isSafe}
        >
          Ping
        </Button>
        <Button onClick={props.onClick} variant="secondary">
          Remove Friend
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserFriendsCard;
