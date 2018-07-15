import React, {Component} from 'react';
import HeroPanel from './HeroPanel';
require('../../style.less');

class Santa extends Component   {
    render()    {
        return (
            <div className = "container">
                <HeroPanel />
            </div>
        )    
    }
}

export default Santa;