import React from 'react';
import { authAxios } from '../utils/authaxios';

class NewFriend extends React.Component {
    state = {
        name: '',
        age: '',
        email: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

newFriend = () => {
    authAxios()
    .post('/friends', this.state)
    .then(response => {
        console.log('new friend response: ' + response);
    })
    .catch(error => console.log('new friend error: ' + error))
};

render() {
    return (
        <div>
        <form onSubmit={this.newFriend}>
            <input
            type='text'
            placeholder='name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            />

            <input
            type='text'
            placeholder='email'
            name='email'
            onChange={this.handleChange}
            value={this.state.email}
            />
            <button>New Circle</button>
        </form>
        </div>
    )
}


}

export default NewFriend;