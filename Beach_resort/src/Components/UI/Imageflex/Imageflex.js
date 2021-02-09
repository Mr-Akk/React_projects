import React from 'react'
import './Imageflex.css';
const Imageflex = (props) => {
    let imagesToRender = props.images.map( img =><img  style={{width:"100%",border:"2px solid black"}} src={img} alt=""/> )
    return (
        <div className="for-container">
                {imagesToRender}
        </div>
    )
}

export default Imageflex
