






import React from "react";
import { Link } from "react-router-dom";

import {FiLogOut} from 'react-icons/fi'
function ScrollableSection({left}) {
  return (
    <>
  
    <div id="sidebar_mobile" className="sidebar bg-white" style={{left:left}}>
        <div className="">
           <img  src={require('../assets/images/e market-01.png')} width="140px" height="" alt="" />
        </div>
        <ul className="pb-5">
          <li className="nav-item">
            <Link
              to="/dashboard"
              className="fw-semi-bold nav-link active pt-0"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-table-cells-large"></i>Dashboard
            </Link>
          </li>

        


          <div class="accordion accordion-flush" id="accordionFlushExample2">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <li className="nav-item">
                    <Link
                      to="/product"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-brands fa-product-hunt"></i>Products
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample2"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/product"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/product_category"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Categories
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="accordion accordion-flush" id="accordionFlushExample2">
            <div class="accordion-item ">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <li className="nav-item">
                    <Link
                      to="/product"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-brands fa-product-hunt"></i>Sellers
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample2"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/sellers"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      All Sellers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/seller_requests"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Request Sellers
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>


          <li className="nav-item">
            <Link
              to="/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/demand/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-cart-arrow-down"></i>Demand Orders
            </Link>
          </li>

        

        
          <li className="nav-item">
            <Link
              to="/stores"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-users"></i>Stores
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/transactions"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-users"></i>Transactions
            </Link>
          </li>

       

          <li className="nav-item">
            <Link
              to="/business/opportunities"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-sharp fa-solid fa-briefcase"></i>Business
              Opportunities
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/internship"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-user-tag"></i>Iternships/Jobs
            </Link>
          </li>

       





          <li className="nav-item">
            <Link
              to="/settings"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-gear"></i>Profile Info
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/change_password"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-gear"></i>Change Password
            </Link>
          </li>
        </ul>


        <div style={{position:'fixed',bottom:'30px',left:'20px'}}>
        <button class="add-btn px-5 btn-md py-2" type="button"> <i><FiLogOut/></i> <span class="">Log Out</span></button>
        </div>
      </div>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
  <div className="sidebar2 bg-white" data-bs-dismiss="offcanvas">
        
        <ul>
          <li className="nav-item">
            <Link
    
              to="/dashboard"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-table-cells-large"></i>Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link

        
              to="/Manage"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-file-lines"></i>Manage Pages
            </Link>
          </li>

          <li className="nav-item">
            <Link
            aria-label="Close"

              to="/homepage"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-house"></i>Home Page
            </Link>
          </li>

          <div class="accordion accordion-flush" id="accordionFlushExample1">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <li className="nav-item">
                    <Link
            aria-label="Close"

                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      {" "}
                      <i class="fa-regular fa-circle-play"></i>Videos
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse "
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample1"
              >
                <div class="accordion-body ">
                  <li className="nav-item ">
                    
                    <Link
            aria-label="Close"

                      to="/videos"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Videos
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link
            aria-label="Close"

                      to="/videos"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Categories
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample2">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <li className="nav-item">
                    <Link
            aria-label="Close"

                      to="/product"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-brands fa-product-hunt"></i>Products
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample2"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
            aria-label="Close"

                      to="/product"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
            aria-label="Close"

                      to="/product"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Categories
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample3">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <li className="nav-item">
                    <Link


                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-regular fa-calendar"></i>Expo Schedules
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample3"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/expo"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Expo
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/expo"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Booking
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample4">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0  pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  <li className="nav-item">
                    <Link
                      to="/payments"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-regular fa-credit-card"></i>Payments
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample4"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/payments"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Payments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/ambassador_payment"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Ambassadors Payments
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/transactions"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Transactions
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <div class="accordion accordion-flush" id="accordionFlushExample5">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed p-0 pe-3 onfocus-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  <li className="nav-item">
                    <Link
                      to="#"
                      className="fw-semi-bold nav-link active"
                      aria-current="page"
                    >
                      <i class="fa-solid fa-people-carry-box"></i>Ambassadors
                    </Link>
                  </li>
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample5"
              >
                <div class="accordion-body">
                  <li className="nav-item">
                    <Link
                      to="/ambass"
                      className="fw-semi-bold nav-link active pt-0"
                      aria-current="page"
                    >
                      Ambassadors
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/ambass"
                      className="fw-semi-bold nav-link active pt-1"
                      aria-current="page"
                    >
                      Service Post
                    </Link>
                  </li>
                </div>
              </div>
            </div>
          </div>

          <li className="nav-item">
            <Link
              to="/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-cart-shopping"></i>Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/demand/order"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-cart-arrow-down"></i>Demand Orders
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/payment/methode"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-money-check-dollar"></i>Payments Methods
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/sellers"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-users"></i>Sellers
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/brands"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-brands fa-blogger"></i>Brands
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-brands fa-servicestack"></i>Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/event"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-regular fa-calendar"></i>Events
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/business/opportunities"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-sharp fa-solid fa-briefcase"></i>Busuness
              Opportunities
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/internship"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-user-tag"></i>Iternship/Job
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/team"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-people-group"></i>Team
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/participant"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-user-plus"></i>Our Participant
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/news"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-regular fa-newspaper"></i>News
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/new/arrival"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-solid fa-file-circle-plus"></i>New Arrivals
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/forms"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-regular fa-file-lines"></i>Forms
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/subscriber"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              <i class="fa-brands fa-stripe-s"></i>Subscribers
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/settings"
              className="fw-semi-bold nav-link active"
              aria-current="page"
            >
              {" "}
              <i class="fa-solid fa-gear"></i>Settings
            </Link>
          </li>
        </ul>
      </div>
  </div>
</div>
 
    </>
  );
}

export default ScrollableSection;
