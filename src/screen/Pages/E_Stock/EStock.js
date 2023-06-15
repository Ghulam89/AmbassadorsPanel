import React, { useState, useEffect} from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineZoomIn } from "react-icons/ai";
import { useParams } from "react-router-dom";
import {Modal} from "antd";
import ApiUrl from "../BaseUrl";
import { useNavigate } from "react-router-dom";

function EStock() {



  const [stocks, setStocks] = useState([]);
  const [sellerid, setSellerID] = useState(null);
  const [singleStock, setSingleStock] = useState();

    console.log(singleStock);


  const {id}=useParams()

  const navigate=useNavigate()




  useEffect(() => {


    axios.get(`${ApiUrl}/e-stock/getByStoreID?id=`+id).then((res) => {
      console.log(res.data);
      setStocks([...res.data]);
      console.log(stocks);

      
    });
    
    
  }, []);




  const sendData = (values) => {

  

    if (values?.warehouseName?.value?.length === 0) {

      toast('please Enter your your warehouse Name')
    
    } 

    else if  (values?.width?.value?.length===0){
      toast('please Enter your warehouse width')
    }

    else if (values?.height?.value?.length===0){
      toast('please Enter your height')
    }
    else if(values?.stockCapacity?.value?.length===0){
      toast('please Enter your stock Capacity')
    }else if(values?.address?.value?.length===0){

      toast('please Enter your address')
    }
    else if(values?.status?.value?.length===0){

      toast('please Enter your status')
    }
    
    
    else {
    

      const params = {

    "storeID":id,
     "warehouseName":values.warehouseName.value,
     "width":values.width.value,
      "height":values.height.value,
      "stockCapacity":values.stockCapacity.value,
      "address":values.address.value,
      "status":values.status.value,


      }
      axios
        .post(`${ApiUrl}/e-stock/create`, params)

        .then((res) => {

                 console.log(res.data);


                 if(res.data.status==="success"){
                  const param = {  

                    storeID: res.data.data.storeID,
                    rackcouts:res.data.data.stockCapacity,
                  };
                  console.log(param);
                  axios
                    .post(`${ApiUrl}/e-rack/create`, param)
            
                    .then((res) => {
                      console.log(res.data);
            
                    
            
                     
                    });
                  
        
                  toast('E stock created successfully!')

                 }

       







        });
    }
  };

  const updateData = (values) => {

  
    

      const params = {

    "id":sellerid,
     "warehouseName":values.warehouseName.value,
     "width":values.width.value,
      "height":values.height.value,
      "stockCapacity":values.stockCapacity.value,
      "address":values.address.value,
      "status":values.status.value,


      }
      axios
        .put(`${ApiUrl}/e-stock/updateByID`, params)

        .then((res) => {
          console.log(res.data);



          

          if(res.data.status==="success"){
            const param = {  

              storeID: res.data.data.storeID,
              rackcouts:res.data.data.stockCapacity,
            };
            console.log(param);
            axios
              .put(`${ApiUrl}/e-rack/updateById`, param)
      
              .then((res) => {
                console.log(res.data);
      
              
      
               
              });
            
  
        

           }

          toast('E stock update successfully!')


    
        });
    
  };


  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios
          .delete(
            `${ApiUrl}/e-stock/deleteByID?id=`+id
          )
          .then((res) => {
            console.log(
              res.data

              
            );

            

            toast(
              "e-stock deleted successfully!"
            );



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
                <h5 className="kk ps-3"> Manage E-Stock</h5>


                <div className="min-box  border">
                  <div className="products-actions d-flex p-4">
                   
                    <div className="action-btn">
                      <div className="actions d-flex">
                        <div className="Bulk-btn">
                         

                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRight2"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage E-Stock </h4>
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
                          <form onSubmit={(e)=>{e.preventDefault(); sendData(e.target)}}>
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
                          <div
                            className="offcanvas offcanvas-end"
                            tabIndex={-1}
                            id="offcanvasRightupdate12"
                            aria-labelledby="offcanvasRightLabel"
                          >
                            <div className="offcanvas-header px-4">
                              <div className="content-header">
                                <h4>Manage E-Stock </h4>
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
                          <form onSubmit={(e)=>{e.preventDefault(); updateData(e.target)}}>
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

                                  defaultValue={singleStock?.warehouseName}
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
                                  
                                  defaultValue={singleStock?.width}
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
                                  
                                  defaultValue={singleStock?.height}
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
                                     
                                  defaultValue={singleStock?.stockCapacity}
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
                                     
                                  defaultValue={singleStock?.address}
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
                        </div>
                       
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
                          data-bs-target="#offcanvasRight2"
                          aria-controls="offcanvasRight2"
                        >
                          <AiOutlinePlus />
                          <span className="px-1"> Add Stock</span>
                        </button>
                        <div
                          className="offcanvas offcanvas-end w-75"
                          tabIndex={-1}
                          id="offcanvasRight"
                          aria-labelledby="offcanvasRightLabel"
                        >
                          <div className="offcanvas-header px-4">
                            <div className="content-header">
                              <h4> Add Stock</h4>
                              <p>Add Stock info, combinations and extras.</p>
                            </div>

                            <button
                              type="button"
                              className="btn-close text-reset"
                              data-bs-dismiss="offcanvas"
                              aria-label="Close"
                            />
                          </div>
                          {/* Canvas */}
                          
                          {/* Canvas */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content py-4">
                            
                            <div class="modal-body">
                              <div className="modal-icon">
                              <span style={{ fontSize: 35 , color: '#f05252' }} className='px-3'><RiDeleteBinLine /></span>
                              </div>
                            
                              <h1 class="title py-3" >Are You Sure! Want to Delete <span style={{color: '#f05252'}}>Selected Products?</span></h1>
                              <p className='para'>Do you really want to delete these records? You can't view this in <br/>  your list anymore if you delete!</p>
                             
                          
                              ...
                              <div className="last-btn">
                              <button type="button" class="btn  btn-light mx-4 py-2 px-4" data-bs-dismiss="modal">No,Keep It</button>
                              <button
                              

                                 

                              onClick={() => {

                                const id = localStorage.getItem("myUserId");

                                const params = {

                                "id":id,
                               


                                }

                                axios
                                  .post(
                                    "http://157.245.104.106:3003/embassador/delete",
                                    params
                                  )
                                  .then((res) => {
                                    console.log(res.data)


                                    toast('Sellerador updated successfully')

                                    
                                  });
                              }}
                              
                              type="button" class="btn btn-success py-2 px-4">Yes, Delete It</button>

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
                              <th>WareHouse Name</th>
                              <th>WareHouse size</th>
                             
                              <th>Stock Capacity</th>
                              <th>Address</th>
                              <th>Status</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                          
                            {stocks?.map((item, index) => {
                              
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
                                      <td>{index+1}</td>
                                      <td>
                                       {item?.warehouseName}
                                      </td>
                                      <td>{`${item?.height}  x ${item?.width}`}</td>
                                      
                                 
                                      <td>{item?.stockCapacity}</td>
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
                                          active
                                        </span>
                                      </td>
  
                                      <td>
                                      <div className="actions d-flex">
                                     
                                    <span
                                      onClick={() => {
                                        // navigate(`/seller_details/${id}/${item?._id}`);
                                        setSellerID(item?._id)
                                            
                                        
                                        axios.get(`${ApiUrl}/e-stock/getById?id=`+item?._id).then((res) => {
                                          console.log(res.data,'singleStock');
                                    
                                          setSingleStock(res.data);
                                        });



                                      }}
                                      data-bs-toggle="offcanvas"
                                      data-bs-target="#offcanvasRightupdate12"
                                      aria-controls="offcanvasRightupdate12"
                                      style={{ fontSize: 21 }}
                                    >
                                      <FiEdit />
                                    </span>

                            <span
                            

                           


                            onClick={() => {


                              onDeleteStudent(item?._id);
                             
                            }}
                            
                            style={{ fontSize: 21 }} className='px-3'><RiDeleteBinLine /></span>
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
          </div>
        </header>
      </div>
    </>
  );
}

export default EStock;
