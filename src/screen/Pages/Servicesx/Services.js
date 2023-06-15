import React, { useState, useEffect } from "react";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import ApiUrl from "../BaseUrl";
import axios from "axios";
import { Modal } from "antd";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from "react-router-dom";
function Services({ ID }) {


  const [services, setServices] = useState([]);
  const [singleService, setSingleService] = useState();
  console.log("dfdfd", singleService);
  const [sellerid, setSellerID] = useState(null);

  const  [offcanvas, setOffcanvas] = useState("off");

        
     
    console.log('dfdfdfdffdfdfadfadsfda',offcanvas);

  const {id,serId}=useParams()


  const navigate=useNavigate()

  useEffect(() => {

    axios.get(`${ApiUrl}/e-service/getByStoreID?id=`+id).then((res) => {
      console.log(res.data);
      console.log(services);
      setServices([...res.data]);
      console.log(services);
    });

  
  }, []);

  const sendData = (values) => {

    if (values?.title?.value?.length === 0) {
      toast("please Enter your your title");
    } else if (values?.serviceContent?.value?.length === 0) {
      toast("please Enter your warehouse provider Content");
    } else if (values?.serviceProvider?.value?.length === 0) {
      toast("please Enter your warehouse service Provider");
    } else if (values?.selectDate?.value?.length === 0) {
      toast("please Enter your select Date");
    } else if (values?.serviceDetails?.value?.length === 0) {
      toast("please Enter your service Details");
    } else if (values?.image?.value?.length === 0) {
      toast("please Enter your image");
    } else if (values?.status?.value?.length === 0) {
      toast("please Enter your status");
    } else {
      const params = new FormData();
      params.append("storeID", id);
      params.append("title", values.title.value);
      params.append("serviceProvider", values.serviceProvider.value);
      params.append("serviceContent", values.serviceContent.value);
      params.append("selectDate", values.selectDate.value);
      params.append("serviceDetails", values.serviceDetails.value);
      params.append("image", values.image.files[0]);
      params.append("status", values.status.value);
      axios
        .post(`${ApiUrl}/e-service/create`, params)

        .then((res) => {
          console.log(res.data);

          toast("E service created successfully!");
          axios.get(`${ApiUrl}/e-service/getByStoreID?id=`+id).then((res) => {
            console.log(res.data);
            console.log(services);
            setServices([...res.data]);
            console.log(services);
          });

        });
    }
  };

  const updateData = (values) => {
   
   
      const params = new FormData();
      params.append("id",sellerid);
      params.append("title", values.title.value);
      params.append("serviceProvider", values.serviceProvider.value);
      params.append("serviceContent", values.serviceContent.value);
      params.append("selectDate", values.selectDate.value);
      params.append("serviceDetails", values.serviceDetails.value);
      params.append("image", values.image.files[0]);
      params.append("status", values.status.value);
      axios
        .put(`${ApiUrl}/e-service/updateByID`, params)

        .then((res) => {
          console.log(res.data);

          toast("E service update successfully!");
              

          axios.get(`${ApiUrl}/e-service/getByStoreID?id=`+id).then((res) => {
            console.log(res.data);
            console.log(services);
            setServices([...res.data]);
            console.log(services);
          });

          if(res.data.status==='success'){

            console.log(offcanvas)
            offcanvas="offcanvas"
            setOffcanvas(offcanvas);
            console.log(offcanvas)
            
          }
        

        });
    
  };

  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios.delete(`${ApiUrl}/e-service/deleteByID?id=` + id).then((res) => {
          console.log(res.data);

        

          toast("e-service deleted successfully!");

          // axios.get(`${ApiUrl}/e-service/getAll`).then((res) => {
          //   console.log(res.data);
          //   setServices(res.data);
          //   console.log(services);
          // });


          axios.get(`${ApiUrl}/e-service/getByStoreID?id=`+id).then((res) => {
            console.log(res.data);
            console.log(services);
            setServices([...res.data]);
            console.log(services);
          });


        });
      },
    });
  };

  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <ToastContainer />
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3">Manage Services</h5>

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
                            id="offcanvasRight3"
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
                                  <form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      sendData(e.target);
                                    }}
                                  >
                                    <div className="row g-4 pt-4  align-items-center">
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
                                          name="title"
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
                                          Service Provider
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                          name="serviceProvider"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Service Provider"
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Provider Contact
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                          id="inputPassword6"
                                          name="serviceContent"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Provider Contact"
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Select Validity Date
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="date"
                                          name="selectDate"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Service Provider"
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Service Details
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <textarea
                                          type="text"
                                          name="serviceDetails"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Seller detail"
                                        ></textarea>
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
                                              <input type="file" name="image" />
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
                                          name="status"
                                          aria-label="Default select example"
                                        >
                                          <option value="Active1">
                                            Active
                                          </option>
                                          <option value="Inactive">
                                            Inactive
                                          </option>
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
                                              data-bs-dismiss={offcanvas}
                                              // aria-label="Close"
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
                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRightupdate"
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
                                  <form
                                    onSubmit={(e) => {
                                      e.preventDefault();
                                      updateData(e.target);
                                    }}
                                  >
                                    <div className="row g-4 pt-4  align-items-center">
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
                                          name="title"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Title"

                                          defaultValue={singleService?.title}
                                        />
                                      </div>
                                    </div>
                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Service Provider
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                          name="serviceProvider"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Service Provider"

                                          defaultValue={singleService?.serviceProvider}
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Provider Contact
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                          id="inputPassword6"
                                          name="serviceContent"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Provider Contact"

                                          defaultValue={singleService?.providerContent}
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Select Validity Date
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="date"
                                          name="selectDate"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Service Provider"

                                          defaultValue={singleService?.selectDate}
                                        />
                                      </div>
                                    </div>

                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Service Details
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <textarea
                                          type="text"
                                          name="serviceDetails"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Seller detail"

                                          defaultValue={singleService?.serviceDetails}
                                        ></textarea>
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
                                              <input type="file" name="image" />
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
                                          name="status"
                                          aria-label="Default select example"
                                        >
                                          <option value="Active1">
                                            Active
                                          </option>
                                          <option value="Inactive">
                                            Inactive
                                          </option>
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
                                              data-bs-dismiss={offcanvas}
                                              aria-label=""
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
                          data-bs-target="#offcanvasRight3"
                          aria-controls="offcanvasRight3"
                        >
                          <AiOutlinePlus />
                          <span className="px-1"> Add Service</span>
                        </button>

                        <div
                          className="offcanvas offcanvas-end"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4>Manage Seller / Create</h4>
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
                                        Ambassador
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <select
                                        class="form-control-input-2"
                                        aria-label="Default select example"
                                      >
                                        <option value="1">
                                          Basheer Chattha
                                        </option>
                                        <option value="1">
                                          Ghulam Mustafa
                                        </option>
                                        <option value="1">Ali Raza</option>
                                        <option value="1">Adnan</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="row g-4 pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Name
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Seller Name"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Email
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Email"
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
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Password"
                                      />
                                    </div>
                                  </div>
                                  <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                        Seller Details
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <textarea
                                        type="password"
                                        id="inputPassword6"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Seller detail"
                                      ></textarea>
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
                          <th>Image</th>
                          <th>Service Provider</th>
                          <th>Select Date</th>

                          <th>Status</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>
                        {services?.map((item, index) => {
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
                                <td>{item?.title}</td>
                                <td>
                                  <img
                                    src={`${ApiUrl}/images/${item?.image}`}
                                    width="50px"
                                    height="50px"
                                    alt=""
                                  />
                                </td>
                                <td>{item?.serviceProvider}</td>

                                <td>{item?.selectDate}</td>

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
                                    <span
                                     onClick={() => {
                                        // navigate(`/seller_details/${id}/${item?._id}`);
                                        setSellerID(item?._id)
                                            
                                        
                                        axios.get(`${ApiUrl}/e-service/getById?id=`+item?._id).then((res) => {
                                          console.log(res.data,'singleService');
                                    
                                          setSingleService(res.data);
                                        });



                                      }}
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#offcanvasRightupdate"
                                      aria-controls="offcanvasRightupdate"
                                      style={{ fontSize: 21 }}
                                    >
                                      <FiEdit />
                                    </span>
                                    <span
                                      onClick={() => {
                                        onDeleteStudent(item?._id);
                                      }}
                                      style={{ fontSize: 21 }}
                                      className="px-3"
                                    >
                                      <RiDeleteBinLine />
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            </>
                          );
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

export default Services;
