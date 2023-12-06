import React from "react";
import { useParams } from "react-router-dom";
import Prodetail from "../json/Product.json";
function Detail() {
  const { id } = useParams();
  let items = Prodetail.filter((items) => items.id == id);
  items = items[0];

  return (
    <div>
      <div className="container-fluid bg-secondary mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="font-weight-semi-bold text-uppercase mb-3">
            Shop Detail
          </h1>
          <div className="d-inline-flex">
            <p className="m-0">
              <a href="">Home</a>
            </p>
            <p className="m-0 px-2">-</p>
            <p className="m-0">Shop Detail</p>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 pb-5">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner border">
                <div className="carousel-item active">
                  <img className="w-100 h-100" src={items.image} alt="Image" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 pb-5">
            <h3 className="font-weight-semi-bold">{items.name}</h3>
            <h3 className="font-weight-semi-bold mb-4">${items.new_price}</h3>
            <p className="mb-4">{items.desc}</p>
            <div className="d-flex mb-3">
              <p className="text-dark font-weight-medium mb-0 mr-3">
                Brand: {items.brand[0].name}
              </p>
            </div>
            <div className="d-flex mb-4">
              <p className="text-dark font-weight-medium mb-0 mr-3">
                Category: {items.cate[0].name}
              </p>
            </div>
            <div className="d-flex align-items-center mb-4 pt-2">
              <button className="btn btn-primary px-3">
                <i className="fa fa-shopping-cart mr-1"></i> Add To Cart
              </button>
            </div>

            <a
              download=""
              className="btn btn-sm btn-primary"
              href={items.file}
              target="_blank"
            >
              Download Information Product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
