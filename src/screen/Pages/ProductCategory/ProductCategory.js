import React from "react";
import ScrollableSection from "../Dashboard/Dashbord";
import Nav from "../../../components/Nav";

import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function ProductCategory() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Product Categories</h5>
               

                <div className="min-box  border">
                  <div className="products-actions d-flex p-4">
                    <div className="imort-product ">
                      <div className="btn-product d-flex">
                        <div className="imp-btn">
                          <button className="p-btn-2">
                            <BiExport />
                            <span className="px-1">Export</span>
                          </button>
                        </div>
                        <div className="exp-btn px-3">
                          <button className="p-btn">
                            <BiImport />
                            <span className="px-1">Import</span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="action-btn">
                      <div className="actions d-flex">
                        <div className="Bulk-btn">
                          <button
                            className="bulk-btn"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight"
                            aria-controls="offcanvasRight"
                          >
                            <FiEdit />
                            <span className="px-1">Bulk Action</span>
                          </button>
                        </div>
                        <div className="Del-btn px-3">
                          <button
                            className="del-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          >
                            <RiDeleteBinLine />
                            <span className="px-1">Delete</span>
                          </button>
                        </div>
                        <button
                          className="add-btn"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <AiOutlinePlus />
                          <span className="px-1"> Add Products</span>
                        </button>
                        {/* Modal-Del */}
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog">
                            <div class="modal-content py-4">
                              <div class="modal-body">
                                <div className="modal-icon">
                                  <span
                                    style={{ fontSize: 35, color: "#f05252" }}
                                    className="px-3"
                                  >
                                    <RiDeleteBinLine />
                                  </span>
                                </div>
                                <h1 class="title py-3">
                                  Are You Sure! Want to Delete{" "}
                                  <span style={{ color: "#f05252" }}>
                                    Selected Products?
                                  </span>
                                </h1>
                                <p className="para">
                                  Do you really want to delete these records?
                                  You can't view this in <br /> your list
                                  anymore if you delete!
                                </p>
                                ...
                                <div className="last-btn">
                                  <button
                                    type="button"
                                    class="btn  btn-light mx-4 py-2 px-4"
                                    data-bs-dismiss="modal"
                                  >
                                    No,Keep It
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-success py-2 px-4"
                                  >
                                    Yes, Delete It
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4>Manage Product Category  Create / Update</h4>
                              <p>
                                Update products info, combinations and extras.
                              </p>
                            </div>

                            <button
                              type="button"
                              className="btn-close bg-white shadow rounded-5 text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                              style={{
                                width: "5px",
                                height: "30px",
                                opacity: "0.8",
                                fontSize: "12px",
                              }}
                            />
                          </div>
                          {/* Canvas */}
                          <div className="offcanvas-body p-0">
                            <div className="form-data">
                              <div className="wrap-data p-5">
                                <form>
                              
                                <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >   Category Title
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Category Title"
                                      />
                                    </div>
                                  </div>
                               
                                  

                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Status
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Active</option>
                                        <option value="1">Inactive</option>
                                      </select>
                                    </div>
                                  </div>


                                  
                               
                                </form>
                              </div>
                            </div>
                          </div>
                          <div className="offcanvas-footer px-5 py-3">
                            <div className="content-footer">
                              <div className="row">
                                <div className="col-lg-6 col-md-12 py-3">
                                  <button
                                    type="button"
                                    class="cancel-btn btn-lg"
                                  >
                                    Cancel
                                  </button>
                                </div>
                                <div className="col-lg-6 col-md-12 py-3">
                                  <button
                                    type="button"
                                    class="add-last-btn btn-lg"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Canvas */}
                        </div>
                      </div>
                    </div>
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
                          <th>Title</th>
                          <th>Admin Share</th>
                          <th>Ambassador Share</th>
                          <th>Sort Order</th>
                          <th>Status</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                          1112
                          </td>
                          
                          <td>
                            0.5
                          </td>
                          <td>ELECTRONICS</td>
                          <td>0.5</td>
                          <td>0.5</td>
                          <td>625</td>
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
                              Active
                            </span>
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

export default ProductCategory;
