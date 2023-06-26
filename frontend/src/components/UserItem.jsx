import { useEffect, useState } from 'react';

const UserItem = ({ user, onPing, onRemoveFriend, onAddFriend }) => {
    const { username, safeStatus } = user; 

    const pingHandler = () => {
        if (!safeStatus) onPing(username); 
    };

    const handleRemoveFriend = () => {
        onRemoveFriend(username);
    }; 

    const handleAddFriend = () => {
        onAddFriend(username); 
    };

    return (
        <>
            <div className='user-item'>
                <div className={`circle ${safeStatus ? 'green' : 'red'}`}></div>
                <span className='username'>{username}</span>
                {onPing && (
                    <button 
                        className={`ping-button ${safeStatus ? 'green' : 'red'}`}
                        onClick={pingHandler}
                        disabled={safeStatus}
                    >Ping</button>
                )} 
                {onRemoveFriend && (
                    <button className="remove-button" onClick={handleRemoveFriend}>
                        Remove
                    </button>
                )}
                {onAddFriend && (
                    <button className='add-button' onClick={handleAddFriend}>
                        Add
                    </button>
                )}
            </div>
        </>
    );
}

export default UserItem;