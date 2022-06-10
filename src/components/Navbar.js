import React from 'react'
import { BsFillCursorFill } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"
import {AiOutlineStar,AiOutlineBell,AiOutlineMenu } from "react-icons/ai"
import {RiChatSmile3Line } from "react-icons/ri"
import { Link } from 'react-router-dom';


const Navbar=()=> {
  return (
    <div>
      
     <nav className='navbar navbar-expand-lg bg-light  d-flex justify-content-end navb'>
       <div className=' d-flex justify-content-between p-2' style={{width:'80%'}}>
         <div className='navValue'>
           <Link to="/near" className='a p-2' style={{color:'green'}}><BsFillCursorFill/> NearBy</Link>
           <Link to="#" className='a p-2'><AiOutlineStar/> Best Matches</Link>
           <Link to="#" className='a p-2'><BiTimeFive/> TimeLine</Link>
           <Link to='/chat' className='a p-2'><RiChatSmile3Line/> Chats</Link>
          
         </div>
       
       

       <div className='toggle'>
       <span>
             <div class="switch">
        <div class="flicker"></div>
        <div class="moon"></div>
    </div>
             </span>
           <a href="#" className='a p-2'><AiOutlineBell/></a>
           <a href="#" className='a p-2'> <span className='sam'> Sam</span> <span className='image'><img src="/image/s.jpeg" alt="" /></span></a>
           <a href="#" className='a p-2 menu'><AiOutlineMenu/></a>
         </div>
       
       </div>
       

     </nav> 
     
      </div> 
   
  )
}

export default Navbar