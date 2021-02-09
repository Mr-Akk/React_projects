import React from 'react'
import styled from 'styled-components';
import defaultPic from '../../../images/room-1.jpeg'
import Title from '../Title/Title';
import Displaycard from '../Displaycard/Displaycard';
import './Styledheader.css';
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${props => props.bgImg || defaultPic}) 50% center / cover no-repeat;
  height : 60vh;
`
const Styledheader = (props) => {
  let {bgImg , title} = props.datas
  return (
    <div className='styledheader'>
    <StyledHeader bgImg = {bgImg} />
    <Displaycard className="card"
      btnContent = "Return Home" 
      title = {`${title} Room`}
      toPath = '/'
    />
</div>
  )
}


export default Styledheader ;