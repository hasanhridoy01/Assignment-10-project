import React, { useEffect, useState } from 'react';
import Gallery from '../Gallery/Gallery';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch('services.json')
    .then(response => response.json())
    .then(data => setService(data));
  },[])
  return (
    <div className='container mt-5 mb-5'>
      <div className="row">
        <h1 className='d-block mx-auto'>Services</h1>
        {
          services.map(service => <Service key={service.id} service={service}></Service>)
        }
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;