import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import ApiUrl from "../BaseUrl";
function SellerRequests() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`${ApiUrl}/seller/getAll`).then((res) => {
      console.log(res.data);
      setCategories(res.data);
      console.log(categories);
    });
  }, []);





  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
          <ToastContainer />
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3">Request Sellers</h5>

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
                          <th>Brand Logo</th>
                          <th>Brand Name</th>
                          <th>Email</th>
                          <th>Number</th>
                          <th>Country</th>
                          <th>City</th>
                          <th>Status</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {categories?.map((item, index) => {
                            if(item.status === 'pending'){
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
                                        <td>{index+1}</td>
                                        <td>
                                          {" "}
                                          <div className="prod-img">
                                            <img
                                              src={`http://192.168.18.130:3003/images/${item?.brandLogo}`}
                                              alt=""
                                            />
                                          </div>
                                        </td>
                                        <td>{item?.brandName}</td>
                                        <td>{item?.email}</td>
                                        <td>{item?.country}</td>
                                        <td>{item?.city}</td>
                                        <td>{item?.phoneNo}</td>
                                        
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
                                          <div className="actions d-flex">
                                            <button
                                              onClick={() => {
                                                const params = {
        
                                                "id":item?._id,
                                                "status":"new",
        
        
                                                }
        
                                                axios
                                                  .put(
                                                    `${ApiUrl}/seller/updateById`,
                                                    params
                                                  )
                                                  .then((res) => {
                                                    console.log(res.data)


                                                    toast('status updated successfully')

                                                    axios.get(`${ApiUrl}/seller/getAll`).then((res) => {
                                                        console.log(res.data);
                                                        setCategories(res.data);
                                                        console.log(categories);
                                                      });
                                                    
                                                  });
                                              }}
                                              target="_blank"
                                              class="btn btn-sm btn-primary py-1"
                                            >
                                              Approved
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
                            <a className="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">»</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
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

export default SellerRequests;
