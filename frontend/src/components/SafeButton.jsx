import { useContext, useEffect } from 'react';
import { updateIsSafe } from '../adapters/user-adapter';
import CurrentUserContext from '../contexts/current-user-context.js';

export default function SafeButton() {
  const { isSafe, setIsSafe } = useContext(CurrentUserContext);

  function clickHandler() {
    console.log(isSafe)
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
    <button className={`safe-button ${isSafe ? 'safe-button--safe' : 'safe-button--unsafe'}`} onClick={clickHandler}>
      Solace
    </button>
  );
}
