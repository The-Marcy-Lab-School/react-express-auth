import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function UserFriendsCard(props) {
  const { status } = props;
  console.log(props);


  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="card-name">{props.friend}</Card.Title>
        <Card.Subtitle className="card-status">Safe status: {props.status}</Card.Subtitle>
        <Card.Text className="card-text">
          You're friends with {props.friend}. 
          Is {props.friend} safe?: <span id='user-status'>{status ? `YES` : `NO`}</span>
        </Card.Text>
        <Button
          onClick={props.onPing}
          variant={status ? "secondary" : "danger"}
          disabled={!status}
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
