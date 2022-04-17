import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

export const DetailsContext = createContext('Allah');

const Service = ({service}) => {
  //use navigation
  const navigate = useNavigate();

  //Data Destructing
  const {id, price, name, img, description} = service;

  //Handle Details Page on CLick
  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  }
   return (
    <DetailsContext.Provider value={name}>
      <div className='g-5 col-sm-12 col-md-6 col-lg-4 mb-3'>
        <div onClick={() => handleDetails(id)} className="card mx-auto border-0">
            <img className='images' src={img} alt="" />
            <div className="card-body">
              <h5>{name}</h5>
              <p className='description'>{description}</p>
              <p className='price'>$ {price}</p>
            </div>
          </div>
      </div>
    </DetailsContext.Provider>
  );
};

export default Service;