import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserFriendsCard(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.friend}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button onClick={props.onClick} variant="secondary">
          Remove Friend
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserFriendsCard;
