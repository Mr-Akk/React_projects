import React, { Component } from 'react'
import Title from '../UI/Title/Title'
import './Services.css';
import {FaGlassMartiniAlt, FaRegGrinTongueSquint}from "react-icons/fa";
import Serviceitem from './Serviceitem/Serviceitem';

export default class Services extends Component {
    state = {
        items : [   
            {       
                    id :1,
                    heading : "free cocktails",
                    icon : <FaGlassMartiniAlt size={34}/> ,
                    info : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda?"
            },
            {
                    id :2,
                    heading : "endless hiking",
                    icon : <FaRegGrinTongueSquint size={34}/>,
                    info : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda?"
            },
            {
                    id :3,
                    heading : "free shuttle",
                    icon : <FaGlassMartiniAlt size={34}/> ,
                    info : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda?"
            },
            {
                    
                   id :4, 
                    heading : "Have fun",
                    icon : <FaRegGrinTongueSquint size={34} /> ,
                    info : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, assumenda?"
            }
    ]
    }
    render() {
        return (
            <div>
                <Title>services</Title>
                <div className="flex-container">
                    {this.state.items.map(item=><Serviceitem 
                        key = {item.id}
                        icon ={item.icon}
                        heading = {item.heading}
                        info = {item.info}
                    />
                    )}
                </div>
            </div>
        )
    }
}
