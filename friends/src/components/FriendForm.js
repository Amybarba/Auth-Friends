import React from 'react';

const FriendForm = (props) => {

    return (
        <div>
        <h1> Name: {props.name}</h1>
        <h1>Spins On the Planet:  {props.age}</h1>
        <h1>Reach Me: {props.email}</h1>
        </div>
    )
}

export default FriendForm;