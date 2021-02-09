import React, { Component } from 'react'

import data from '../data';
const MyContext = React.createContext();
export default class Roomprovider extends Component {
    constructor(){
        super()
        this.state = {
        allRooms : [] , 
        featuredRooms : [],
        filteredRooms : [],
        loading:true,
        onChangeHandler : this.onChangeHandler.bind(this),
        type : 'all',
        allTypes : ['all'],
        capacity : 1,
        allCapacity : [],
        price : 0,
        minprice:0,
        maxprice : 0,
        minsize : 0,
        maxsize : 0
    }
    }
    

    changingState = ()=>{
        let {type , capacity , price ,minsize , maxsize , breakfast , pets} = this.state;
        console.log(breakfast,pets);
        let filteredRooms = this.state.allRooms.filter( item => (type!=='all' ? item.type === type: true) && item.capacity>=capacity && item.price <= price && item.size>=minsize && item.size<=maxsize );
        this.setState({
            filteredRooms
        })
    
}
    onChangeHandler = (event) =>{
        let name = event.target.name;
        this.setState({
            [name] : event.target.value
        },()=>this.changingState())
 }


    componentDidMount(){
        let allRooms = data.map( item => {
            {
                let images = item.fields.images.map( img => img.fields.file.url);
                return {
                    id : item.sys.id , 
                    ...item.fields,
                    images,
                    
                }
            }
        })

        let featuredRooms = allRooms.filter( item => item.featured === true);
        let allTypes = [...new Set(allRooms.map( item => item.type))];
        let allCapacity = [...new Set(allRooms.map( item => item.capacity))];
        let allPrice = allRooms.map( item => item.price);
        let minprice = Math.min(...allPrice);
        let maxprice = Math.max(...allPrice);
        let allSizes = [...new Set(allRooms.map( item => item.size))]
        let minsize = Math.min(...allSizes);
        let maxsize = Math.max(...allSizes);
        this.setState({
            allRooms : allRooms,
            featuredRooms : featuredRooms,
            filteredRooms : allRooms,
            loading : false,
            allTypes : [...this.state.allTypes,...allTypes],
            allCapacity : allCapacity,
            minprice,
            maxprice,
            price : maxprice,
            minsize,
            maxsize
        })
    }
    render() {
        return (
            <MyContext.Provider value={this.state}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}

export {MyContext}
