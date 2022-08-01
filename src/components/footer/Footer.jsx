import React from 'react'
import './footer.css'
import {BsTelegram} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { Icon28LogoVkOutline } from '@vkontakte/icons';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Igor Fendrikh</a>

      <ul className='permalinks'>
        <li><a href="#">Главная</a></li>
        <li><a href="#about">Обо мне</a></li>
        <li><a href="#experience">Опыт</a></li>
        <li><a href="#portfolio">Портфолио</a></li>
        <li><a href="#contact">Контакты</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://vk.com/kazu_kokubo" target='_blank'><Icon28LogoVkOutline width={25} height={25} /></a>
        <a className='footer__reactIcons' href="https://www.instagram.com/kazu_kokubo/" target='_blank'><BsInstagram/></a>
        <a className='footer__reactIcons' href="https://t.me/Igor_fendrikh" target='_blank'><BsTelegram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Сайт-портфолио Fendrikh Igor</small>
      </div>
    </footer>
  )
}

export default Footer