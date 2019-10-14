import React from 'react';
import { authAxios } from '../utils/authaxios';
import FriendForm from './FriendForm';
import NewFriend from './NewFriend';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getFriends();
    }

    getFriends = () => {
        authAxios()
        .get('/friends')
        .then(response => {
            console.log('response: ', response.data)
            this.setState({friends: response.data})
        })
        .catch(err => console.log(err))
    };

    render() {

        return (
            <div>
            <h1>Inner Circle List</h1>
            {this.state.friends.map(friend => (
                <FriendForm
                key={friend.id}
                name={friend.name}
                age={friend.age}
                email={friend.email}
                />
            ))}
            <h1>Add a new Cirlcle</h1>
            <NewFriend />
            </div>
        )
    }
}

export default FriendsList;