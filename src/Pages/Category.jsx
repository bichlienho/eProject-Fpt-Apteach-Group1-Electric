import React, { useState, useEffect } from "react";
import CateProduct from "../json/Product.json";
import Brand from "../json/Brand.json";
import Cate from "../json/Category.json";
import { useParams } from "react-router-dom";

function Category({ handleAdd }) {
  //set list để map hiển thị sản phẩm
  const [items, setItems] = useState(CateProduct);
  const [checked, setChecked] = useState([]);
  const Keyparam = useParams();
  const applyFilters = () => {
    //load san pham category theo id
    if (Keyparam.id) {
      const itemsbyid = CateProduct.filter(
        (temp) => temp.cate[0].id.toString() === Keyparam.id
      );
      setItems(itemsbyid);
    }
    //
  };

  var updatedList = [...checked];
  const handleCheckedBrand = (id) => {
    const itemsbybrand = CateProduct.filter((items) => {
      return items.brand[0].id == id && items.cate[0].id == Keyparam.id;
    });
    setItems(itemsbybrand);
  };

  //load lại trang
  useEffect(() => {
    applyFilters();
  }, [setChecked]);

  const [currentPage, setCurrentPage] = useState(1); //so trang ban dau mac dinh la 1
  const recordsPerPage = 8; //so san pham tren 1 trang
  const lastIndex = currentPage * recordsPerPage; //trang cuoi dung
  const firstIndex = lastIndex - recordsPerPage; //trang dau tien
  const records = items.slice(firstIndex, lastIndex); //tong dong du lieu
  const npage = Math.ceil(items.length / recordsPerPage); //so trang
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [sname, setName] = useState("");

  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="row px-xl-5">
          <div class="col-lg-3 col-md-12">
            <div class="border-bottom mb-4 pb-4">
              <h5 class="font-weight-semi-bold mb-4">Categories</h5>
              {Cate.map((citem, i) => (
                <div class="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <a
                    href={`/category/${citem.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    {citem.name}
                  </a>
                </div>
              ))}
            </div>
            <div class="border-bottom mb-4 pb-4">
              <h5 class="font-weight-semi-bold mb-4">Brand</h5>
              {Brand.map((bitem, i) => (
                <div class="custom-control custom-checkbox d-flex align-items-center mb-3">
                  <input
                    type="checkbox"
                    value={bitem.id}
                    onChange={(e) => handleCheckedBrand(bitem.id)}
                  />
                  &nbsp;
                  {bitem.name}
                  <label></label>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-9 col-md-12">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <form action="">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name"
                        onChange={(e) => setName(e.target.value)}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary">
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {records
                .filter((timitem) => {
                  return sname.toLowerCase() === ""
                    ? timitem
                    : timitem.name.toLowerCase().includes(sname);
                })
                .map((bitem, i) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 pb-1" key={i}>
                    <div className="card product-item border-0 mb-4">
                      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                        <img
                          className="img-fluid w-100"
                          src={bitem.image}
                          alt={bitem.name}
                        />
                      </div>
                      <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                        <h6 className="text-truncate mb-3">{bitem.name}</h6>
                        <div className="d-flex justify-content-center">
                          <h6>${bitem.new_price}</h6>
                          <h6 className="text-muted ml-2">
                            <del>${bitem.old_price}</del>
                          </h6>
                        </div>
                      </div>
                      <div className="card-footer d-flex justify-content-between bg-light border">
                        <a
                          href={`/detail/${bitem.id}`}
                          className="btn btn-sm text-dark p-0"
                        >
                          <i className="fas fa-eye text-primary mr-1"></i>View
                          Detail
                        </a>
                        <button
                          className="btn btn-sm text-dark p-0"
                          type="button"
                          onClick={() => handleAdd(bitem)}
                        >
                          <i className="fas fa-shopping-cart text-primary mr-1"></i>
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="col-12 pb-1">
                <ul className="pagination mt-4">
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={prePage}>
                      Prev
                    </a>
                  </li>
                  {numbers.map((n, i) => (
                    <li
                      className={`page-item ${
                        currentPage === n ? "active" : ""
                      }`}
                      key={i}
                    >
                      {" "}
                      <a
                        href="#"
                        className="page-link"
                        onClick={() => changeCPage(n)}
                      >
                        {n}
                      </a>
                    </li>
                  ))}
                  <li className="page-item">
                    <a href="#" className="page-link" onClick={nextPage}>
                      Prev
                    </a>
                  </li>
                </ul>
              </div>

              {/* <div className="col-12 pb-1">
                <nav aria-label="Page navigation">
                  <ul className="pagination justify-content-center mb-3">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //ham trang truoc do
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  //ham cac trang
  function changeCPage(id) {
    setCurrentPage(id);
  }
  //ham trang tiep theo
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default Category;
