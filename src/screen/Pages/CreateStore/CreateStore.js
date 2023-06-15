import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { message, Modal } from "antd";
import { AiOutlinePlus } from "react-icons/ai";
import ApiUrl from "../BaseUrl";
import { BsFillEyeFill } from "react-icons/bs";
function CreateStore() {
  const [sellerid, setSellerID] = useState(null);
  const [categories, setCategories] = useState([]);

  console.log("===========categories=========", categories);
  const [stores, setStores] = useState({});
  const [mainStock, setMainStock] = useState([]);
  const [allCategory, setAllCategory] = useState([]);

  const [offcanvas, setOffcanvas] = useState(null);
  const { id } = useParams();
  //   const storeId = localStorage.getItem("storeId");
  useEffect(() => {
    axios.get(`${ApiUrl}/store/getBySellerID?id=` + id).then((res) => {
      console.log(res.data);
      setCategories(res.data);
      console.log(categories);
    });

    axios.get(`${ApiUrl}/mainStock/getBySellerID?id=` + id).then((res) => {
      console.log(res.data);
      setMainStock(res.data);
      console.log(categories);
    });

    axios.get(`${ApiUrl}/category/getAll`).then((res) => {
      console.log(res.data);
      setAllCategory(res.data);
      console.log(allCategory);
    });
  }, []);

  const sendData = (values) => {
    if (values?.name?.value?.length === 0) {
      toast("please Enter your your name");
    } else if (values?.brandName?.value?.length === 0) {
      toast("please Enter your brand name");
    } else if (values?.email?.value?.length === 0) {
      toast("please Enter your email");
    } else if (values?.phoneNo?.value?.length === 0) {
      toast("please Enter your phone No");
    } else if (values?.productCategories?.value?.length === 0) {
      toast("please Enter your productCategories");
    } else {
      const params = new FormData();
      console.log("===========================", id);
      params.append("sellerID", id);
      params.append("name", values.name.value);
      params.append("status", "approved");
      params.append("brandName", values.brandName.value);
      params.append("brandLogo", values.brandLogo.files[0]);
      params.append("email", values.email.value);
      params.append("phoneNo", values.phoneNo.value);
      // params.append("country", values.country.value);
      // params.append("city", values.city.value);
      params.append("productCategories", values.productCategories.value);

      axios
        .post(`${ApiUrl}/store/create`, params)

        .then((res) => {
          console.log(res.data);
          if (res.data.status === "success") {
            setOffcanvas("offcanvas");
          }

          toast("Store created successfully!");
        });
    }
  };



  const updateData = (values) => {
    if (values?.name?.value?.length === 0) {
      toast("please Enter your your name");
    } else if (values?.brandName?.value?.length === 0) {
      toast("please Enter your brand name");
    } else if (values?.email?.value?.length === 0) {
      toast("please Enter your email");
    } else if (values?.phoneNo?.value?.length === 0) {
      toast("please Enter your phone No");
    } else if (values?.productCategories?.value?.length === 0) {
      toast("please Enter your productCategories");
    } else {
      const params = new FormData();
      console.log("===========================", sellerid);
      params.append("id", sellerid);
      params.append("name", values.name.value);
      params.append("status", "approved");
      params.append("brandName", values.brandName.value);
      params.append("brandLogo", values.brandLogo.files[0]);
      params.append("email", values.email.value);
      params.append("phoneNo", values.phoneNo.value);
      // params.append("country", values.country.value);
      // params.append("city", values.city.value);
      params.append("productCategories", values.productCategories.value);

      axios
        .put(`${ApiUrl}/store/updateByID`, params)

        .then((res) => {
          console.log(res.data);

          toast("Store created successfully!");
        });
    }
  };



  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios.delete(`${ApiUrl}/store/deleteByID?id=` + id).then((res) => {
          console.log(res.data);

          toast("Store deleted successfully!");
        });
      },
    });
  };






  const stockData = (values) => {
    
    const id = localStorage.getItem("myUserId");

      const params = {

        "sellerID":id,
         "warehouseName":values.warehouseName.value,
         "width":values.width.value,
          "height":values.height.value,
          "stockCapacity":values.stockCapacity.value,
          "address":values.address.value,
          "status":values.status.value,
    
    
          }

      axios
        .post(`${ApiUrl}/mainStock/updateByID`, params)

        .then((res) => {
          console.log(res.data);

          toast("Main Stock created successfully!");

          
          if(res.data.status==="success"){
            const param = {  
              
              sellerID: res.data.data.sellerID,
              rackcouts:res.data.data.stockCapacity,
            };
            console.log(param);
            axios
              .post(`${ApiUrl}/mainStockRack/updateByID`, param)
      
              .then((res) => {
                console.log(res.data);
      
              
      
               
              });
            
  
            toast('E stock created successfully!')

           }

        });

      const param = new FormData();
      console.log("===========================", id);
      param.append("id", id);
      param.append("status", "approved");

      axios.put(`${ApiUrl}/seller/updateByID`, param).then((res) => {
        console.log(res.data);
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
                <h5 className="kk ps-3"> Manage Stores</h5>

                <ul
                  class="nav nav-pills mb-3 d-flex justify-content-start"
                  style={{ gap: "12px" }}
                  id="pills-tab"
                  role="tablist"
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
                      Main Stock
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
                      Store
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
                  
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasRightstock"
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
                      <form onSubmit={(e)=>{e.preventDefault(); stockData(e.target)}}>
                            <div className="row  pt-4  align-items-center">
                              <div className="col-md-4">
                                <label
                                  for="inputPassword6"
                                  className="form-label"
                                >
                                 Warehouse Name
                                </label>
                              </div>
                              <div className="col-md-8">
                              <input
                                  type="text"
                                 
                                  name="warehouseName"
                                  className="form-control-input"
                                 
                                  placeholder="WareHouse Name"
                                />
                              </div>
                            </div>
                         

                            <div className="row pt-4  align-items-center">
                              <div className="col-md-4">
                                <label
                                  for="inputPassword6"
                                  className="form-label"
                                >
                                  WareHouse Weight
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                 
                                  name="width"
                                  className="form-control-input"
                                 
                                  placeholder="WareHouse Weight"
                                />
                              </div>
                            </div>
                            <div className="row pt-4  align-items-center">
                              <div className="col-md-4">
                                <label
                                  for="inputPassword6"
                                  className="form-label"
                                >
                                  WareHouse Height
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                 
                                  name="height"
                                  className="form-control-input"
                                 
                                  placeholder="WareHouse Height"
                                />
                              </div>
                            </div>
                            <div className="row pt-4  align-items-center">
                              <div className="col-md-4">
                                <label
                                  for="inputPassword6"
                                  className="form-label"
                                >
                                  Stock Capacity
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                 
                                  name="stockCapacity"
                                  className="form-control-input"
                           
                                  placeholder="Stock Capacity"
                                />
                              </div>
                            </div>
                            <div className="row pt-4  align-items-center">
                              <div className="col-md-4">
                                <label
                                  for="inputPassword6"
                                  className="form-label"
                                >
                                  Address
                                </label>
                              </div>
                              <div className="col-md-8">
                                <input
                                  type="text"
                                  
                                  name="address"
                                  className="form-control-input"
                           
                                  placeholder="Address"
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
                                 name="status"
                                >
                                  <option value="Active">Active</option>
                                  <option value="Inactive">Inactive</option>
                                </select>
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
                            <button type="submit" class="add-last-btn btn-lg" >
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


                    <div>
                      
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
                                <th>Warehouse Name</th>
                                <th>Warehouse Size</th>
                                <th>Stock Capacity</th>

                                <th>Status</th>
                                <th>ACTIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {mainStock?.map((item, index) => {
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

                                      <td>{item?.warehouseName}</td>
                                      <td>
                                        {item?.width + " x " + item?.height}
                                      </td>
                                      <td>{item?.address}</td>
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
                                          <span className="px-3">
                                            <Link
                                              to={`/mainStockracks/${item?.sellerID}`}
                                              style={{ fontSize: 21 }}
                                            >
                                              <BsFillEyeFill color="#000" />
                                            </Link>
                                          </span>

                                          <span
                                            onClick={() => {
                                              setSellerID(item?._id);

                                              axios
                                                .get(
                                                  `${ApiUrl}/store/getById?id=` +
                                                    item?._id
                                                )
                                                .then((res) => {
                                                  console.log(
                                                    res.data,
                                                    "store"
                                                  );

                                                  setStores(res.data);
                                                });
                                            }}
                                            data-bs-toggle="offcanvas"
                                            data-bs-target="#offcanvasRightstock"
                                            aria-controls="offcanvasRightstock"
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
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                    <div className="min-box  border">
                      <div className="products-actions d-flex p-4">
                        <div className="imort-product ">
                          <div className="btn-product d-flex">
                            
                           
                          </div>
                        </div>
                        <div className="action-btn">
                          <div className="actions d-flex">
                            <div className="Bulk-btn">
                             

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
                              <span className="px-1"> Add Store</span>
                            </button>



                            
                            <div
                                className="offcanvas offcanvas-end"
                                tabIndex={-1}
                                id="offcanvasRightupdate"
                                aria-labelledby="offcanvasRightLabel"
                              >
                                <div className="offcanvas-header px-4">
                                  <div className="content-header">
                                    <h4>Manage Store </h4>
                                    <p>
                                      Update Store info, combinations and
                                      extras.
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
                                              id="name"
                                              name="name"
                                              className="form-control-input"
                                              placeholder="Enter Your Name"
                                              defaultValue={stores?.name}
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
                                              id="email"
                                              name="email"
                                              className="form-control-input"
                                              placeholder="Enter Your Email"
                                              defaultValue={stores?.email}
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
                                              name="phoneNo"
                                              className="form-control-input"
                                              placeholder="Enter Your Number"
                                              defaultValue={stores?.phoneNo}
                                            />
                                          </div>
                                        </div>
                                        <div className="row pt-4  align-items-center">
                                          <div className="col-md-4">
                                            <label
                                              for="inputPassword6"
                                              className="form-label"
                                            >
                                              Brand Name
                                            </label>
                                          </div>
                                          <div className="col-md-8">
                                            <input
                                              type="text"
                                              name="brandName"
                                              className="form-control-input"
                                              placeholder="Enter Your Brand Name"
                                              defaultValue={stores?.brandName}
                                            />
                                          </div>
                                        </div>
                                        <div className="row  pt-4  align-items-center">
                                          <div className="col-md-4">
                                            <label
                                              for="inputPassword6"
                                              className="form-label"
                                            >
                                              Product Categories
                                            </label>
                                          </div>
                                          <div className="col-md-8">
                                            <select
                                              name="productCategories"
                                              id="productCategories"
                                              class="form-control-input-2"
                                              defaultValue={
                                                stores?.productCategories
                                              }
                                            >
                                              <option selected>
                                                All Categories
                                              </option>
                                              <option value="1">
                                                Men Fashion
                                              </option>
                                            </select>
                                          </div>
                                        </div>

                                        <div className="row  pt-4  align-items-center">
                                          <div className="col-md-4">
                                            <label
                                              for="inputPassword6"
                                              className="form-label"
                                            >
                                              Brand Logo
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
                                                    name="brandLogo"
                                                    defaultValue={
                                                      stores?.brandLogo
                                                    }
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
                                                    (Only *.jpeg, *.webp and
                                                    *.png images will be
                                                    accepted)
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
                                            <select class="form-control-input-2">
                                              <option value="1">Active</option>
                                              <option value="1">
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
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel"
                              >
                                <div className="offcanvas-header px-4">
                                  <div className="content-header">
                                    <h4>Manage Store </h4>
                                    <p>
                                      Update Store info, combinations and
                                      extras.
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
                                              id="name"
                                              name="name"
                                              className="form-control-input"
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
                                              id="email"
                                              name="email"
                                              className="form-control-input"
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
                                              name="phoneNo"
                                              className="form-control-input"
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
                                              Brand Name
                                            </label>
                                          </div>
                                          <div className="col-md-8">
                                            <input
                                              type="text"
                                              name="brandName"
                                              className="form-control-input"
                                              placeholder="Enter Your Brand Name"
                                            />
                                          </div>
                                        </div>
                                        <div className="row  pt-4  align-items-center">
                                          <div className="col-md-4">
                                            <label
                                              for="inputPassword6"
                                              className="form-label"
                                            >
                                              Product Categories
                                            </label>
                                          </div>
                                          <div className="col-md-8">
                                            <select
                                              name="productCategories"
                                              id="productCategories"
                                              class="form-control-input-2"
                                            >
                                              <option selected>
                                                ---Select Category---
                                              </option>
                                              {allCategory?.map(
                                                (item, index) => {
                                                  return (
                                                    <>
                                                      <option value={item?._id}>
                                                        {item?.title}
                                                      </option>
                                                    </>
                                                  );
                                                }
                                              )}
                                            </select>
                                          </div>
                                        </div>

                                        <div className="row  pt-4  align-items-center">
                                          <div className="col-md-4">
                                            <label
                                              for="inputPassword6"
                                              className="form-label"
                                            >
                                              Brand Logo
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
                                                    name="brandLogo"
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
                                                    (Only *.jpeg, *.webp and
                                                    *.png images will be
                                                    accepted)
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
                                            <select class="form-control-input-2">
                                              <option value="1">Active</option>
                                              <option value="1">
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
                                                  aria-label="Close"
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
                        </div>
                      </div>
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
                              Do you really want to delete these records? You
                              can't view this in <br /> your list anymore if you
                              delete!
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

                                      toast(
                                        "CreateStoreador updated successfully"
                                      );
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


                    <div>
                      <div className="row pb-4" id="allTabs">
                        <div className="col-md-12">
                          <Link
                            to={`/e_racks/${id}`}
                            className="counterbox text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            E-Racks
                          </Link>{" "}
                          <Link
                            to={`/e_stock/${id}`}
                            className="counterbox text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            E-Stocks
                          </Link>{" "}
                          <Link
                            to={`/services/${id}`}
                            className="counterbox text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            E-Services
                          </Link>{" "}
                          <div
                            className="counterbox text-dark"
                            style={{ textDecoration: "none" }}
                          >
                            E-Display
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

                                <th>Status</th>
                                <th>ACTIONS</th>
                              </tr>
                            </thead>
                            <tbody>
                              {categories?.map((item, index) => {
                                if (item?.status === "approved") {
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
                                            <span className="px-3">
                                              <Link
                                                to={`/seller_details/${item._id}`}
                                                style={{ fontSize: 21 }}
                                              >
                                                <BsFillEyeFill color="#000" />
                                              </Link>
                                            </span>

                                            <span
                                              onClick={() => {
                                                setSellerID(item?._id);

                                                axios
                                                  .get(
                                                    `${ApiUrl}/store/getById?id=` +
                                                      item?._id
                                                  )
                                                  .then((res) => {
                                                    console.log(
                                                      res.data,
                                                      "store"
                                                    );

                                                    setStores(res.data);
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
                                }
                              })}
                            </tbody>
                          </table>
                          
                        </div>
                      </div>
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

export default CreateStore;
