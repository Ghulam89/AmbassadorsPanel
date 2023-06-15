import axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import ApiUrl from "../BaseUrl";
function ChangePassword() {



  const sendData = (values) => {


     if(values?.email?.value?.length===0){
      toast('Please Enter your email address')
     }
     else if(values?.oldPassword?.value?.length===0){
      toast('Please Enter your old password')
     }
     else if(values?.newPassword?.value?.length===0){
      toast('Please Enter your new password')
     }

     else if(values?.newPassword?.value !== values.confirmPassword.value){

      toast("password and confirm password must be the same");
     }
     else {

      const params = {
        "email":values.email.value,
        "oldPassword":values.oldPassword.value,
        "newPassword":values.newPassword.value
        
        }
    
        axios
          .post(`${ApiUrl}/seller/changePassword`, params)
    
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

     }
  
    
  
};



  return (
    <>
      <div>
        <section>
          <div className="container py-4">
            <ToastContainer/>
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
                    <form   onSubmit={(e) => {
                                        e.preventDefault();
                                        sendData(e.target);
                                      }}
                                      >
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label>Email</label>
                          <input
                            type="email"
                    
                            name="email"
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Old Password"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Old Password</label>
                          <input
                            type="password"
                            name="oldPassword"
                           
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="Old Password"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>New Password</label>
                          <input
                            type="password"
                            name="newPassword"
                          
                            className="form-control-input"
                            aria-labelledby="passwordHelpInline"
                            placeholder="New Password"
                          />
                        </div>
                        <div className="col-md-6">
                          <label>Confirm New Password</label>
                          <input
                            type="password"
                            name="confirmPassword"
                         
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

export default ChangePassword;
