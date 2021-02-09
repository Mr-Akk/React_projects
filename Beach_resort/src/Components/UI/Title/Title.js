import React from 'react';
import './Title.css';

const Title = (props) => {
    return (
        <div>
            <h1>{props.children}</h1>
            <div className="border"> </div>
        </div>
    )
}

export default Title
