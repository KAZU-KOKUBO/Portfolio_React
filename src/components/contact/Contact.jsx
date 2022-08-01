import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsTelegram} from 'react-icons/bs'
import { Icon28LogoVkOutline } from '@vkontakte/icons';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oijvrbu', 'template_ptcii7t', form.current, 'lXbs_P19MWnx2RQzC')

    e.target.reset()
  };
  return (
    <section id='contact'>
    <h5>Контакты</h5>
    <h2>Написать мне</h2>

    <div className="container contact__container">
    <div className="contact__options">
      <article className="contact__option">
      <MdOutlineEmail className='contact__options-icon'/>
        <h4>Email</h4>
        <h5>igorfendrih@mail.ru</h5>
        <a href="mailto:igorfendrih@mail.ru" target='_blank'>Отправить письмо</a>
      </article>
      <article className="contact__option">
      <BsTelegram className='contact__options-icon'/>
        <h4>Telegram</h4>
        <h5>Igor_fendrikh</h5>
        <a href="https://t.me/Igor_fendrikh" target='_blank'>Написать в Telegram</a>
      </article><article className="contact__option">
      <Icon28LogoVkOutline className='contact__options-icon' />
        <h4>VK</h4>
        <h5>Моя соцсеть</h5>
        <a href="https://vk.com/kazu_kokubo" target='_blank'>Моя страница</a>
      </article>
    </div>
    {/* END OF CONTACT OPTIONS */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Ваше Имя' required />
      <input type="email" name="email" placeholder='Ваш почтовый адрес' required/>
      <textarea name="message" rows="7" placeholder='Ваше сообщение' required></textarea>
      <button type='submit' className='btn btn-primary'>Отправить</button>
    </form>
    </div>
    </section>
  )
}

export default Contact