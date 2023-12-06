import React from "react";
import Slide from "../Component/Slide";
import Trandy from "../json/Trandy.json";
import Vip from "../json/Vip.json";
function Home({handleAdd}) {
  return (
    <div>
      <div className="container-fluid">
        <div className="row border-top px-xl-5">
          <Slide />
        </div>
      </div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
              <h1 className="fa fa-check text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
              <h1 className="fa fa-shipping-fast text-primary m-0 mr-2"></h1>
              <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
              <h1 className="fas fa-exchange-alt text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
            <div className="d-flex align-items-center border mb-4">
              <h1 className="fa fa-phone-volume text-primary m-0 mr-3"></h1>
              <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="row px-xl-5 pb-3">
          {Vip.map((vitem, i) => (
            <div className="col-lg-4 col-md-6 pb-1">
              <div className="cat-item d-flex flex-column border mb-4">
                <a
                  href={`/detail/${vitem.id}`}
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img
                    className="img-fluid"
                    src={vitem.image}
                    alt={vitem.name}
                  />
                </a>
                <h5 className="font-weight-semi-bold m-0">{vitem.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
              <img src="img/offer-1.png" alt="" />
              <div class="position-relative">
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Hot Collection</h1>
              </div>
            </div>
          </div>
          <div class="col-md-6 pb-4">
            <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
              <img src="img/offer-2.png" alt="" />
              <div class="position-relative">
                <h5 class="text-uppercase text-primary mb-3">
                  20% off the all order
                </h5>
                <h1 class="mb-4 font-weight-semi-bold">Harvel Collection</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5">
        <div className="text-center mb-4">
          <h2 className="section-title px-5">
            <span className="px-2">Best Seller</span>
          </h2>
        </div>

        <div className="row px-xl-5 pb-3">
          {Trandy.map((titem, i) => (
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img className="img-fluid w-100" src={titem.image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">{titem.name}</h6>
                  <div className="d-flex justify-content-center">
                    <h6>${titem.new_price}</h6>
                    <h6 className="text-muted ml-2">
                      <del>${titem.old_price}</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a
                    href={`/detail/${titem.id}`}
                    className="btn btn-sm text-dark p-0"
                  >
                    <i className="fas fa-eye text-primary mr-1"></i>View Detail
                  </a>
                  <button
                          className="btn btn-sm text-dark p-0"
                          type="button"
                          onClick={() => handleAdd(titem)}
                        >
                          <i className="fas fa-shopping-cart text-primary mr-1"></i>
                          Add To Cart
                        </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
