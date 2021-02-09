import React, { Component } from 'react';
import './Tourlist.css';
import Eachtour from '../Eachtour/Eachtour';
import {tourData} from '../../tourData';
export default class Tourlist extends Component {
     state = {
        tourState :tourData
    }
    deleteContent =  (id)=>{
        let newState = this.state.tourState.filter( item => item.id !== id);
        this.setState({tourState : newState })
    }
    render() {
        return (
            <div className="tourlist">
                {this.state.tourState.map( item => <Eachtour 
                    key ={item.id}
                    datas = {item}
                    deleteContent = {()=>{
                        this.deleteContent(item.id)
                    }}
                />)}
            </div>
        )
    }
}
