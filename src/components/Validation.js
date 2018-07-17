import React, { Component } from 'react';
require('../../public/style.less');

class Validation extends Component {
    render() {
        return (
            <div className="ui warning message">
                <div className="header">
                    Insufficient data
                </div>
                <ul className="list">
                    <li>
                        Insufficient data in the database. Please check the users.json file.
                    </li>
                    <li>
                        Ensure that the number of users are more than 1 to play the Secret Santa game.
                    </li>
                </ul>
            </div>
        );
    }
}

export default Validation;