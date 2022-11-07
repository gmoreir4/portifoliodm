import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Dmeshop.png'
import IMG2 from '../../assets/dmcopos.png'
import IMG3 from '../../assets/teste3.jpg'
import IMG4 from '../../assets/teste4.jpg'
{/*import IMG5 from '../../assets/teste5.jpg'
import IMG6 from '../../assets/teste6.jpg' */}

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'DM e-Shop',
    github: 'https://github.com',
    demo: 'https://www.dmeshop.com.br/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Copos Personalizados DM',
    github: 'https://github.com',
    demo: 'https://copospersonalizadosdm.com.br/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Aqui entra uma frase aqui entra uma frase',
    github: 'https://github.com',
    demo: 'https://drive.google.com/file/d/1zNhbTS-EMFrEkJ55Bg2_Jd8hBXODkXud/view?usp=sharing'
  },
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
             {/* <a href={github} className='btn' target='blank'>Github</a>*/}
              <a href={demo} className='btn btn-primary' target='blank'>Acesse Nosso Site</a>
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