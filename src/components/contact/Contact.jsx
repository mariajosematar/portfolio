import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {BsLinkedin} from 'react-icons/bs';
import {FiSmartphone} from 'react-icons/fi';
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_dyqu7oa', 'template_o4lgipn', form.current, 'uzEL7h7x_jScMbXWH')
     
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <MdOutlineEmail className='contact__option-icon' />
             <h4>Email</h4>
             <a href='mailto:matarmariajose@gmail.com' target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
             <BsLinkedin className='contact__option-icon' />
             <h4>Linkdin</h4>
             <a href='https://www.linkedin.com/in/mariajosematar/' target='_blank' >Send a message</a>
          </article>
          <article className="contact__option">
             <FiSmartphone className='contact__option-icon' />
             <h4>WhatsApp</h4>
             <a href="https://api.whatsapp.com/send?phone=34695740656" target='_blank' >Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} >
         <input type="text" name='name' placeholder='Your Full Name' required />
         <input type="email" name='email' placeholder='Your Email' required />
         <textarea name="message" rows="7" placeholder='Your Message' required />
         <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact