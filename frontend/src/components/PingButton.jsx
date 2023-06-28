import { useContext, useEffect, useState } from 'react';

export default function PingButton() {
    function clickHandler() {
        console.log('Ping!');
    }

    useEffect(() => {
        
    });
}

return (
    <button className='ping-button' onClick={clickHandler}>
        <Ping></Ping>
    </button>
)