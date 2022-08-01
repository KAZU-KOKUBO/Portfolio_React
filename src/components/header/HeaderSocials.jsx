import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.instagram.com/kazu_kokubo/' target='_blank'><BsInstagram/></a>
        <a href='https://github.com/KAZU-KOKUBO' target='_blank'><FaGithub/></a>
        <a href='https://t.me/Igor_fendrikh' target='_blank'><BsTelegram/></a>


    </div>
  )
}

export default HeaderSocials