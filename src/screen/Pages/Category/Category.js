import React from "react";
import ScrollableSection from "../Dashboard/Dashbord";
import Nav from "../../../components/Nav";

import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Category() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3">Manage Product Categories</h5>

                <div className="min-box  border">
                  <div className="products-actions d-flex p-4">
                    <div className="imort-product ">
                      <div className="btn-product d-flex">
                        <div className="imp-btn">
                          <button className="p-btn-2 btn-md">
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

                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage Category  Create / Update</h4>
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
                        
                                    <div className="row g-4 pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                     Category   Title
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="password"
                                          id="inputPassword6"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Title"
                                        />
                                      </div>
                                    </div>
                                    <div className="row  pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                        Parent Category
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                          class="form-control-input-2"
                                          aria-label="Default select example"
                                        >
                                          <option value="1">No Parent</option>
                                          <option value="1">Creative Arts & Media </option>
                                          <option value="1">Healthcare & Medicine</option>
                                 
                                          <option value="1">Literature</option>
                                          <option value="1">Nature &  Environment</option>
                                          <option value="1">Live Streaming</option>
                                        </select>
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
                        {/* Modal-Del */}
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
                        <div
                          className="offcanvas offcanvas-end w-75"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4> Add Products</h4>
                              <p>Add products info, combinations and extras.</p>
                            </div>

                            <button
                              type="button"
                              className="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            />
                          </div>
                          {/* Canvas */}
                          <div className="offcanvas-body p-0">
                            <div className="form-data">
                              <div className="wrap-data p-5">
                                <form>
                                  <div className="row  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Title/Name
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product Title/Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="row py-3  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Description
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="form-floating">
                                        <textarea
                                          className="form-control-input"
                                          placeholder="Product Description"
                                          id="floatingTextarea2"
                                          style={{ height: 100 }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row   align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Images
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="form-floating">
                                        <input
                                          className="form-control-input"
                                          type="file"
                                          id="formFile"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row py-3 align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product SKU
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product SKU"
                                      />
                                    </div>
                                  </div>
                                  <div className="row   align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Barcode
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product Barcode"
                                      />
                                    </div>
                                  </div>
                                  <div className="row  py-3  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Category
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option selected>
                                          Select Category
                                        </option>
                                        <option value="1">
                                          No Option/ Available
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row   align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Default Category
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option selected>
                                          Default Category
                                        </option>
                                        <option value="1">
                                          No Option/ Available
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row py-3   align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Price
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div class="input-group flex-nowrap">
                                        <span
                                          class="input-group-text"
                                          id="addon-wrapping"
                                        >
                                          $
                                        </span>
                                        <input
                                          type="number"
                                          class="form-control-input-3"
                                          placeholder="0"
                                          aria-label="Username"
                                          aria-describedby="addon-wrapping"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row   align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Sale Price
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div class="input-group flex-nowrap">
                                        <span
                                          class="input-group-text"
                                          id="addon-wrapping"
                                        >
                                          $
                                        </span>
                                        <input
                                          type="number"
                                          class="form-control-input-3"
                                          placeholder="0"
                                          aria-label="Username"
                                          aria-describedby="addon-wrapping"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row  py-3  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Quantity
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product Quantity"
                                      />
                                    </div>
                                  </div>
                                  <div className="row    align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Slug
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product Slug"
                                      />
                                    </div>
                                  </div>
                                  <div className="row  py-3  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Product Tag
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Product Tag(Write then press enter to add new tag)"
                                      />
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
                                    {" "}
                                    Add Products
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
                          <th>#ID</th>
                          
                          <th>Title</th>
                          <th>Parent Category</th>
                         
                       
                          <th>Sort Order</th>

                          <th>Status</th>
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
                          <td>  Live Streaming</td>
                          <td>	Business & Management</td>
                      

                          <td><input id="orderid4" type="text" name="orderid4" value="1" class="form-control" size="3"/></td>
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

export default Category;
