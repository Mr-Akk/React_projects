import React from 'react'
import Title from '../../../../UI/Title/Title';
import './Filter.css';


const Filter = (props) => {
    let {onChangeHandler , allTypes , allCapacity ,  
    minprice , maxprice , price , minsize , maxsize , breakfast , pets , } = props.datas;
    // console.log(props);
   
    return (
        <>
        <Title>Search rooms</Title>
        <form className="filter-form">
        
        <div className="form-group">
            <label>Room Type</label>
            <select className="form-control" name="type" onChange={onChangeHandler} >
                {allTypes.map( type => <option value={type}>{type}</option>)}
</select>
        
        </div>
        <div className="form-group">
            <label>Capacity</label>
            <select className="form-control" name="capacity" onChange={onChangeHandler}>
            {allCapacity.map( capacity => <option value={capacity}>{capacity}</option>)}
        </select>
        </div>
        <div className="form-group">
            <label >Price ${price}</label>
            <input name="price" onChange={onChangeHandler} type="range" className="form-control" min={minprice} max={maxprice} value={price} />
        </div>
        <div className="form-group">
            <label >room size </label>
            <div className="size-inputs">
                <input type="number" name="minsize" id="" className="size-input" value={minsize} onChange={onChangeHandler} />
                <input type="number" name="maxsize" id="" className="size-input" value={maxsize} onChange={onChangeHandler}  />
            </div>
        </div>
        {/* <div className="form-grup">
            <div className="single-extra">
                <input type="checkbox" name="breakfast"   />
                <label >Breakfast</label>
                
            </div>
            <div className="single-extra">
                <input type="checkbox" name="pets"   />
                <label>Pets</label>
                
            </div>
        </div> */}
        
        </form>
        </>
    )
}

export default Filter
