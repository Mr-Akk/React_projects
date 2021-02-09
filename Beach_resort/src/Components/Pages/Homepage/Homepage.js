import React, { Component } from 'react'
import Displaycard from '../../UI/Displaycard/Displaycard';
import './Homepage.css';
import Services from '../../Services/Services';
import Featuredrooms from '../../Featuredrooms/Featuredrooms';

export default class Homepage extends Component {
    render() {
        return (
            <>
            <div className="bg-img">
                <Displaycard     
                    btnContent = "Our rooms" 
                    title = "Single deluxe Room"
                    subtitle = "Buy here"
                    toPath = '/rooms'
                />
            </div>
            <div className="bg-service">
            <Services />
            </div>
 
            <Featuredrooms />
            {/* <Context /> */}
            </>

        )
    }
}
