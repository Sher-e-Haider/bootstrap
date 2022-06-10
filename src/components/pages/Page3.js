import React from 'react'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BiCommentEdit } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Page3 = () => {
  return (
    <div className="main2 mt-5" rounded>
    <div className='upper_par d-flex justify-content-between'>
        <div className='upper_first mx-5 my-3'>
            <div>Person Name</div>
            <p>27h @ chances</p>
        </div>
        <div className='mx-3 mt-3'><BsThreeDotsVertical/></div>
    </div>

    <div className='mb'>
        <div className='d-flex justify-content-between'>
           
           <p className='mx-5'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. </p>
   

           
    </div>

    {/* like section */}

    <div className='like_container mx-4 rounded'>
      <div className=' mx-1 mb-3 my-5'><AiFillLike style={{fontSize:'20px' ,color:'grey'}}/> 99 Likes + 6 comments</div>
    </div>

    <div className='d-flex botm'>
      <div className="mx-4 d-flex  align-items-center" >
        <span className='sabs' style={{color:'rgb(0, 153, 255)',fontSize:'20px'}}> <AiOutlineLike/></span> <span className='com'> Like</span>
       </div>
     
       <div className="mx-4 comment w-100 text-center p-2" >
        <span style={{color:'rgb(0, 153, 255)',fontSize:'20px'}}> <BiCommentEdit/></span>  <span className='com'>Comments</span>
       </div>
    </div>
</div>
<div className="m-3 last">
       <strong className='para2 dis'>Nidhi Maheshwari</strong>
      <p className='para2 rounded my-2 px-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum velit tempore quae eveniet deleniti necessitatibus iste cumque consectetur obcaecati numquam nulla. </p> 
    </div>
    <div className="rounded p-3">
    <strong className='para2 dis'>Nidhi Maheshwari</strong>
       <p className='para2 rounded my-2 px-2 mb-5 dis'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum velit tempore quae eveniet deleniti necessitatibus iste cumque consectetur obcaecati numquam nulla.</p> 
    </div>
</div>
  )
}

export default Page3
