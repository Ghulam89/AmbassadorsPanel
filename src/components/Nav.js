import React,{useState} from "react";

function Nav({press}) {
  const [darkTheme, setDarkTheme] = React.useState(false)
  return (
    <>
      <div className={`Nav2 px-3 shadow-sm bg-white d-flex justify-content-between align-items-center ` }>
        <div
          className="q"
          style={{
            fontSize: "17px",
            color: " #0E9F6E",
          }}
        >
          <i class="fa-solid fa-bars "
            onClick={press}
           id="toggle_desktop"
          ></i>
          <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"
             id="toggle_mobile"
           
          >
          <i class="fa-solid fa-bars"
      
          ></i>
</a>
        </div>

        <div className="nav">

          <i id="kk" class="fa-solid fa-moon"></i>

          <div class="dropdown p-2">
            <i
              class="fa-solid fa-bell"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>

            <ul class="dropdown-menu p-0" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item justify-content-between d-flex align-items-center" href="#">
                  <div>
                  <i
                    class="fa-brands fa-reddit"
                    style={{
                      fontSize: "40px",
                    
                    }}
                  ></i>
                  </div>
                  <div className="ps-4">
                  <p>
                    Yellow Sweet Corn Stock out, plea....
                    <br />
                    <span
                      style={{
                        backgroundColor: "#66db6f4b",
                        color: "green",
                        borderRadius: "40px",
                    
                        fontSize: "11px",
                        fontWeight: "500",
                      }}
                    >
                      New User
                    </span>
                  </p>
                  </div>
                </a>
              </li>

            

            </ul>
          </div>

          <div class="dropdown p-2">
            <i
              class="fa-brands fa-reddit"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ fontSize: "37px" }}
            ></i>

            <ul class="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
            
              <li>
                {" "}
                <a
                  href=""
                  className="d-flex"
                  style={{
                    marginRight: "10px",
                    color: "gray",
                    fontWeight: "500",
                  }}
                >
                  <i
                    class="fa-solid fa-table-cells-large"
                    style={{ color: "gray" }}
                  ></i>
                  Dashboard
                </a>
              </li>

              <li>
                {" "}
                <a href="" style={{ color: "gray", fontWeight: "500" }}>
                  <i
                    class="fa-solid fa-display"
                    style={{ color: "gray" }}
                  ></i>
                  Catlog
                </a>
              </li>

              <li>
                {" "}
                <a href="" style={{ color: "gray", fontWeight: "500" }}>
                  <i class="fa-solid fa-store" style={{ color: "gray" }}></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

export default Nav;
