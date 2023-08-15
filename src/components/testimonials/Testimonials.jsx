import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Testimonios = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>

         <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ritaja Rahman</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit deleniti, error in a ab aliquam iusto molestiae perspiciatis distinctio, molestias eum explicabo minima omnis reprehenderit voluptas, sit asperiores necessitatibus!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Ernest Achiver</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit deleniti, error in a ab aliquam iusto molestiae perspiciatis distinctio, molestias eum explicabo minima omnis reprehenderit voluptas, sit asperiores necessitatibus!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Belén Romano</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit deleniti, error in a ab aliquam iusto molestiae perspiciatis distinctio, molestias eum explicabo minima omnis reprehenderit voluptas, sit asperiores necessitatibus!
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonials">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Nicolás Gutierrez</h5>
          <small className='client__review'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus suscipit deleniti, error in a ab aliquam iusto molestiae perspiciatis distinctio, molestias eum explicabo minima omnis reprehenderit voluptas, sit asperiores necessitatibus!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonios