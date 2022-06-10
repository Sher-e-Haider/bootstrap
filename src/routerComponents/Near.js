import React from 'react'
import { Link } from 'react-router-dom'

const Near = () => {
  return (
    <div>
     <Link to='/'>back to home</Link>
         <strong> Lorem ipsum dolor sit, amet consectetur adipisicing elit.</strong>
         <div>
              <img className='map' src="image/map.jpeg" alt="" />
         </div>
        
    </div>
  )
}

export default Near
