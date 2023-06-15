import React, { useEffect,useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import ApiUrl from "../BaseUrl";

function Settings() {

  const [seller, setSeller] = useState({});
  useEffect(()=>{

    axios.get(`${ApiUrl}/embassador/getById?id=`+localStorage.getItem('ambassadorId') ).then((res) => {
      console.log(res.data);
      setSeller(res.data);
      console.log(seller);


    });

  },[])
  
  const sendData = (values) => {

  
      const params = new FormData();
      params.append("name", values.name.value);
      params.append("brandName", values.brandName.value);
      params.append("brandLogo", values.brandLogo.files[0]);
      params.append("email", values.email.value);
      // params.append("phoneNo", values.phoneNo.value);
      // params.append("password", values.password.value);

      axios
        .put(`${ApiUrl}/embassador/updateByID?id=` +localStorage.getItem('ambassadorId'), params)

        .then((res) => {
          console.log(res.data);

          if (res.data.status === "fail") {
            toast(res.data.msg);
          } else if (res.data.status === "success") {
            toast("Seller created successfully!");
          }
        })
        .catch((err) => {
          console.log(err.data);
        });
    
  };

  return (
    <>
      <div>
        <section>
          <ToastContainer />
          <div className="container py-4">
            <h4>Edit Profile </h4>
            <div className="row">
              <div className="col-md-12">
                <div
                  class="tab-content border bg-white px-5 py-4 rounded"
                  id="v-pills-tabContent"
                >
                  <div
                    class="tab-pane fade show active"
                    id="v-pills-home"
                    role="tabpanel"
                    aria-labelledby="v-pills-home-tab"
                  >
                    <form    onSubmit={(e) => {
                                        e.preventDefault();
                                        sendData(e.target);
                                      }}
                                      >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label>Your Name</label>
                          <input
                            type="text"
                            id="inputPassword6"
                            name="name"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Your Name"
                            defaultValue={seller?.name}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Your Email</label>
                          <input
                            type="email"
                            name="email"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Domain Name"
                            defaultValue={seller?.email}
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Seller Blo</label>
                          <input
                            type="text"
                            id="inputPassword6"
                            name="brandName"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Seller Blo"
                            defaultValue={seller?.brandName}
                          />
                        </div>
                        <div className="col-md-12">
                          <label>Image</label>
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
                                  className=""
                                  name="brandLogo"
                                  defaultValue={seller?.image}
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
                                  (Only *.jpeg, *.webp and *.png images will be
                                  accepted)
                                </em>
                              </div>
                              <div className="text-green-500" />
                              <aside className="flex flex-row flex-wrap mt-4" />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-lg-6 col-md-12 py-3">
                          <button type="button" class="cancel-btn btn-lg">
                            Cancel
                          </button>
                        </div>
                        <div class="col-lg-6 col-md-12 py-3">
                          <button type="submit" class="add-last-btn btn-lg">
                            Update
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Settings;
