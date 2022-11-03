import React from 'react'
import './about.css'
import ME from '../../assets/logo-dm-e-shop-provisorio.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


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
                    <h5>Experiências</h5>
                    <small>Mais de 3 anos Trabalhando</small>
                </article>

                <article className='about__card'>
                  <FiUsers className='about__icon'/>
                    <h5>Clietes</h5>
                    <small>200+ Clientes</small>
                </article>

                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                    <h5>Projetos</h5>
                    <small>80+ Completos</small>
                </article>
              </div>
              <p>
              Bata no liquidificador os ovos, o leite, o óleo, o chocolate e o açúcar. Coloque em um bowl e acrescente a farinha e o fermento. Misture delicadamente.
              </p>
              <a href="#contact" className='btn btn-primary'>Vamos conversar</a>
          </div>
      </div>
      
    </section>
  )
}

export default About