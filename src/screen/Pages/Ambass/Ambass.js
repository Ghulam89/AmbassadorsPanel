import React from "react";
import ScrollableSection from "../Dashboard/Dashbord";
import Nav from "../../../components/Nav";

import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";

function Ambass() {
  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Ambassadors</h5>
                <div className="row pb-4">
                  <div className="col-md-12">
                    <div className="counterbox">
                      Total Ambassadors{" "}
                      <span className="badge badge-primary">9</span>
                    </div>{" "}
                    <div className="counterbox">
                      Under Training Ambassadors{" "}
                      <span className="badge badge-primary">7</span>
                    </div>{" "}
                    <div className="counterbox">
                      Active Ambassadors{" "}
                      <span className="badge badge-primary">9</span>
                    </div>{" "}
                    <div className="counterbox">
                      In Active Ambassadors{" "}
                      <span className="badge badge-primary">0</span>
                    </div>{" "}
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
                              <h4> Manage Ambassador  Create / Update</h4>
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
                                    
                                      Experience Status
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Under Training</option>
                                        <option value="1">Verified</option>
                                      </select>
                                    </div>
                                  </div>
                                <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                    
                                      Service Post 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Trainer</option>
                                        <option value="1">City Head</option>
                                        <option value="1">Chief Ambassador</option>
                                        <option value="1">Expo Organiser</option>
                                        </select>
                                    </div>
                                    
                                  </div>

                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Your Name
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Your Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Your Email
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Your Email"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Contact Number
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Your Number"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Password
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Your Password"
                                      />
                                    </div>
                                  </div>



                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                       Profile Image
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
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >Youtube Video Id
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Youtube Video Link"
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


                                   <h3 className="pt-5">Additional Information</h3>
                                   <hr/>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                     Joining as
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">Ambassador</option>
                                        <option value="1">Participent</option>
                                      </select>
                                    </div>
                                  </div>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                     Highest Qualification
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="highest qualification"
                                      />
                                      
                                    </div>
                                  </div>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                     Gender Skills
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder=" Gender Skills"
                                      />
                                      
                                    </div>
                                  </div>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                     Marketing Skills
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder=" Gender Skills"
                                      />
                                      
                                    </div>
                                  </div>
                                   <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                    Before Experience
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Before Experience"
                                      />
                                      
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
                                       Id Card Front Image
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
                                       Id Card Back Image
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
                                       CV Upload
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
                                     
                                    Bank Account Title
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder=" 
                                        Bank Account Title"
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                    Bank Account Number
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="   
                                        Bank Account Number"
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                     
                                    Bank Name
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="     Bank Name"
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  
                                     Bank Branch Code 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="    Bank Branch Code "
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  
                             
                                  Mobile Account Title
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="         Mobile Account Title "
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  
                             
                                  Mobile Account No
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="          Mobile Account No "
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  
                             
                                  Describe Yourself
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="          Mobile Account No "
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  
                             
                                  registration  no
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="
                                        registration  no"
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                  

Chamber of commerce & Industry Registration no
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                    <input
                                        type="text"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="
                                        "
                                      />
                                      
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                       
                                        Business Logo (pdf)
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Sort Order</th>
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
                              <img src={require("./p1.jpg")} alt="" />
                            </div>
                          </td>
                          <td>Best Choice Soap</td>
                          <td>$95.12</td>
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

export default Ambass;
