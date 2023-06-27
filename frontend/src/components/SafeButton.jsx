import { useContext, useEffect } from 'react';
import { updateIsSafe } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context.js';

export default function SafeButton() {
  const { isSafe, setIsSafe } = useContext(CurrentUserContext);

  function clickHandler() {
    setIsSafe(!isSafe);
  }

  useEffect(() => {
    updateIsSafe({ isSafe });
  }, [isSafe]);

  function clickHandler() {
    setIsSafe(!isSafe);
    updateIsSafe({ isSafe });
  }

  return (
    <button className='safe-button' onClick={clickHandler}>
      Solace
    </button>
  );
}
