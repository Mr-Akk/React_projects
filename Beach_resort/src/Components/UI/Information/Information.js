import React from 'react';
import './Information.css';
const Information = (props) => {
    let {description , price , size , capacity , pets , breakfast , extras} = props.datas;
    return (
        <>
            <div className="grid-container-info" >
                <div className="grid-item-info">
                        <h2>Details</h2>
                        <p>{description}</p>
                </div>
                <div className="grid-item-info">
                     <h2>Info</h2>
                     <div className="centre-text">
                                <h3>Price : ${price}</h3>
                                <h3>Size :{size} SQFT </h3>
                                <h3>Max Capacity : {capacity} People</h3>
                                <h3>{pets ? 'pets allwed' : 'No pets'}</h3>
                                <h3>{breakfast ?  "free breakfast included" : "no free breakfast"}</h3>
                     </div>
                     
                </div>
                
            </div>
            <div>
            <h2 className="grid-item-info">Extras</h2>
            <div className="grid-container-info">
                    {extras.map( item => <div>
                            {item}
                    </div>)}
            </div>

           
            

            </div>
        </>
    );
};

export default Information
