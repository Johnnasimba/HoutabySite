import React, { Component } from 'react';
import '../css/home.css';
import Home from '../componets/home/home.component'


class HomePage extends Component {
    render() {
        return (
            
                        <Home Applicants = {this.props.Applicants} />
        )
    }
}

export default HomePage;
