import React from 'react'
import { Card } from 'react-bootstrap'
import { RiContrastDropLine } from 'react-icons/ri'

const Cards = () => {
  return (
    <div>
       <Card style={{ width: '18rem' }}>
  <Card.Img src="https://picsum.photos/200/50"  style={{ height: '10rem' }}/>
  <Card.Body>
    <Card.Title className='text-center'>Person Name, 26</Card.Title>
    <Card.Text className='text-center'>
      i Am trans
    </Card.Text>
    <Card.Text className='text-center'>
      <RiContrastDropLine/> 2.3 miles caffornia
    </Card.Text>
    <Card.Text className='text-center'>
     Looking for trans
    </Card.Text>
    
    <Card.Link href="#" className='text-center'>Edit Profile</Card.Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default Cards
