import React from 'react'
import './Roomdisplay.css' ; 
import Button from '../Buttons/Button';
import {Link} from 'react-router-dom';
function Roomdisplay(props) {
    
    let {price , name,slug} = props.values
    let img = props.values.images[0]
    return (
        <div className="flex-room-item">
            <div className="price">
                $ {price}
                <h6>Per night</h6>
            </div>
            <img className='image' src={img} alt="hello"/>
            <div className="features"> 
                   <Link to={`/rooms/${slug}`}> <Button classCss = "btn-small">Features</Button></Link>
            </div>
            <div className="name">
                {name}
            </div>
        </div>
    )
}

export default Roomdisplay
