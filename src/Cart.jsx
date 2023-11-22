import { useState } from "react";
import Nav from './Nav';

function Cart({details}) {
  return (

    <>
        <div className="col mb-5">
        <div className="card h-100">
          <div
            className="badge bg-dark text-white position-absolute"
            style={{top: '0.5rem', right: '0.5rem'}}
          >
            {details.imgName}
          </div>
          <img
            className="card-img-top"
            src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{details.headName} </h5>
              <span className="text-muted text-decoration-line-through">
                ${details.originalPrice}.00
              </span>
              ${details.discountedPrice}.00
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <a className="btn btn-outline-dark mt-auto" href="#">
                {details.last}
              </a>
            </div>
          </div>
        </div>
        </div>
    </>
  );
}

export default Cart;
