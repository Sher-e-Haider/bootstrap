import React from 'react'
import {BsFacebook ,BsThreeDotsVertical} from "react-icons/bs"
import {AiFillInstagram,AiFillLike,AiOutlineLike} from "react-icons/ai"
import {BiComment} from "react-icons/bi"
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page1 from './pages/Page1'


const Pages = () => {
  return (
      <div>
        <Page1/>
        <Page2/>
        <Page3/>
    </div>
  )
}

export default Pages