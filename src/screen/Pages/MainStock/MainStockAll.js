import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ERacks from "../E-Racks/ERacks";
import EStock from "../E_Stock/EStock";
import Services from "../Servicesx/Services";
import E_Display from "../E_Display/E_Display";
function AddSellerDetails() {
 
   const   {id} =  useParams();



   


  return (
    <>
      <div>
        <header>
          <div className="bg-theme">
            <div className="main-wrapper">
              <div className="container py-4">
                <h5 className="kk ps-3"> Manage Store Details</h5>

                <ul
                  class="nav nav-pills mb-3 d-flex "
                  id="pills-tab"
                  role="tablist"
                  style={{ gap: "12px" ,justifyContent:'flex-start'}}
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
                      E-racks
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
                           E-Stocks
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
                  
                    <ERacks  />
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                  >
                   
                   <EStock />
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

export default AddSellerDetails;
