import React, { Component } from 'react';
import Header from './Header';
import SecretSanta from './SecretSanta';
import Footer from './Footer';
require('../../public/style.less');

class Santa extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <SecretSanta />
                <div className="space">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Santa;