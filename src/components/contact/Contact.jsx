import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gsza4a3', 'template_aa7zq0t', form.current, 'Up4u3Xf3LZpCSY_7p')
    
    e.target.reset()

    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Entrar em contato</h5>
      <h2>Contate-me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
            <article className='contact__option'>
              <MdOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>dmeshop.com.br</h5>
              <a href="mailto:dmeshopvendas@gmail.com" target="_blank">Enviar Mensagem </a>
            </article>
            <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Facebook</h5>
              <a href="https://m.me/profile.php?id=100086493730864" target="_blank">Enviar Mensagem </a>
            </article>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+55(44) 9993-8701</h5>
              <a href="https://api.whatsapp.com/send?phone=5544999938701" target="_blank">Enviar Mensagem </a>
            </article>
        </div>
        {/*FIM DO CONTACT ME*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name='email' placeholder='Seu Email' required />
          <textarea name="message" rows="7" placeholder='Sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagen</button>

        </form>
      </div>
    </section>
  )
}

export default Contact