import React, {Component} from 'react';

class User extends Component    {

    render()    {
        return (
            <div>
                {this.props.sender.name.first}
            </div>
        );
    }
}

export default User;