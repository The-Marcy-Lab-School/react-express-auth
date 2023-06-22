import { useContext, useEffect } from 'react'
import { updateIsSafe } from '../adapters/user-adapter'
import CurrentUserContext from '../contexts/current-user-context.js';

export default function SafeButton() {

    const { isSafe, setIsSafe } = useContext(CurrentUserContext)


    function clickHandler() {
        setIsSafe(!isSafe);
        updateIsSafe({ isSafe });
        console.log(isSafe)
    }

    // useEffect( () => {
        
    //   }, [isSafe]);

    return (
        <button className='safe-button' onClick={clickHandler}>

        </button>
    )
}