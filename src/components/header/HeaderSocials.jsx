import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target="_blanke"><BsLinkedin/></a>
        <a href="https://github.com" target="_blanke"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blanke"><FiDribbble/></a>    
    </div>
  )
}

export default HeaderSocials