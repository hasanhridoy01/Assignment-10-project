import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner from '../../../img/banner.png';
import banner2 from '../../../img/banner2.png';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <Carousel className='mt-5'>
        <Carousel.Item>
          <img
            className="d-block w-100 img"
            src={banner}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='text-name'>Hi! my name is John Smith</h1>
            <h1 className='text2'>i am a Doctor.</h1>
            <a className='btn btn-danger mb-4' href='/about'>About Me</a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;