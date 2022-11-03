import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Minhas Habilidades</h5>
        <h2>Minhas Experiencias</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Desenvolvimento Frontend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Com Experiência</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Com Experiência</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>JavaScript</h4>
                <small className='text-light'>Com Experiência</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>React</h4>
                <small className='text-light'>Intermediario</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>WordPress</h4>
                <small className='text-light'>Intermediario</small>
                </div>
              </article>
            </div>
          </div>
          {/*FIM DO FRONTEND*/}
          <div className='experience__backend'>
          <h3>Desenvolvimento Backend</h3>
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>NodeJS</h4>
                <small className='text-light'>Com Experiência</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Com Experiência</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>PHP</h4>
                <small className='text-light'>Com Experiência</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermediario</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>Blazer</h4>
                <small className='text-light'>Intermediario</small>
                </div>
              </article>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Experience