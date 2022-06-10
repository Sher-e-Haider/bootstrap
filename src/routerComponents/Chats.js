import React from 'react'
import { Link } from 'react-router-dom'

const Chats = () => {
  return (
    <div>
        <Link to='/'>back to home</Link>
        <div className="images">
            <img className='chat_image' src="image/whats.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Chats