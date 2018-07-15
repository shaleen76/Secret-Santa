import React, {Component} from 'react';
import HeroPanel from './HeroPanel';
import Footer from './Footer';
require('../../style.less');

class Santa extends Component   {
    render()    {
        return (
            <div className = "container">
                <HeroPanel />
                <Footer />
            </div>
        )    
    }
}

export default Santa;