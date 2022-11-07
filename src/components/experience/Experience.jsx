import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
        <h5>Itens</h5>
        <h2>Mais vendidos</h2>

        <div className='container experience__container'>
          <div className='experience__frontend'>
            <h3>Narguile</h3>
            {/*<h3>Desenvolvimento Frontend</h3>*/}
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
               <div>
               <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
               </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
            </div>
          </div>
          {/*FIM DO FRONTEND*/}
          <div className='experience__backend'>
            <h3>Copos Descartaveis</h3>
            {/*<h3>Desenvolvimento Backend</h3>*/}
            <div className='experience__content'>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon' />
                <div>
                <h4>aaaaaaaaaa</h4>
                <small className='text-light'>aaaaaaaaaa</small>
                </div>
              </article>
            </div>

          </div>
        </div>
    </section>
  )
}

export default Experience