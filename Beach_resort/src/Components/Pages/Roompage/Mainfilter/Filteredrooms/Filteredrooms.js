import React from 'react'
import Roomdisplay from '../../../../UI/Roomdisplay/Roomdisplay';


const Filteredrooms = (props) => {
    let {filteredRooms} = props;
    let toBeRendered = <h2 style={{textAlign:"center",padding:"1rem"}}>Sorry , Unfortunately no room was found</h2>
    if (filteredRooms.length > 0){
        toBeRendered = (
                        <div className="flex-room">
                                {filteredRooms.map( item => <Roomdisplay 
                                    values = {item}/>)}
        </div>
        )
    }
    return toBeRendered
}

export default Filteredrooms
