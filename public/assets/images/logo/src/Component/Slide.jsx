import React from "react";

function Slide() {
  return (
    <div className="col-lg-12">
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="img-fluid"
              src="/assets/images/banner/amtoshi.jpeg"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3">
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  Homepages
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Harvel Electric
                </h3>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="img-fluid"
              src="/assets/images/banner/ampana.jpg"
              alt="Image"
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3">

                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Harvel Electric
                </h3>
                <a href="" className="btn btn-light py-2 px-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          data-slide="prev"
        >
          <div className="btn btn-dark">
            <span className="carousel-control-prev-icon mb-n2"></span>
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          data-slide="next"
        >
          <div className="btn btn-dark">
            <span className="carousel-control-next-icon mb-n2"></span>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Slide;
