import React from 'react'
import './Serviceitem.css';

const Serviceitem = (props) => {
    
    return (
        <div>
            {props.icon}
            <h2>{props.heading}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default Serviceitem;
