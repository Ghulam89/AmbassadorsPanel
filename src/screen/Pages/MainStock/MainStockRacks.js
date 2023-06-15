import React, { useState, useEffect,useRef } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {AiFillCloseCircle } from "react-icons/ai";
import ApiUrl from "../BaseUrl";
import { Link, useParams } from "react-router-dom";
function MainStockRacks() {

  const {id}=useParams()


  const [rackId,setRackId] = useState(null)

  console.log('===========',rackId);
  const [racks, setRacks] = useState([]);

  
    console.log(racks);
  useEffect(() => {
    axios.get(`${ApiUrl}/mainStockRack/getBySellerID?id=` + id).then((res) => {
      console.log(res.data);
      setRacks(res.data);
      console.log(racks);
    });
  }, []);

 

  

  const updateSend = (values) => {
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
        .put(`${ApiUrl}/product/updateById`, params)

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
                <h5 className="kk ps-3"> Manage Main Stock Racks</h5>

                    
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
                                <div        data-bs-dismiss="modal">
                                  
                                  <Link
                                    

                                    to={`/viewProduct/${item?.product}`}
                             
                                  >View Product</Link>  
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

export default MainStockRacks;
