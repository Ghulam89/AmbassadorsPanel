import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ERacks from "../E-Racks/ERacks";
import EStock from "../E_Stock/EStock";
import Services from "../Servicesx/Services";
function AddSellerDetails() {
 
   const   {id} =  useParams()


  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Store Details</h5>

                <ul
                  class="nav nav-pills mb-3 d-flex "
                  id="pills-tab"
                  role="tablist"
                  style={{ gap: "12px" ,justifyContent:'flex-start'}}
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      E-racks
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                           E-Stocks
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-service-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-service"
                      type="button"
                      role="tab"
                      aria-controls="pills-service"
                      aria-selected="false"
                    >
                           E-Services
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                  >
                    {/* <div className="row pb-4">
                      <div className="col-md-12">
                        <div className="counterbox">
                          Total AddSellerDetailss{" "}
                          <span className="badge badge-primary">9</span>
                        </div>{" "}
                        <div className="counterbox">
                          Under Training AddSellerDetailss{" "}
                          <span className="badge badge-primary">7</span>
                        </div>{" "}
                        <div className="counterbox">
                          Active AddSellerDetailss{" "}
                          <span className="badge badge-primary">9</span>
                        </div>{" "}
                        <div className="counterbox">
                          In Active AddSellerDetailss{" "}
                          <span className="badge badge-primary">0</span>
                        </div>{" "}
                      </div>
                    </div>
                    <div className="min-box my-4">
                      <div className="products-table">
                        <table
                          className="table border rounded align-middle"
                          style={{ borderColor: "#4f4f51" }}
                        >
                          <thead className="bg-light">
                            <tr>
                              <th>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  id="flexCheckDefault"
                                />
                              </th>
                              <th>#Id</th>
                              <th>Image</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Gender</th>
                              <th>Number</th>
                              <th>Office Address</th>
                              <th>Status</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {categories?.map((item, index) => {
                              if (item?.status === "new") {
                                return (
                                  <>
                                    <tr>
                                      <td>
                                        {" "}
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          value=""
                                          id="flexCheckDefault"
                                        />
                                      </td>
                                      <td>{index + 1}</td>
                                      <td>
                                        {" "}
                                        <div className="prod-img">
                                          <img
                                            src={`${ApiUrl}/images/${item?.brandLogo}`}
                                            alt=""
                                          />
                                        </div>
                                      </td>
                                      <td>{item?.name}</td>
                                      <td>{item?.email}</td>
                                      <td>{item?.gender}</td>
                                      <td>{item?.phoneNo}</td>
                                      <td>{item?.officeAddress}</td>
                                      <td>
                                        <span
                                          className="text-ligh  "
                                          style={{
                                            color: "#278a1a",
                                            fontSize: "10px",
                                            backgroundColor: "#41ff2848",
                                            borderRadius: 20,
                                            padding: "5px 10px",
                                          }}
                                        >
                                          {item?.status}
                                        </span>
                                      </td>

                                      <td>
                                        <div className="actions">
                                          <button
                                            onClick={() => {
                                              localStorage.setItem(
                                                "myUserId",
                                                item?._id
                                              );
                                            }}
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRight"
                                            aria-controls="offcanvasRight"
                                            class="btn btn-sm btn-primary py-1"
                                          >
                                            <i class="fa fa-file-invoice"></i>{" "}
                                            Create Store
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  </>
                                );
                              }
                            })}
                          </tbody>
                        </table>
                        <div className="data-pagination px-4 d-flex">
                          <p>SHOWING 41-60 OF 308</p>

                          <nav aria-label="Page navigation example">
                            <ul className="pagination">
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Previous"
                                >
                                  <span aria-hidden="true">«</span>
                                </a>
                              </li>
                              <li className="page-item">
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
                                <a className="page-link" href="#">
                                  4
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  5
                                </a>
                              </li>
                              <li className="page-item">
                                <a className="page-link" href="#">
                                  6
                                </a>
                              </li>
                              <li className="page-item">
                                <a
                                  className="page-link"
                                  href="#"
                                  aria-label="Next"
                                >
                                  <span aria-hidden="true">»</span>
                                </a>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div> */}
                    <ERacks  />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                   
                   <EStock />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                   
                   <EStock />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-service"
                    role="tabpanel"
                    aria-labelledby="pills-service-tab"
                  >
                   
                   <Services />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default AddSellerDetails;
