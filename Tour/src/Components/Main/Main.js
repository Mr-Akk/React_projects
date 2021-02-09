import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar';
import Tourlist from '../Tourlist/Tourlist';

export default class Main extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Tourlist />
            </React.Fragment>
        )
    }
}
