import { useContext } from 'react';
import { timeObject } from '../utils';
import { hideComment } from '../adapters/event-adapter';
import CurrentUserContext from '../contexts/current-user-context';

const Comment = ({ comment, refreshComments }) => {
  const { currentUser } = useContext(CurrentUserContext);

  const formattedStartDate = new Date(comment.date).toLocaleString(
    'en-US',
    timeObject
  );

  const handleHide = async () => {
    try {
      await hideComment(comment.id);
      refreshComments();
    } catch (error) {
      console.error('Failed to hide comment:', error);
    }
  };
  

  return (
   
    
    <div key={comment.id - 900}>
       <div className='flex flex-col'>
            <div className='flex flex-row mt-12'>
              <div className='max-w-16 max-h-16 flex justify-center'>
                <img
                  className="rounded-full"
                  src={`../upload/${ 'default.jpg'}`}
                  width={'full'}
                  height={'full'}
                />
              </div>
              <div className='flex justify-center items-center font-medium ml-2'>
                <p> {comment.commenter_name} </p>
              </div>    
            </div>
            <div className='mt-2'>
            <p className='max-w-full'> {comment.text} </p>
              {currentUser.id === comment.user_id && (
                <button onClick={handleHide}>Delete Comment</button>
              )}
            </div>
            
          </div>
      {/* <h5>Commenter: {comment.commenter_name}</h5>
      <h6>Text: {comment.text}</h6> */}
      {/* <h6>When {formattedStartDate}</h6> */}
      {/* {currentUser.id === comment.user_id && (
        <button onClick={handleHide}>Delete Comment</button>
      )} */}
    </div>
  );
};

export default Comment;
