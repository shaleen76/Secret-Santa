import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('../../style.less');

class HeroPanel extends Component   {
    render()    {
        return(
            <section className = 'hero'>
                <div className = 'text-center'>
                    <i className = "santa text-center circle santa-large"></i>
                </div>
            </section>
        );
    }
}

export default HeroPanel;