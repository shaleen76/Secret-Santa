import React, {Component} from 'react';

class Loader extends Component  {
    render()    {
        return(
            <div className = "ui active inverted dimmer">
              <div className = "ui large text loader">Loading Secret Santa Data...</div>
            </div>
        );
    }
}

export default Loader;