import React, {Component} from 'react';
require('../../style.less');

class Footer extends Component{
    render()    {
        return(
            <footer className = "footer">
            <div className ="ui fixed inverted vertical footer segment">
                Copyright &#169; July, 2018 Web Design and Developed by Shaleen Agarwal
            </div>
        </footer>   
        );
    }
}

export default Footer;
