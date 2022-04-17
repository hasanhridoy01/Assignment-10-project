import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import images from '../../../img/Gallery/photo_01 (1).jpg';
import { DetailsContext } from '../Service/Service';
import './Details.css';

const Details = () => {
  const { detailsId } = useParams();
  const name = useContext(<DetailsContext></DetailsContext>);
  return (
    <div className='container details'>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-6">
          <div className="card border-0 p-2">
            <h3>Labolatory Tests {name} : {detailsId}</h3>
            <p className='mb-0'>Maecenas facilisis metus sed leo aliquam, a accumsan dui posuere. In aliquet pharetra venenatis. Ut ac justo et tortor pharetra dignissim condimentum feugiat velit. Suspendisse potenti.Curabitur velit eros, lobortis eget nisi eget, scelerisque venenatis purus. Vestibulum felis lectus, bibendum in pulvinar sed, suscipit gravida arcu. Sed orci odio, aliquet eget euismod sit amet, porttitor in lacus. Nulla sit amet velit pretium, accumsan enim ut, euismod elit. Nullam consequat metus eget elit ultricies, ut mattis erat rhoncus. Nulla lorem justo, scelerisque sit amet erat at, pulvinar commodo enim. Duis consequat, mi in volutpat euismod, arcu eros venenatis est, quis bibendum elit diam nec enim.</p>
            <p className='mt-0'>$ 100.33</p>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className='btn btn-danger w-25'>Add To Cart</button>
            {/* Modal-Start */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">CheckOut</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Phone Number</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                      </div>
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Services Name</label>
                        <input type="text" class="form-control" />
                      </div>
                      <button type="submit" class="btn btn-info">Submit</button>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <h4>Thank You </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal-End */}
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