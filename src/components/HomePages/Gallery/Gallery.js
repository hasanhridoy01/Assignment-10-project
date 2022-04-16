import React from 'react';
import images1 from '../../../img/Gallery/photo_01 (1).jpg';
import images2 from '../../../img/Gallery/photo_02.jpg';
import images3 from '../../../img/Gallery/photo_03.jpg';
import images4 from '../../../img/Gallery/photo_05.jpg';
import images5 from '../../../img/Gallery/photo_07.jpg';
import images6 from '../../../img/Gallery/photo_08.jpg';

const Gallery = () => {
  return (
    <div className='mt-5 mb-5'>
      <h1>Gallery</h1>
      <div className="row mt-5">
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
        <div className="card border-0">
          <img className='images' src={images1} alt="" />
        </div>
      </div>
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="card border-0">
          <img className='images' src={images2} alt="" />
        </div>
      </div>
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="card border-0">
          <img className='images' src={images3} alt="" />
        </div>
      </div>
      </div>
      <div className="row">
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
        <div className="card border-0">
          <img className='images' src={images4} alt="" />
        </div>
      </div>
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="card border-0">
          <img className='images' src={images5} alt="" />
        </div>
      </div>
      <div className="g-2 col-sm-12 col-md-6 col-lg-4">
      <div className="card border-0">
          <img className='images' src={images6} alt="" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Gallery;