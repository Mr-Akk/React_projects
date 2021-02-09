import React, { Component } from 'react'
import Displaycard from '../../UI/Displaycard/Displaycard';
import './Roompage.css';
import Mainfilter from './Mainfilter/Mainfilter';

export default class Roompage extends Component {
    render() {
        return (
            <>
            <div className="bg-img1">
                <Displaycard   
                    btnContent = "Return Home"   
                    title = "Rooms page"
                    subtitle = "Buy here"
                    toPath = '/'
                />
            </div>
            <Mainfilter />
            </>
        )
    }
}
