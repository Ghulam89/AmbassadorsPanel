import React from "react";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import {AiOutlinePlus}  from "react-icons/ai";
 
function Product() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Products</h5>
                
                <div className="min-box border my-4">
                <div className="products-form p-4 ">
                  <form>
                    <div className="row">
                      <div className="col-md-4">


                        <input

                          type="text"
                          className="form-control-input"

                          placeholder='Products'

                        />


                      </div>
                      <div className="col-md-3">
                        <select className="form-control-input " >
                          <option selected="">-Category-</option>
                          <option value={1}>shoes</option>
                          <option value={2}>Watch</option>
                         
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="form-control-input" >
                          <option selected="">-Select Seller-</option>
                          <option value={1}>Mustafa</option>
                          <option value={2}>Adnan</option>
                          <option value={3}>Ali</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                      <button class="add-btn w-100" type="button" ><span class="px-1">Search</span></button>
                      </div>
                    </div>

                  </form>

                </div>




              </div>

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
                        {/* Modal-Del */}
                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4>Manage Product  Create / Update</h4>
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
                                <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                    Seller
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Ghulam Mustafa</option>
                                        <option value="1">Adnan</option>
                                        <option value="1">Ali</option>
                                      </select>
                                    </div>
                                  </div>
                                <div className="row  pt-4  align-items-center">
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
                                        <option value="1">Shoes</option>
                                        <option value="1">Watch</option>
                                     
                                        </select>
                                    </div>
                                    
                                  </div>

                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Title
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Title"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                       Product Price
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder=" Product Price"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      Discount(eg. % )
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Discount"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      

Discounted Price
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Discounted Price"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      

Unit
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Unit"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      

Quantity
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Quantity"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      

Currency
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Quantity"
                                      />
                                    </div>
                                  </div>

                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >Admin Commission
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Admin Commission"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >Ambassador Commission
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Ambassador Commission"
                                      />
                                    </div>
                                  </div>

                                 
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                
                                     Delivery
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">National </option>
                                        <option value="1">International </option>
                                      </select>
                                    </div>
                                  </div>
                                 
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                     Country
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Pakistan</option>
                                        <option value="1">China</option>
                                      </select>
                                    </div>
                                  </div>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                    City
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="City"
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                       Image
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="col-span-8 sm:col-span-4">
                                        <div className="w-full text-center">
                                          <div
                                            className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-3 cursor-pointer px-6 pt-5 pb-4"
                                            role="button"
                                            tabIndex={0}
                                            style={{
                                              borderStyle: "dotted",
                                              borderColor: "#0E9F6E",
                                            }}
                                          >
                                            <input
                                              accept="image/*"
                                              multiple=""
                                              type="file"
                                            />
                                            <span className="mx-auto flex justify-center">
                                              <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-3xl text-green-500"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <polyline points="16 16 12 12 8 16" />
                                                <line
                                                  x1={12}
                                                  y1={12}
                                                  x2={12}
                                                  y2={21}
                                                />
                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                                <polyline points="16 16 12 12 8 16" />
                                              </svg>
                                            </span>
                                            <p className="text-sm mt-2">
                                              Drag your images here
                                            </p>
                                            <em className="text-xs text-gray-400">
                                              (Only *.jpeg, *.webp and *.png
                                              images will be accepted)
                                            </em>
                                          </div>
                                          <div className="text-green-500" />
                                          <aside className="flex flex-row flex-wrap mt-4" />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                    
                                      Upload multiple product images
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <div className="col-span-8 sm:col-span-4">
                                        <div className="w-full text-center">
                                          <div
                                            className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-3 cursor-pointer px-6 pt-5 pb-4"
                                            role="button"
                                            tabIndex={0}
                                            style={{
                                              borderStyle: "dotted",
                                              borderColor: "#0E9F6E",
                                            }}
                                          >
                                            <input
                                              accept="image/*"
                                              multiple=""
                                              type="file"
                                            />
                                            <span className="mx-auto flex justify-center">
                                              <svg
                                                stroke="currentColor"
                                                fill="none"
                                                strokeWidth={2}
                                                viewBox="0 0 24 24"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="text-3xl text-green-500"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                              >
                                                <polyline points="16 16 12 12 8 16" />
                                                <line
                                                  x1={12}
                                                  y1={12}
                                                  x2={12}
                                                  y2={21}
                                                />
                                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                                <polyline points="16 16 12 12 8 16" />
                                              </svg>
                                            </span>
                                            <p className="text-sm mt-2">
                                              Drag your images here
                                            </p>
                                            <em className="text-xs text-gray-400">
                                              (Only *.jpeg, *.webp and *.png
                                              images will be accepted)
                                            </em>
                                          </div>
                                          <div className="text-green-500" />
                                          <aside className="flex flex-row flex-wrap mt-4" />
                                        </div>
                                      </div>
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
                          className="offcanvas offcanvas-end"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4>Manage Service Create / Update</h4>
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
                               
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >    Admin Ambassador
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="  Admin Ambassador"
                                      />
                                    </div>
                                  </div>



                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      Admin Commission
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="    Admin Commission"
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
                          <th>#Amb Id</th>
                          <th>Image</th>
                          <th>Category</th>
                          <th>Seller</th>
                          <th>Quantity</th>
                          <th>Price(Rs)</th>
                          <th>Featured</th>
                          <th>Sort  Order</th>
                          <th>Approved</th>
                          <th>Status</th>
                          <th>ACTIONS</th>
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
                          <td>MP792322</td>
                          <td>
                            {" "}
                            <div className="prod-img">
                              <img src={require("../../../assets/images/p1.jpg")} alt="" />
                            </div>
                          </td>
                          <td>ELECTRONICS</td>
                          <td>Mustafa</td>
                          <td>625</td>
                          <td>1200</td>
                   
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
                              Yes
                            </span>
                          </td>
                          <td><input id="orderid4" type="text" name="orderid4" value="1" class="form-control" size="3"/></td>
                          <td><span style={{color:'green'}}>Approved</span></td>
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

export default Product;
