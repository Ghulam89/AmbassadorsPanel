import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import ApiUrl from "../BaseUrl";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {Modal} from "antd";
function Packages() {
  const [packages, setPackages] = useState([]);

  const [packagesSingle, setPackagesSingle] = useState({});

  const [sellerid,setSellerID] = useState([]);

  useEffect(() => {
    axios.get(`${ApiUrl}/packages/getAll`).then((res) => {
      console.log(res.data);
      setPackages(res.data);
      console.log(packages);
    });
  }, []);

  const sendData = (values) => {
    if (values?.title?.value?.length === 0) {
      toast("please Enter your title");
    } else if (values?.minimumStore?.value?.length === 0) {
      toast("please Enter your Minimum Store");
    } else if (values?.packageName?.value?.length === 0) {
      toast("please Enter your Package Name");
    } else if (values?.type?.value?.length === 0) {
      toast("please Enter your Type");
    } else if (values?.status?.value?.length === 0) {
      toast("please Enter your status");
    } else {
      const params = {
        title: values.title.value,
        minimumStore:values.minimumStore.value,
        packageName: values.packageName.value,
        status: values.status.value,
        type: values.type.value,
      };
      axios
        .post(`${ApiUrl}/packages/create`, params)

        .then((res) => {
          console.log(res.data);

          if (res.data.status === "success") {
            toast("Package created successfully!");

          }
        });
    }
  };


  const updateData = (values) => {
    
      const params = {
        'id':sellerid,
        'title': values.title.value,
        'minimumStore': values.minimumStore.value,
        'packageName': values.packageName.value,
        'status': values.status.value,
        'type': values.type.value,
      };
      axios
        .post(`${ApiUrl}/packages/create`, params)

        .then((res) => {
          console.log(res.data);

          if (res.data.status === "success") {
             
            document.getElementById('myclosebtn').click();
            document.getElementById('myclosebtn').disabled=true;

            // const button = document.getElementById("myclosebtn");

            // Define a click event handler function
            
            toast("package update successfully!");
          }
        });
    
  };

  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios.delete(`${ApiUrl}/packages/deleteByID?id=` + id).then((res) => {
          console.log(res.data);

          toast("e-stock deleted successfully!");
        });
      },
    });
  };

  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <ToastContainer/>
              <div className="container-fluid py-4">
                <h5 className="kk ps-3">Manage Our Packages</h5>

                <div className="min-box  border">
                  <div className="products-actions d-flex p-4">
                    <div className="imort-product ">
                      <div className="btn-product d-flex"></div>
                    </div>
                    <div className="action-btn">
                      <div className="actions d-flex">
                        <div className="Bulk-btn">
                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage Our Packages Create / Update</h4>
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
                                  <form  onSubmit={(e)=>{e.preventDefault(); sendData(e.target)}}>
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
                                          placeholder="Enter Title"
                                        />
                                      </div>
                                    </div>
                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Minimum Store
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                          name="minimumStore"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Enter Minimum Store"
                                        />
                                      </div>
                                    </div>
                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Package Name
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                        
                                          name="packageName"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Enter Package Name"
                                        />
                                      </div>
                                    </div>

                                    <div className="row  pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Type
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                        name="type"
                                          class="form-control-input-2"
                                          aria-label="Default select example"
                                        >
                                          <option value="In City">In City</option>
                                          <option value="National">National</option>

                                          <option value="International">
                                            International
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
                                          Status
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                        name="status"
                                          class="form-control-input-2"
                                          aria-label="Default select example"
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
                            id="offcanvasRightupdate"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage Our Packages Create / Update</h4>
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
                                  <form onSubmit={(e)=>{e.preventDefault(); updateData(e.target)}}>
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
                                          placeholder="Enter Title"
                                          defaultValue={packagesSingle?.title}
                                        />
                                      </div>
                                    </div>
                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Minimum Store
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                        name="minimumStore"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Enter Minimum Store"
                                          defaultValue={packagesSingle?.minimumStore}
                                        />
                                      </div>
                                    </div>
                                    <div className="row pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Package Name
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <input
                                          type="text"
                                        
                                          name="packageName"
                                          className="form-control-input"
                                          aria-labelledby="passwordHelpInline"
                                          placeholder="Enter Package Name"
                                          defaultValue={packagesSingle?.packageName}
                                        />
                                      </div>
                                    </div>

                                    <div className="row  pt-4  align-items-center">
                                      <div className="col-md-4">
                                        <label
                                          for="inputPassword6"
                                          className="form-label"
                                        >
                                          Type
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                        name="type"
                                          class="form-control-input-2"
                                          aria-label="Default select example"
                                          defaultValue={packagesSingle?.type}
                                        >
                                          <option value="In City">In City</option>
                                          <option value="National">National</option>

                                          <option value="International">
                                            International
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
                                          Status
                                        </label>
                                      </div>
                                      <div className="col-md-8">
                                        <select
                                        name="status"
                                          class="form-control-input-2"
                                          aria-label="Default select example"
                                          defaultValue={packagesSingle?.status}
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
                                    data-bs-dismiss="abc"
                                  >
                                    Update Package
                                  </button>
                                  <button
                                    style={{ display: "none" }}
                                    type="submit"
                                    class="add-last-btn btn-lg"
                                    id="myclosebtn"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    Update Package
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

                        {/* Modal-Del */}
                        <button
                          className="add-btn"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <AiOutlinePlus />
                          <span className="px-1"> Add Packages</span>
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
                          <th>#ID</th>
                          <th>Title</th>
                          <th>Minimum Store</th>
                          <th>Type</th>

                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        
                        {packages?.map((item,index)=>{
                         return (
                          <>
                          <tr>
                          <td>{index+1}</td>
                          <td>{item?.title}</td>
                          <td>{item?.minimumStore}</td>
                          <td>{item?.type}</td>

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
                              <span
                               onClick={() => {
                              
                                setSellerID(item?._id)
                                    
                                
                                axios.get(`${ApiUrl}/packages/getById?id=`+item?._id).then((res) => {
                                  console.log(res.data,'packages');
                            
                                  setPackagesSingle(res.data);
                                });



                              }}
                              data-bs-toggle="offcanvas"
                              data-bs-target="#offcanvasRightupdate"
                              aria-controls="offcanvasRightupdate"

                              style={{ fontSize: 21 }}>
                                <FiEdit />
                              </span>
                              <span
                              
                              
                            onClick={() => {


                              onDeleteStudent(item?._id);
                             
                            }}


                              style={{ fontSize: 21 }} className="px-3">
                                <RiDeleteBinLine />
                              </span>
                            </div>
                          </td>
                        </tr>
                          </>
                         )
                        })}
                        
                      </tbody>
                    </table>
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

export default Packages;
