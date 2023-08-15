import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio2.jpg'
import IMG2 from '../../assets/portfolio4.jpg'
import IMG3 from '../../assets/portfolio5.png'
import IMG4 from '../../assets/img3.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mariajosematar" className='btn btn-primary' target='_blank'>Github</a>
            <a href="https://github.com/mariajosematar/portfolio" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Nest App</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mariajosematar" className='btn btn-primary' target='_blank'>Github</a>
            <a href="https://github.com/mariajosematar/nestApp" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>API rest</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mariajosematar" className='btn btn-primary' target='_blank'>Github</a>
            <a href="https://github.com/mariajosematar/APIrest" className='btn' target='_blank'>Live Demo</a>
          </div>  
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Battleship Python Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/mariajosematar" className='btn btn-primary' target='_blank'>Github</a>
            <a href="https://github.com/mariajosematar/Battleship-Python3" className='btn' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio