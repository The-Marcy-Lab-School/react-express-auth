import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserFriendsCard(props) {
  const { isSafe } = props;

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="card-name">{props.friend}</Card.Title>
        <Card.Text className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
