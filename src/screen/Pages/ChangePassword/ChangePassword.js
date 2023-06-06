import React from "react";

function ChangePassword() {
  return (
    <>
      <div>
        <section>
          <div className="container py-4">
            <h4>Change Password</h4>
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
                          <label>Old Password</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Old Password"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>New Password</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="New Password"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Confirm New Password</label>
                          <input
                            type="password"
                            id="inputPassword6"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Contact Number"
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

export default ChangePassword;
