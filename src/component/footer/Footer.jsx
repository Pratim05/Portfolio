import React from 'react'
import './Footer.css'

import {BsFacebook,BsGithub,BsTwitter} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <div className="greet"><p>Thanks For Spend Your Time , Have A Nice Day</p></div>

      <div className="socials">
    
        <div className="social__icons"><a href="https://www.facebook.com/pratim.pratim.718"><BsFacebook/></a></div>
        <div className="social__icons"><a href="https://www.instagram.com/_pratim_05/"><FaInstagramSquare/></a></div>
        <div className="social__icons"><a href="https://github.com/Pratim05"><BsGithub/></a></div>
        <div className="social__icons"><a href="https://twitter.com/PratiM_05"><BsTwitter/></a></div>
      </div>
    </footer>
  )
}

export default Footer