import React from 'react';
import phoneImg from './images/phone.svg';
import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmeu } = useGlobalContext();

  return (
    <section className='hero'>
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of company of all sizes - from start-ups to fortune 500-
            uses stripe softwares and APIs to accept payment, send out payment
            and manage their bussiness online{' '}
          </p>
          <button className='btn'>start now</button>
        </article>

        <article className='hero-images'>
          <img
            className='phone-img'
            src={phoneImg}
            alt='phone image'
          />
        </article>
      </div>
    </section>
  );
};

export default Hero;
