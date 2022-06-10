import React from 'react'
import { Card } from 'react-bootstrap'
import { AiFillLike, AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { BsThreeDotsVertical } from 'react-icons/bs'

const Page2 = () => {
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

      <div className="page2card">
        <Card style={{ width: '13rem' }} className='mx-5'>

<Card.Body>

 <Card.Text className='text-center' >
 Edit this post
 </Card.Text>

 <Card.Text className='text-center'>
 Delete this post
 </Card.Text>
 

</Card.Body>
</Card>

      </div>     
     
           
    </div>

    {/* like section */}

    <div className='like_container mx-4'>
      <div className='likes mx-1'><AiFillLike style={{fontSize:'20px' ,color:'grey'}}/> 99 Likes + 6 comments</div>
    </div>

    <div className='d-flex '>
      <div className="mx-4 d-flex  align-items-center" >
        <span className='sabs' style={{color:'rgb(0, 153, 255)',fontSize:'20px'}}> <AiOutlineLike/></span> Like
       </div>
     
       <div className="mx-4 comments w-100 text-center p-2" >
        <span style={{color:'rgb(0, 153, 255)',fontSize:'20px'}}> <BiComment/></span> Comments
       </div>
    </div>
</div>

</div>
  )
}

export default Page2