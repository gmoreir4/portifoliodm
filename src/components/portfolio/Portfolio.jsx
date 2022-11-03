import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/teste1.jpg'
import IMG2 from '../../assets/teste2.jpg'
import IMG3 from '../../assets/teste3.jpg'
import IMG4 from '../../assets/teste4.jpg'
import IMG5 from '../../assets/teste5.jpg'
import IMG6 from '../../assets/teste6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19660931-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19314483-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19103793-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19103837-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19241118-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/19314361-Visualization-of-the-global-present-and-the-connections-between'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Meus recentes trabalhos</h5>
      <h2>Portifolios</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={image} alt={title} />
          </div>
          <h3>{title}</h3> 
              <div className='portfolio__item-cta'>
              <a href={github} className='btn' target='blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='blank'>Demontração</a>
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