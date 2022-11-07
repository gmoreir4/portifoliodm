import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
              <h3>UI/UX Design</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
            </ul>
        </article>
        {/*FIM DO UI/UX*/}

        <article className='service'>
          <div className='service__head'>
              <h3>Desenvolvedor web</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
            </ul>
        </article>
        {/*FIM Desenvolvedor web*/}

        <article className='service'>
          <div className='service__head'>
              <h3>Criacoes</h3>
          </div>

            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Aqui entra um servico ou frase</p>
              </li> 
            </ul>
        </article> 
        {/*FIM criacoes*/}



      </div>
    </section>
  )
}

export default Services