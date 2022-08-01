import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiFillSafetyCertificate} from 'react-icons/ai'
import {VscProject} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5>Узнать</h5>
    <h2>Обо мне</h2>

    <div className='container about__container'>
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME} alt="about image" />
      </div>
    </div>

      <div className="about__content">
      <div className="about__cards">
        <article className='about__card'>
        <FaAward />
          <h5>Опыт</h5>
          <small>1+ год Pet проектов</small>
        </article>
        <article className='about__card'>
        <VscProject />
          <h5>Проекты</h5>
          <small>7+ разработано</small>
        </article>
        <article className='about__card'>
        <AiFillSafetyCertificate />
          <h5>HTML Academy</h5>
          <small><a className='about__link' href="https://clck.ru/sQo7F" target='_blank' >Сертификат</a></small>
        </article>
      </div>

      <p>
      После окончания колледжа и работы в сфере КИПиА. Решил сменить специальность. Закончил курсы HTML Academy
      </p>
      <p>Учусь на Прикладной информатике в УРФУ на 2 курсе из 4 (Заочно по сокращенной программе).</p>
      <p>Хочу работать в опытном командном коллективе, изучать новое, работать в команде, учиться на ошибках и развиваться, не только как работник, но и как личность.
      Готов к испытательным срокам.</p>

        <a href="#contact" className='btn btn-primary'>Написать мне</a>
      </div>
    </div>
    </section>
  )
}

export default About