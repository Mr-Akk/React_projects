import React from 'react'
import './Displaycard.css';
import Button from '../../UI/Buttons/Button';
import Title from '../Title/Title';
import {Link} from 'react-router-dom';

 const Displaycard = (props) => {
     let content = props.btnContent
    let toPath = props.toPath
    return (
        <div className="card">
            <Title>{props.title}</Title>
            
            <h3>{props.subtitle}</h3>
            <Link to={toPath}><Button classCss="btn-primary">{content}</Button></Link>
        </div>
    )
}

export default  Displaycard;