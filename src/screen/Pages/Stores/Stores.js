import React from "react";
import ScrollableSection from "../Dashboard/Dashbord";
import Nav from "../../../components/Nav";

import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Stores() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3">Manage Store Requests</h5>


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
                          <th>#ID</th>
                          <th>Image</th>
                          <th>Brand Name</th>
                          <th>Name</th>
                          <th>Country</th>
                          <th>City</th>
                      
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
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
                          <td>#12</td>
                          <td>  <div className="prod-img">
                              <img src={require("../../../assets/images/p1.jpg")} alt="" />
                            </div></td>
                          <td>deserrtuuu</td>
                          <td>	Ghulam Mustafa</td>

                          <td>Pakistan</td>
                          <td>
                            
                              Sargodha
                           
                          </td>

                          <td>
                            <div className="actions d-flex">
                              <span style={{ fontSize: 21 }}>
                                <FiEdit />
                              </span>
                              <span style={{ fontSize: 21 }} className="px-3">
                                <RiDeleteBinLine />
                              </span>
                            </div>
                          </td>
                        </tr>
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

export default Stores;
