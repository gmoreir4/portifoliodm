import React from 'react'
import './about.css'
import ME from '../../assets/logodmazul.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsBoxSeam} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Conheça</h5>
      <h2>Sobre nós</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
                  <img src={ME} alt="" />
            </div>
          </div>

          <div className='about__content'>
              <div className='about__cards'>
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                    <h5>Experiência</h5>
                    <small>Mais de 7 anos no mercado</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                    <h5>Clietes</h5>
                    <small>200+ Clientes</small>
                </article>

                <article className='about__card'>
                  <BsBoxSeam className='about__icon'/>
                    <h5>Produtos</h5>
                    <small>4.000+ Itens</small>
                </article>
              </div>
              <p>
              A DM Distribuidora é uma loja especializada em acessórios em geral. A maior variedade em Produtos de alta qualidade, Copo Térmico, Acendedor de Churrasqueira, Copo de Tereré e muito mais.
              </p>
              <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
          </div>
      </div>
      
    </section>
  )
}

export default About