import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {BiCodeAlt} from 'react-icons/bi'
import {FaSpotify} from 'react-icons/fa'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'></a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Fale conosco</a></li>
      </ul>

      <div className='footer__socials'>
      <a href="https://instagram.com/dmdistribuidoraoficial?igshid=YmMyMTA2M2Y="><FiInstagram/></a>
        <a href="https://www.facebook.com/profile.php?id=100086493730864"><FaFacebookF/></a>
        <a href="https://twitter.com/dmeshope?s=21&t=UH10XNfjgJYnwRsO9WZXQw"><IoLogoTwitter/></a>
        <a href="https://open.spotify.com/user/22buiezobg6xyb32kq5bfxzha?si=11ccaab38dd743be"><FaSpotify/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; DM Distrubuidora. Todos os direitos reservados. || Desenvolvido por <a href="https://instagram.com/g_moreir4?igshid=YmMyMTA2M2Y=">Gabriel Moreira</a><BiCodeAlt/>
        </small>

      </div>
    </footer>
  )
}

export default Footer