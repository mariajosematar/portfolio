import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaPager} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com" target="_blank"><FaGithub/></a>
      <a href="https://tangotechstore.com" target="_blank"><FaPager/></a>
    </div>
  )
}

export default HeaderSocials