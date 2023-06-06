import React, { useState, useEffect,useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";

import { AiOutlinePlus, AiFillDelete, AiFillCloseCircle } from "react-icons/ai";
import { Modal } from "antd";
import { AiOutlineZoomIn } from "react-icons/ai";
import ApiUrl from "../BaseUrl";
import { useParams } from "react-router-dom";
function ERacks() {

  const {id}=useParams()


  const [rackId,setRackId] = useState(null)

  console.log('===========',rackId);
  const [racks, setRacks] = useState([]);

  

  useEffect(() => {
    axios.get(`${ApiUrl}/e-rack/getByStoreID?id=` + id).then((res) => {
      console.log(res.data);
      setRacks(res.data);
      console.log(racks);
    });
  }, []);

  const sendData = (values) => {
    // const id = localStorage.getItem("myUserId");

    if (values?.rackcouts?.value?.length === 0) {
      toast("please Enter your your memberType");
    } else {
      const params = {
        storeID: id,
        rackcouts: values.rackcouts.value,
      };
      console.log(params);
      axios
        .post(`${ApiUrl}/e-rack/create`, params)

        .then((res) => {
          console.log(res.data);

          toast(" update successfully!");

          axios.get(`${ApiUrl}/e-rack/getByStoreID?id=` + id).then((res) => {
            console.log(res.data);
            setRacks(res.data);
            console.log(racks);
          });
          
        });
    }
  };

  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios.delete(`${ApiUrl}/e-rack/deleteByID?id=` + id).then((res) => {
          console.log(res.data);
        });
      },
    });
  };

  const updateSend = (values) => {
    // const id = localStorage.getItem("myUserId");

    if (values?.width?.value?.length === 0) {
      toast("please Enter your your width");
    } else if (values?.height?.value?.length === 0) {
      toast("please Enter your your height");
    } else if (values?.state?.value?.length === 0) {
      toast("please your  state");
    } else {
      const params = {
        id: rackId,
        width: values.width.value,
        height: values.height.value,
        state: values.state.value,
      };
      console.log(params);
      axios
        .put(`${ApiUrl}/e-rack/updateByID`, params)

        .then((res) => {
          console.log(res.data);

          toast(" update successfully!");
        });
    }
  };

  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <ToastContainer />
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage E-Racks</h5>

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

                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage E-Racks </h4>
                                <p>
                                  Update E-Stock info, combinations and extras.
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
                                  <form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      sendData(e.target);
                                    }}
                                  >
                                    <div className="row  pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Store Name
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                          name="experience"
                                          id="experience"
                                          class="form-control-input-2"
                                        >
                                          <option value="1">KFC</option>
                                          <option value="1"></option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="row  pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Select Number of Racks
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                          name="rackcouts"
                                          id="rackcouts"
                                          class="form-control-input-2"
                                        >
                                          <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6</option>
                                          <option value="7">7</option>
                                          <option value="8">8</option>
                                          <option value="9">9</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                        </select>
                                      </div>
                                    </div>

                                    <div></div>

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
                                              type="submit"
                                              class="add-last-btn btn-lg"
                                            >
                                              Save
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
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
                            <div class="modal-content">
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
                          <span className="px-1"> Add Racks</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

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
                          Do you really want to delete these records? You can't
                          view this in <br /> your list anymore if you delete!
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
                            onClick={() => {
                              const id = localStorage.getItem("myUserId");

                              const params = {
                                id: id,
                              };

                              axios
                                .post(
                                  "http://157.245.104.106:3003/embassador/delete",
                                  params
                                )
                                .then((res) => {
                                  console.log(res.data);

                                  toast("Sellerador updated successfully");
                                });
                            }}
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
                      <h4> Manage Seller Create / Update</h4>
                      <p>Update products info, combinations and extras.</p>
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
                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            sendData(e.target);
                          }}
                        >
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
                                name="experience"
                                id="experience"
                                class="form-control-input-2"
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
                                        <line x1={12} y1={12} x2={12} y2={21} />
                                        <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                        <polyline points="16 16 12 12 8 16" />
                                      </svg>
                                    </span>
                                    <p className="text-sm mt-2">
                                      Drag your images here
                                    </p>
                                    <em className="text-xs text-gray-400">
                                      (Only *.jpeg, *.webp and *.png images will
                                      be accepted)
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
                              >
                                Youtube Video Id
                              </label>
                            </div>
                            <div className="col-md-8">
                              <input
                                type="text"
                                id="inputPassword6"
                                className="form-control-input"
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
                              <select class="form-control-input-2">
                                <option value="1">Active</option>
                                <option value="1">Inactive</option>
                              </select>
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
                                    type="submit"
                                    class="add-last-btn btn-lg"
                                  >
                                    Save
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
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
                        <h4>Manage Posts Create / Update</h4>
                        <p>Update products info, combinations and extras.</p>
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
                                  Post Title
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
                            <button type="button" class="cancel-btn btn-lg">
                              Cancel
                            </button>
                          </div>
                          <div className="col-lg-6 col-md-12 py-3">
                            <button
                              type="button"
                              class="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Canvas */}
                  </div>

                  {/* Canvas */}
                </div>

                <h3 className="py-4">
                  Total Number of Racks: {racks?.length}
                </h3>
                <div className="row g-4">
                  {racks.map((item, index) => {
                    return (
                      <div className="col-md-3">
                        <div
                       
                          className="p-2"
                          style={{
                            backgroundColor: "#fff",
                            border: " 1px solid rgb(243, 239, 239)",

                            borderRadius: "10px",
                          }}
                        >
                          <div
                            
                            className="order"
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div className=""  data-bs-toggle="modal"
                             data-bs-target="#exampleModal2"
   
                             onClick={()=>setRackId(item?._id)}>
                              <p className="m-0"> Number of Racks</p>
                              <h4>{index + 1}</h4>
                            </div>

                            <div style={{zIndex:'999'}}>
                              <i>
                                <AiFillDelete
                                  size={20}
                                  onClick={() => onDeleteStudent(item?._id)}
                                  color="red"
                                />
                              </i>
                            </div>
                          </div>

                          {item?.state === "empty" ? (
                            <div
                              className=""
                              style={{
                                background: "#FEECDC",
                                width: "30px",
                                height: "30px",
                                lineHeight: "30px",
                                borderRadius: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <AiFillCloseCircle size={20} color="red" />
                            </div>
                          ) : (
                            <div
                              className=""
                              style={{
                                background: "#FEECDC",
                                width: "30px",
                                height: "30px",
                                lineHeight: "30px",
                                borderRadius: "50%",
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <i
                                class="fa-solid fa-check"
                                style={{
                                  fontSize: "18px",

                                  color: " #0E9F6E",
                                }}
                              ></i>
                            </div>
                          )}
                        </div>




                        <div
                          class="modal fade"
                          id="exampleModal2"
                          tabindex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog w-100">
                            <div class="modal-content w-100">
                              <div class="modal-body w-100">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    updateSend(e.target);
                                  }}
                                >
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-2">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        width
                                      </label>
                                    </div>
                                    <div className="col-md-10">
                                      <input
                                        className="form-control"
                                        name="width"
                                        placeholder="Enter Size"
                                      />
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-2">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Height
                                      </label>
                                    </div>
                                    <div className="col-md-10">
                                      <input
                                        className="form-control"
                                        name="height"
                                        placeholder="Enter Size"
                                      />
                                    </div>
                                  </div>
                                  <div className="row  pt-4  align-items-center">
                                    <div className="col-md-2">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        State
                                      </label>
                                    </div>
                                    <div className="col-md-10">
                                      <select
                                        class="form-control-input-2"
                                        name="state"
                                      >
                                        <option value="Occupied">
                                          Occupied
                                        </option>
                                        <option value="Empty">Empty</option>
                                      </select>
                                    </div>
                                  </div>
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
                                        type="submit"
                                        class="add-last-btn btn-lg"
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>


                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default ERacks;
