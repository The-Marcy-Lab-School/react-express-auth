import { timeObject } from '../utils';

const Comment = (props) => {
  const { comment } = props;
  const formattedStartDate = new Date(comment.date).toLocaleString(
    'en-US',
    timeObject
  );
  return (
    <div key={comment.id - 900}>
      <h5>Commenter: {comment.commenter_name}</h5>
      <h6>Text: {comment.text}</h6>
      <h6>When {formattedStartDate}</h6>
    </div>
  );
};

export default Comment;
