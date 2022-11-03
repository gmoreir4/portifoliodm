import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/copo1.jpg'
import AVTR2 from '../../assets/copo2.jpg'
import AVTR3 from '../../assets/copo3.jpg'
import AVTR4 from '../../assets/copo4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './testimonials.css';

const data = [
  {
    avatar: AVTR1,
    name: 'Copo Personalizado DM',
    review: 'Tudo dentro dos conformes. Com certeza voltarei a comprar mais vezes com certezo.'
  },
  {
    avatar: AVTR2,
    name: 'Copo Personalizado DM',
    review: 'Tudo dentro dos conformes. Com certeza voltarei a comprar mais vezes com certezo.'
  },
  {
    avatar: AVTR3,
    name: 'Copo Personalizado DM',
    review: 'Tudo dentro dos conformes. Com certeza voltarei a comprar mais vezes com certezo.'
  },
  {
    avatar: AVTR4,
    name: 'Copo Personalizado DM',
    review: 'Tudo dentro dos conformes. Com certeza voltarei a comprar mais vezes com certezo.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Revisão de clientes</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
              <img src={avatar} alt=''/>
          </div>
            <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
        </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials