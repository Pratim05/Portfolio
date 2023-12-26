import React from 'react'
import {BsLinkedin }from 'react-icons/bs'
import { FaGithubSquare }from 'react-icons/fa'
const HeaderSocials = () => {
  return (
<div className="header__socials">
    <a href="https://www.linkedin.com/in/pratim-bera-464281241" target='_blank'><BsLinkedin/></a>
    <a href="https://github.com/Pratim05" target='_blank'><FaGithubSquare/></a>
    {/* <a href="https://www.instagram.com/_pratim05/" target='_blank'></a> */}
</div>
   
  )
}

export default HeaderSocials

