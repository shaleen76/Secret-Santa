import React, {Component} from 'react';
import User from './User';
import users from '../data/users.json';
import pair from '../pair';
import Loader from './Loader';
require('../../style.less');

class SecretSanta extends Component {
    
   state = {
        users,
   };

    render()    {
        if(!this.state.users) { 
            return <Loader />;
        }
        let userData = this.state.users.users;
        let pairs = pair(Object.keys(this.state.users.users));
        let santaCards = pairs.map((data, index) =>   {
            let sender = userData[data[0]];
            let receiver = userData[data[1]];
            return <User key = {index}
                        sender = {sender}   
                        receiver = {receiver}  
                    />
        });
        return(
            <div className = "container">
                {santaCards}
            </div>
        )
    }
}

export default SecretSanta;