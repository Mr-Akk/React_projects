import React from 'react'
import Filter from './Filter/Filter';
import Filteredrooms from './Filteredrooms/Filteredrooms';
import {useContext} from 'react';
import {MyContext} from '../../../../contextRoom/context';
import Spinner from '../../../UI/Spinner/Spinner'
const Mainfilter = () => {

     const context = useContext(MyContext)
     let {loading} = context
     let toBeRendered = <Spinner />
     if (!loading){
         let {filteredRooms} = context
            toBeRendered = (
                     <>
                 <Filter datas = {context}/>
                <Filteredrooms filteredRooms = {filteredRooms} />
                    </>
            )

     }

    return toBeRendered
}

export default Mainfilter
