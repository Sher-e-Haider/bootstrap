import React from 'react'
import { Accordion } from 'react-bootstrap'
import { AiFillInstagram } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'

const Page1 = () => {
  return (
    <div>
          <div className=' main rounded pb-2 mt-5'>
       <div className='datas'>
         <div className='passion'>
             <div className='info'>182cms</div>
           <div className='info'>Drink</div>
           <div className='info'>Adventure</div>
           <div className='info'>Riding</div>
           <div className='info'>Dancing</div>
           <div className='info'>Cooking</div>
         </div>
           <div className='social'>
           <AiFillInstagram style={{fontSize:'40px' ,color:'green'}}/>
           <BsFacebook style={{fontSize:'34px',color:'green'}}/>
           </div>
       </div>
      

           <div className='acordion'>
             <Accordion>
  <Accordion.Item eventKey="0" className='mb-4'>
    <Accordion.Header>About Me</Accordion.Header>
    <Accordion.Body className='mb-4'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1" className='mb-4'>
    <Accordion.Header>Description</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
 </div>
<div className="para m-3 rounded">
           <h5>About Me</h5>
          
  
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum velit tempore quae eveniet deleniti necessitatibus iste cumque consectetur obcaecati numquam nulla quas ipsam harum dolores. </p> 
       </div>
       <div className="para m-3 p-2 rounded">
           <h5>Description</h5>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum velit tempore quae eveniet deleniti necessitatibus iste cumque consectetur obcaecati numquam nulla quas ipsam harum dolores.</p> 
       </div>
      
    
 </div>
 
    </div>
  )
}

export default Page1