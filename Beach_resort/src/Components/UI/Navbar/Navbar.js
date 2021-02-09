import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import  {BsColumnsGap} from "react-icons/bs"
import logo from '../../../images/logo.svg';
class  Navbar extends Component{
    state = {
        isToggle : false
    }
    toggleHandler = () => this.setState({isToggle : !this.state.isToggle})
    render(){
        let classname = "TogglerNo"
        if (this.state.isToggle){
            classname = 'Toggler' 
        }

    return (
        <nav>
            <img src={logo} alt=""/>
            
            <ul className={classname}>
                <li ><Link className="redhover" to='/'>Home</Link> </li>
                <li ><Link className="redhover" to='/rooms'>Rooms</Link></li>
            </ul>
            <BsColumnsGap 
            onClick = {this.toggleHandler}
            className ="burger"/>
        </nav>
    )
    }
}

export default Navbar;