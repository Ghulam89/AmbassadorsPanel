import React from "react";


import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Transactions() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Transactions History <span style={{color:'red'}}> Payable Balance : PKR 0</span></h5>


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
                          <th>Receipt</th>
                          <th>Detail</th>
                          <th>Amount (PKR)</th>
                          <th>Date</th>
                          
                      
                          <th>Status</th>
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
                              <img src={require("../../assets/images/p1.jpg")} alt="" />
                            </div></td>
                          <td>deserrtuuu</td>
                          <td>12122</td>

                          <td>120</td>
                          <td>
                            
                             Paid
                           
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

export default Transactions;
