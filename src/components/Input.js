import React from 'react'
import { BiMessageSquareEdit } from 'react-icons/bi'

const Input = () => {
  return (
    <div>
       <div className='green box '></div>
       <div className='yellow box'></div>
       <div>
         <input type="text" className='p-2 rounded' placeholder='Upload or post something' />
         <span className='kalam'><BiMessageSquareEdit/></span>
       </div>

    </div>
  )
}

export default Input
