import React, { Component } from 'react';
import './Eachtour.css';

export default class Eachtour extends Component {
   
    
   state = {
       infoShow : false
   }
   infoHandler = ()=>{
       this.setState({infoShow: !this.state.infoShow})
   }

    render() {
        let {img , info , name,city} = this.props.datas;
        let {deleteContent} = this.props.deleteContent;
        return (
            <div className="eachtour">
            <div >
                <img src={img} alt=""/>
                <span className="close"><i onClick={this.props.deleteContent} class="far fa-times-circle"></i></span>
            </div>
                <div className="content">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <i onClick={this.infoHandler} class="fas fa-chevron-circle-down"></i>  </h5>
                    {this.state.infoShow ? <p>{info}</p> : null} 
                </div>
            </div>
        )
    }
}
