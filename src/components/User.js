import React, { Component } from 'react';
require('../../public/style.less');

class User extends Component {

    render() {
        return (
            <div className="ui centered cards">
                <div className="card">
                    <div className="image">
                        <img src={require('../../public/images/Santa.png')} />
                    </div>
                    <div className="content">
                        <div className="header">{this.props.sender.name.first + ' ' + this.props.sender.name.last}</div>
                        <div className="description">
                            {this.props.sender.email}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated">
                            <i className="phone icon"></i>
                            {this.props.sender.phone}
                        </span>
                    </div>
                </div>
                <div>
                    <img className="imageCentered" src={require('../../public/images/Gifts.png')} />
                </div>
                <div className="card">
                    <div className="image">
                        <img src={require('../../public/images/' + this.props.avatarImage)} />
                    </div>
                    <div className="content">
                        <div className="header">{this.props.receiver.name.first + ' ' + this.props.receiver.name.last}</div>
                        <div className="description">
                            {this.props.receiver.email}
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated">
                            <i className="phone icon"></i>
                            {this.props.receiver.phone}
                        </span>

                    </div>
                </div>
            </div>
        );
    }
}

export default User;