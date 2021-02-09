import React from 'react'
import './Button.css';

const Button = (props) => {
    let classname = "btn "+props.classCss
    return (
        <button className={classname}>{props.children}</button>
    )
}

export default Button
