import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
    <div className='container header__container'>
      <h5>Привет, меня зовут</h5>
      <h1>Игорь Фендрих</h1>
      <h5 className="text-light">Junior Frontend Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={ME} alt="Я" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
    </header>
  )
}

export default Header