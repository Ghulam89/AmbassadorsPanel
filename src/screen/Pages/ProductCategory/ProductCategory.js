import React,{useState,useEffect} from "react";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

import {Modal} from "antd";
import ApiUrl from "../BaseUrl";


function ProductCategory() {

  let hello = "";


  


  const [stocks, setStocks] = useState([]);
  const [sellerid, setSellerID] = useState(null);


  const [singleStock, setSingleStock] = useState();
  
  useEffect(() => {


    axios.get(`${ApiUrl}/category/getAll`).then((res) => {
      console.log(res.data);
      setStocks([...res.data]);
      console.log(stocks);

      
    });
    
    
  }, []);




  const sendData = (values) => {

  

    if (values?.title?.value?.length === 0) {

      toast('please Enter your title')
    
    } 

    else if  (values?.ambassadorCommission?.value?.length===0){
      toast('please Enter your ambassador commission')
    }

    else if (values?.adminCommission?.value?.length===0){
      toast('please Enter your adminCommission')
    }
    else if(values?.status?.value?.length===0){
      toast('please Enter your status')
    }
    
    
    else {
    

      const params = {

     "title":values.title.value,
     "ambassadorCommission":values.ambassadorCommission.value,
      "adminCommission":values.adminCommission.value,
      "status":values.status.value,

      }
      axios
        .post(`${ApiUrl}/category/create`, params)

        .then((res) => {
          console.log(res.data);


            
          if (res.data.status === "success") {

             
            
            toast(" category created successfully!");


            axios.get(`${ApiUrl}/category/getAll`).then((res) => {
              console.log(res.data);
              setStocks([...res.data]);
              console.log(stocks);
        
              
            });


          }

          


          
    // axios.get(`${ApiUrl}/e-stock/getByStoreID?id=`+id).then((res) => {
    //   console.log(res.data);
    //   setStocks([...res.data]);
    //   console.log(stocks);

      
    // });


        });
    }
  };

  const updateData = (values) => {

  
    

    const params = {
      "id":sellerid,   
      "title":values.title.value,
      "ambassadorCommission":values.ambassadorCommission.value,
       "adminCommission":values.adminCommission.value,
       "status":values.status.value,
 
       }

      axios
        .put(`${ApiUrl}/category/updateByID`, params)

        .then((res) => {
          console.log(res.data);

            
          if (res.data.status === "success") {

            
            document.getElementById('myclosebtn').click();
            document.getElementById('myclosebtn').disabled=true;

            // const button = document.getElementById("myclosebtn");

            // Define a click event handler function
            
            toast("category update successfully!");


          
          }


          
   
        });
    
  };


  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios
          .delete(
            `${ApiUrl}/category/deleteByID?id=`+id
          )
          .then((res) => {
            console.log(
              res.data

              
            );

            

            toast(
              "Category deleted successfully!"
            );



            axios.get(`${ApiUrl}/category/getAll`).then((res) => {
              console.log(res.data);
              setStocks([...res.data]);
              console.log(stocks);
        
              
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
            <ToastContainer/>
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Product Categories</h5>
               

                <div className="j">
                  <div className="products-actions d-flex p-1">
                    <div className="imort-product ">
                      <div className="btn-product d-flex">
                        <div className="imp-btn">
                 
                        </div>
                        <div className="exp-btn px-3">
                         
                        </div>
                      </div>
                    </div>
                    <div className="action-btn">
                      <div className="actions d-flex">
                        <div className="Bulk-btn">
                     
                        </div>
                        <div className="Del-btn px-3">
                        
                        </div>
                        <button
                          className="add-btn"
                          type="button"
                          data-bs-toggle="offcanvas"
                          data-bs-target="#offcanvasRight"
                          aria-controls="offcanvasRight"
                        >
                          <AiOutlinePlus />
                          <span className="px-1"> Add Category</span>
                        </button>
                       

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
                                <form onSubmit={(e)=>{e.preventDefault(); sendData(e.target)}} >
                              
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
                                        name="title"
                                        
                                        className="form-control-input"
                                       
                                        placeholder="Category Title"
                                      />
                                    </div>
                                  </div>
                                <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      Ambassador Commission 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        name="ambassadorCommission"
                                      
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Ambassador Commission"
                                      />
                                    </div>
                                  </div>
                                <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >    Admin Commission 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        name="adminCommission"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Admin Commission"
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
                                      data-bs-dismiss="offcanvas"
                                  >
                                     Add Category
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
                              <h4>Manage Product Category  Update</h4>
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
                                <form onSubmit={(e)=>{e.preventDefault(); updateData(e.target)}} >
                              
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
                                        name="title"
                                        
                                        className="form-control-input"
                                       
                                        placeholder="Category Title"
                                        defaultValue={singleStock?.title}
                                      />
                                    </div>
                                  </div>
                                <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >
                                      Ambassador Commission 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        name="ambassadorCommission"
                                      
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Ambassador Commission"
                                        defaultValue={singleStock?.ambassadorCommission}
                                      />
                                    </div>
                                  </div>
                                <div className="row pt-4  align-items-center">
                                    <div className="col-md-4">
                                      <label
                                        for="inputPassword6"
                                        className="form-label"
                                      >    Admin Commission 
                                      </label>
                                    </div>
                                    <div className="col-md-8">
                                      <input
                                        type="text"
                                        id="inputPassword6"
                                        name="adminCommission"
                                        className="form-control-input"
                                        aria-labelledby="passwordHelpInline"
                                        placeholder="Enter Admin Commission"

                                        defaultValue={singleStock?.adminCommission}
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
                                      name="status"
                                        class="form-control-input-2"
                                        aria-label="Default select example"

                                        defaultValue={singleStock?.status}
                                      >
                                        <option selected>Active</option>
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
                                    Update Category
                                  </button>
                                  <button
                                    style={{ display: "none" }}
                                    type="submit"
                                    class="add-last-btn btn-lg"
                                    id="myclosebtn"
                                    data-bs-dismiss="offcanvas"
                                  >
                                    Update Category
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
                        
                          <th>Status</th>
                          <th>ACTIONS</th>
                        </tr>
                      </thead>
                      <tbody>

                      {stocks?.map((item, index) => {
                              
                              return (
                                <>

                        <tr>
                         
                          <td></td>
                          <td>
                           {index+1}
                          </td>
                          <td>{item?.title}</td>
                          <td>{item?.ambassadorCommission}</td>
                          <td>{item?.adminCommission}</td>
                        
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
                                            
                                        
                                        axios.get(`${ApiUrl}/category/getById?id=`+item?._id).then((res) => {
                                          console.log(res.data,'singleStock');
                                    
                                          setSingleStock(res.data);
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







                              style={{ fontSize: 21 }} className="px-3">
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
                      <p>.</p>

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