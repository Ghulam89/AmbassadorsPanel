import React from "react";

function Settings() {
  return (
    <>
      <div>
        <section>
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
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label>Your Name</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Your Email</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Domain Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Contact Number</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Contact Number"
                          />
                        </div>
                        <div className="col-md-12">
                          <label>Profile Image</label>
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
                        <div className="col-md-12">
                          <label>Business/office address</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Your Name"
                          />
                        </div>
                      </div>

                      <div class="row mt-3">
                        <div class="col-lg-6 col-md-12 py-3">
                          <button type="button" class="cancel-btn btn-lg">
                            Cancel
                          </button>
                        </div>
                        <div class="col-lg-6 col-md-12 py-3">
                          <button type="button" class="add-last-btn btn-lg">
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
