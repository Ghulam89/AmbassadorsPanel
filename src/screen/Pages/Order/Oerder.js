import React from "react"
import ScrollableSection from "../Dashboard/Dashbord";
import Nav from "../../../components/Nav";

import { BiImport } from 'react-icons/bi'
import { BiExport } from 'react-icons/bi'
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineZoomIn } from 'react-icons/ai'

function Oerder(){
    return(
        <>


    <div>
      <header>
        <div className="bg-theme">
          <div className="main-wrapper">
            <div className="container-fluid py-4">
              <h5 className='kk ps-3'>Manage Orders</h5>
              <div className="row pb-4">
  <div className="col-md-12">
    <div className="counterbox">
      Total Payments <span className="badge badge-primary">9</span>
    </div>{" "}
    <div className="counterbox">
      Verified Payments<span className="badge badge-primary">7</span>
    </div>{" "}
    <div className="counterbox">
   Un Verified Payments <span className="badge badge-primary">9</span>
    </div>{" "}
    <div className="counterbox">
      Total Delivery <span className="badge badge-primary">0</span>
    </div>{" "}
    <div className="counterbox">
      Total In Process<span className="badge badge-primary">0</span>
    </div>{" "}
    <div className="counterbox">
      Total Pending<span className="badge badge-primary">0</span>
    </div>{" "}
  </div>
</div>
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
                          <option selected="">-Payment-</option>
                          <option value={1}>Verified</option>
                          <option value={2}>Un Verified</option>
                         
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="form-control-input" >
                          <option selected="">-Delivery-</option>
                          <option value={1}>In Progress</option>
                          <option value={2}>Delivery</option>
                          <option value={3}>Pending</option>
                        </select>
                      </div>
                      <div className="col-md-2">
                      <button class="add-btn w-100" type="button" ><span class="px-1">Search</span></button>
                      </div>
                    </div>

                  </form>

                </div>




              </div>
              <div className="min-box my-4">
                <div className="products-table">
                  <table className="table align-middle" style={{ borderColor: "#4f4f51" }}>
                    <thead>
                      <tr>
                        <th><input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></th>
                        <th>Receipt</th>
                        <th >Invoice No.</th>
                        <th >Tracking No.</th>
                        <th >Transaction ID.</th>
                        <th >Product</th>
                        <th >Date</th>
                        <th >Delivery</th>
                        <th >Payment</th>
                        <th >Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    
                      <tr>
                        <td > <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /></td>
                        <td>  <div className="prod-img">
                              <img src={require("./p1.jpg")} alt="" />
                            </div></td>
                        <td>Skin Care</td>
                        <td>$95.12</td>
                        <td>$95.12</td>
                        <td>625</td>
                        <td><span className='text-ligh  ' style={{ color:"#278a1a", fontSize:"10px" ,backgroundColor: "#41ff2848",  borderRadius: 20, padding: '5px 10px' }}>Selling</span></td>
                        <td style={{ fontSize: 20 }}><AiOutlineZoomIn /></td>
                        <td>  <div className="form-check form-switch">
                          <input className="form-check-input" style={{ color:"white",border:"none",backgroundColor: '#0E9F6E', borderColor: '#03543f' }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                        </div>
                        </td>
                        <td class="text-center">
                                                    <a href="https://madeinpaktourism.com/beta/apanel/order-detail?id=m3g4w4f4" target="_blank" class="btn btn-sm btn-primary">
                                                        <i class="fa fa-file-invoice"></i> Details
                                                    </a>
                                                </td>
                      </tr>




                    </tbody>

                  </table>
                  <div className="data-pagination px-4 d-flex">
                    <p>SHOWING 41-60 OF 308</p>


                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
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
    )
}

export default Oerder;