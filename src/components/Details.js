import React from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import {BiMessageSquareEdit } from "react-icons/bi"
import {RiContrastDropLine } from "react-icons/ri"
import Pages from './Pages'
import Cards from './Cards'
import Input from './Input'

const Details = () => {
  return (
    <div>
       <div className='card_flex'>
       <div className='m-3 cardwala'>
      <Cards/>
     
     
    </div>

    <div className='m-3 position-relative up' >
      <Input/>
     
      <div className='car'> <Cards/></div>
      {/* <div className='disapp'> <Cards/></div> */}
       <Pages/>
    </div>
   
    </div>
     
    </div>
   
   
  )
}

export default Details