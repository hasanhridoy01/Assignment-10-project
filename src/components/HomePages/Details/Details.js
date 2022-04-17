import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../../img/Gallery/photo_01 (1).jpg';
import { DetailsContext } from '../Service/Service';
import './Details.css';

const Details = () => {
  const {detailsId} = useParams();
  const name = useContext(<DetailsContext></DetailsContext>);
  return (
    <div className='container details'>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card border-0 p-2">
            <h3>Labolatory Tests {name} : {detailsId}</h3>
            <p>Maecenas facilisis metus sed leo aliquam, a accumsan dui posuere. In aliquet pharetra venenatis. Ut ac justo et tortor pharetra dignissim condimentum feugiat velit. Suspendisse potenti.Curabitur velit eros, lobortis eget nisi eget, scelerisque venenatis purus. Vestibulum felis lectus, bibendum in pulvinar sed, suscipit gravida arcu. Sed orci odio, aliquet eget euismod sit amet, porttitor in lacus. Nulla sit amet velit pretium, accumsan enim ut, euismod elit. Nullam consequat metus eget elit ultricies, ut mattis erat rhoncus. Nulla lorem justo, scelerisque sit amet erat at, pulvinar commodo enim. Duis consequat, mi in volutpat euismod, arcu eros venenatis est, quis bibendum elit diam nec enim. Donec consequat diam fermentum nisl egestas, eu lobortis mi facilisis. Integer ante velit, interdum eget est sit amet, aliquet lacinia nibh.</p>
            <p>$ 100.33</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card border-0">
            <img className='details-img' src={images} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;