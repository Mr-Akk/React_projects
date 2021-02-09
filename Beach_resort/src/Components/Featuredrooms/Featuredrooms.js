import React, { Component } from 'react';
import './Featuredrooms.css';
import Title from '../UI/Title/Title';
import Spinner from '../UI/Spinner/Spinner';
import {MyContext} from '../../contextRoom/context'
import Roomdisplay from '../UI/Roomdisplay/Roomdisplay';



export default class Featuredrooms extends Component {

    static contextType = MyContext;
    render() {
        let value = this.context;
        let toBeRendered = <Spinner />
        if (!value.loading){
            toBeRendered = <>
                <Title>Featured Rooms</Title>
                <div className="flex-room">
                    {
                        value.featuredRooms.map( item=> <Roomdisplay values={item}/>)
                    }
                </div>
            </>
        }
        return toBeRendered
        
    }
}
