import React, {Component} from 'react';
import User from './User';
import users from '../data/users.json';
import pair from '../pair';
import Loader from './Loader';
import Validation from './Validation';
require('../../style.less');

class SecretSanta extends Component {
    
   state = {
        users,
   };

    render()    {
        if(!this.state.users.users || !this.state.users) { 
            return <Loader />;
        }
        if(this.state.users.users.length == 0 || this.state.users.users.length == 1) {
            return <Validation />;
            console.log('Not sufficient data ');
        }
        let userData = this.state.users.users;
        let pairs = pair(Object.keys(this.state.users.users));
        let santaCards = pairs.map((data, index) =>   {
            let sender = userData[data[0]];
            let receiver = userData[data[1]];
            let randomNumber = Math.floor(Math.random() * 4) + 1;
            let avatarImage = 'Avatar'+randomNumber+'.png';
            return <User key = {index}
                        sender = {sender}   
                        receiver = {receiver}  
                        avatarImage = {avatarImage}
                    />
        });
        return(
            <div className = "spacing">
                {santaCards}
            </div>
        )
    }
}

export default SecretSanta;