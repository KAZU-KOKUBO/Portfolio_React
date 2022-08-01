import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Адаптивный сайт Мебельной продукции',
    github: 'https://github.com/KAZU-KOKUBO/-Funiro',
    link: 'https://funiro.fendrikh.ru/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Адаптивный сайт Онлайн школы',
    github: 'https://github.com/KAZU-KOKUBO/-Robo',
    link: 'https://robo.fendrikh.ru/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Сайт Ювелирных изделий',
    github: 'https://github.com/KAZU-KOKUBO/Jewelry_Fendrikh',
    link: 'https://jewelry.fendrikh.ru/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Простой Одностроничный Сайт',
    github: 'https://github.com/KAZU-KOKUBO/Webovio',
    link: 'https://webovio.fendrikh.ru/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Адаптивный сайт приложения Pink',
    github: 'https://github.com/KAZU-KOKUBO/Adaptive-academy-2',
    link: 'https://pink.fendrikh.ru/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Проекты</h5>
      <h2>Портфолио</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, link}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={image} className='portfolio__image' alt="title" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn' target='_blank'>Githib</a>
          <a href={link} className='btn btn-primary' target='_blank'>Live Link</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio