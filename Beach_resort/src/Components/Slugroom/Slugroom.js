import React, { Component } from 'react'
import './Slugroom.css';
import {MyContext} from '../../contextRoom/context';
import Styledheader from '../UI/Styledheader/Styledheader';
import Spinner from '../UI/Spinner/Spinner';
import Imageflex from '../UI/Imageflex/Imageflex';
import Information from '../UI/Information/Information';

export default class Slugroom extends Component {

    static contextType = MyContext;
    render() {
        let currentSlug = this.props.match.params.sludge;
        let value = this.context;
        let toBeReturned = <Spinner />;
        if (!value.loading){
            let reqData = value.allRooms.filter( item => item.slug === currentSlug );
            let bgImg = reqData[0].images[0];
            toBeReturned = (
            <>
                    <Styledheader datas={{
                    bgImg : bgImg,
                    title : reqData[0].name
                        }} />
                    <Imageflex images={reqData[0].images}/>
                    <Information datas={reqData[0]}/>
                
            </>
            )
        }
        return toBeReturned

        
    }
}
