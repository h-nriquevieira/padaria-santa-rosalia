import React from 'react';

import './About.css'

import img1 from '../../assets/about-us-1.jpg'
import img2 from '../../assets/about-us-2.jpg'
import img3 from '../../assets/about-us-3.jpg'
import img2Mobile from '../../assets/about-us-2-mobile.jpg'


function About() {
  return (
      <section className="about">
          <img src={img1} alt="" className="about--img mobile-hidden" />
          <picture>
            <source srcSet={img2} media='(min-width:1024px)' />
            <img src={img2Mobile} alt="" className="about--img about--img--mobile" />
          </picture>
          <div className="about--text">
              <h2>Sobre Nós</h2>
              <p>Desde 1974 uma padaria na cidade de Sorocaba, proporcionando qualidade e tradição.</p>
          </div>
          <img src={img3} alt="" className="about--img mobile-hidden" />
      </section>
  );
}

export default About;