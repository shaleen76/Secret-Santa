import React, { Component } from 'react';

class Loader extends Component {
    render() {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui large text loader">Cannot start Secret Santa, due to lack of User Data. Please try again ... </div>
            </div>
        );
    }
}

export default Loader;