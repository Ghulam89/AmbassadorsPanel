import React, { useState, useEffect } from "react";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import ApiUrl from "../BaseUrl";
import { Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  const [singleStock, setSingleStock] = useState();

  const [categories, setCategories] = useState([]);
  const [getcategories, setGetCategories] = useState(null);
  console.log("=====ladf====lsadf=====", getcategories);
  const [allproduct, setAllProduct] = useState([]);

  console.log("=========selling product========", allproduct);
  const [allrecycling, setAllRecycling] = useState([]);

  console.log("allrecycling product", allrecycling);
  console.log(allproduct);
  const [seller, setSellers] = useState([]);
  const [getsellerSingle, setSellerSingle] = useState(null);
  console.log("==============DFDLF;KKL;LK=======", seller?.name);
  const sellerID = localStorage.getItem("sellerId");

  const [sellerid, setSellerID] = useState();

  useEffect(() => {
    axios.get(`${ApiUrl}/category/getAll`).then((res) => {
      console.log(res.data);
      setCategories([...res.data]);
      console.log(categories);
    });

    axios.get(`${ApiUrl}/productSelling/getAll`).then((res) => {
      console.log(res.data);
      setAllProduct(res.data);
      console.log(categories);
    });

    axios.get(`${ApiUrl}/recycling/getAll`).then((res) => {
      console.log(res.data);
      setAllRecycling(res.data);
      console.log(allrecycling);
    });

    axios.get(`${ApiUrl}/seller/getAll`).then((res) => {
      console.log(res.data);
      setSellers(res.data);
      console.log(categories);
    });
  }, []);

  useEffect(() => {
    if (categories.length > 0) {
      const AllCategories = allproduct.map((sub) => {
        const data =
          categories &&
          categories.find((userData) => userData._id === sub.categoryID);

        return data || null;
      });

      setGetCategories(AllCategories);
    }

    if (seller.length > 0) {
      const SingleSeller = allproduct.map((sub) => {
        const data =
          seller && seller.find((userData) => userData._id === sub.sellerID);

        return data || null;
      });

      setSellerSingle(SingleSeller);
    }
  }, [categories]);

  useEffect(() => {
    if (allproduct.length > 0) {
      const AllCategories = allproduct.map((sub) => {
        const data =
          categories &&
          categories.find((userData) => userData._id === sub.categoryID);

        return data || null;
      });

      setGetCategories(AllCategories);
    }

    if (seller.length > 0) {
      const SingleSeller = allproduct.map((sub) => {
        const data =
          seller && seller.find((userData) => userData._id === sub.sellerID);

        return data || null;
      });

      setSellerSingle(SingleSeller);
    }
  }, [categories]);

  const [selectCategory, setSelectCategory] = useState("");

  console.log(selectCategory);

  const [images, setImages] = useState([]);

  const imageHandler = (e) => {
    setImages([...images, e.target.files[0]]);
  };

  console.log(images, "==================>upload images");

  const handleRemoveItem = (id) => {
    setImages(images.filter((item) => item !== id));
  };

  const [totalprice, setPrice] = useState();
  const [admin, setAdmin] = useState();
  const [ambassador, setAmbassador] = useState();

  const [sellingprouduct, setProductID] = useState("");

  console.log("================produtid================", sellingprouduct);
  const sendData = async (values) => {
    const categoryByid = await axios.get(
      `${ApiUrl}/category/getById?id=` + values.categoryID.value
    );

    console.log(Number(categoryByid?.data?.adminCommission));

    const adminprice =
      (Number(values.productPrice.value) *
        Number(categoryByid?.data?.adminCommission)) /
      100;

    console.log("admin price", values?.categoryID?.value);
    const ambassadorprice =
      (Number(values.productPrice.value) *
        Number(categoryByid?.data?.ambassadorCommission)) /
      100;

    const totalPrice =
      Number(values?.productPrice?.value) + adminprice + ambassadorprice;

    document.getElementById("Retail").value = totalPrice;
    document.getElementById("Admin").value =
      categoryByid?.data?.adminCommission;
    document.getElementById("Ambassador").value =
      categoryByid?.data?.ambassadorCommission;

    console.log("===============", totalPrice);

    const params = new FormData();
    params.append("id", sellingprouduct);
    params.append("title", values.title.value);
    params.append("productPrice", totalPrice);
    params.append("retailPrice", values.retailPrice.value);
    params.append("unit", values.unit.value);
    params.append("quantity", values.quantity.value);
    params.append("delivery", values.delivery.value);
    params.append("youtubeVideoLink", values.youtubeVideoLink.value);
    params.append("country", values.country.value);
    params.append("city", values.city.value);
    params.append("productDetails", values.productDetails.value);
    params.append("image", values.image.files[0]);
    for (let i = 0; i < images.length; i++) {
      params.append("multiImages", images[i]);
    }
    params.append("state", selectCategory);
    params.append("categoryID", values.categoryID.value);
    params.append("status", values.status.value);

    axios
      .put(`${ApiUrl}/productSelling/updateById`, params)

      .then((res) => {
        console.log(res.data);

        if (res.data.status === "success") {
        }
      });
  };

  const RecyclingData = async (values) => {
    const categoryByid = await axios.get(
      `${ApiUrl}/category/getById?id=` + values.categoryID.value
    );

    console.log(Number(categoryByid?.data?.adminCommission));

    const adminprice =
      (Number(values.productPrice.value) *
        Number(categoryByid?.data?.adminCommission)) /
      100;

    console.log("admin price", values?.categoryID?.value);
    const ambassadorprice =
      (Number(values.productPrice.value) *
        Number(categoryByid?.data?.ambassadorCommission)) /
      100;

    const totalPrice =
      Number(values?.productPrice?.value) + adminprice + ambassadorprice;

    document.getElementById("Retail").value = totalPrice;
    document.getElementById("Admin").value =
      categoryByid?.data?.adminCommission;
    document.getElementById("Ambassador").value =
      categoryByid?.data?.ambassadorCommission;

    console.log("===============", totalPrice);

    const params = new FormData();
    params.append("id", sellingprouduct);
    params.append("title", values.title.value);
    params.append("toDate", values.toDate.value);
    params.append("fromDate", values.fromDate.value);
    params.append("rentperDay", values.rentperDay.value);
    params.append("productPrice", totalPrice);
    params.append("retailPrice", values.retailPrice.value);
    params.append("unit", values.unit.value);
    params.append("quantity", values.quantity.value);
    params.append("delivery", values.delivery.value);
    params.append("youtubeVideoLink", values.youtubeVideoLink.value);
    params.append("country", values.country.value);
    params.append("city", values.city.value);
    params.append("productDetails", values.productDetails.value);
    params.append("image", values.image.files[0]);
    for (let i = 0; i < images.length; i++) {
      params.append("multiImages", images[i]);
    }
    params.append("categoryID", values.categoryID.value);
    params.append("status", values.status.value);

    axios
      .put(`${ApiUrl}/recycling/updateById`, params)

      .then((res) => {
        console.log(res.data);

        if (res.data.status === "success") {
        }
      });
  };

  const onDeleteStudent = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios
          .delete(`${ApiUrl}/productSelling/deleteByID?id=` + id)
          .then((res) => {
            console.log(res.data);

            toast("Product deleted successfully!");
          });
      },
    });
  };

  const onDeleteRecycling = (id) => {
    Modal.confirm({
      title: "Are you sure you want to delete?",
      onOk: () => {
        axios.delete(`${ApiUrl}/recycling/deleteByID?id=` + id).then((res) => {
          console.log(res.data);

          toast("Product deleted successfully!");
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
                <h5 className="kk ps-3"> Manage Products</h5>

                <ul
                  class="nav nav-pills mb-3 d-flex "
                  id="pills-tab"
                  role="tablist"
                  style={{ gap: "12px", justifyContent: "flex-start" }}
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-Recycling-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Recycling"
                      type="button"
                      role="tab"
                      aria-controls="pills-Recycling"
                      aria-selected="true"
                    >
                      Recycling
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Selling-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Selling"
                      type="button"
                      role="tab"
                      aria-controls="pills-Selling"
                      aria-selected="false"
                    >
                      Selling
                    </button>
                  </li>
                </ul>

                {/* Modal-Del */}
                <div
                  className="offcanvas offcanvas-end"
                  tabIndex={-1}
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >
                  <div className="offcanvas-header px-4">
                    <div className="content-header">
                      <h4>Manage Product Create / Update</h4>
                      <p>Update products info, combinations and extras.</p>
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
                  <div className="offcanvas-body all_categories p-0">
                    <div className="form-data">
                      <ul class="nav nav-pills" id="pills-tab" role="tablist">
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
                            Recycling
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
                            Selling
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
                          <div className="wrap-data p-5">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                RecyclingData(e.target);
                              }}
                            >
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Category
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="categoryID"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                    defaultValue={singleStock?.categoryID}
                                  >
                                    {categories?.map((item, index) => {
                                      return (
                                        <>
                                          <option
                                            value={item?._id}
                                          >{`${item?.title} (Ambassador Commission ${item?.ambassadorCommission}% ) (Admin Commission ${item?.adminCommission}% )`}</option>
                                        </>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Title
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="title"
                                    id="inputPassword6"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.title}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    To Date
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="date"
                                    name="toDate"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.toDate}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    FromDate
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="date"
                                    name="fromDate"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.formDate}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Rental Per Day
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="rentperDay"
                                    id="inputPassword6"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.rentperDay}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Youtube Video Link
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="youtubeVideoLink"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.youtubeVideoLink}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Product Price
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="productPrice"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                    defaultValue={singleStock?.productPrice}
                                  />
                                </div>
                              </div>
                              {/* <div className="row pt-4  align-items-center">
                                        <div className="col-md-4">
                                          <label
                                            for="inputPassword6"
                                            className="form-label"
                                          >
                                            Ambassador Commission
                                          </label>
                                        </div>
                                        <div className="col-md-8">
                                          <input
                                            type="text"
                                            id="Ambassador"
                                            className="form-control-input"
                                            aria-labelledby="passwordHelpInline"
                                            placeholder=" Product Price"

                                          />
                                        </div>
                                      </div> */}
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Admin Commission
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="Admin"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Retail price
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="retailPrice"
                                    id="Retail"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                    defaultValue={singleStock?.retailPrice}
                                  />
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Unit
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="unit"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Unit"
                                    defaultValue={singleStock?.unit}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Quantity
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="inputPassword6"
                                    name="quantity"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Quantity"
                                    defaultValue={singleStock?.quantity}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Currency
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="inputPassword6"
                                    name="currency"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Quantity"
                                  />
                                </div>
                              </div>

                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Delivery
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="delivery"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                  >
                                    <option value="National ">National </option>
                                    <option value="International">
                                      International{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Country
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    class="form-control-input-2"
                                    name="country"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Pakistan</option>
                                    <option value="1">China</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    City
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="city"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="City"
                                  />
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Image
                                  </label>
                                </div>
                                <div className="col-md-8">
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
                                          name="image"
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
                                            <line
                                              x1={12}
                                              y1={12}
                                              x2={12}
                                              y2={21}
                                            />
                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                            <polyline points="16 16 12 12 8 16" />
                                          </svg>
                                        </span>
                                        <p className="text-sm mt-2">
                                          Drag your images here
                                        </p>
                                        <em className="text-xs text-gray-400">
                                          (Only *.jpeg, *.webp and *.png images
                                          will be accepted)
                                        </em>
                                      </div>
                                      <div className="text-green-500" />
                                      <aside className="flex flex-row flex-wrap mt-4" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Upload multiple product images
                                  </label>
                                </div>
                                <div className="col-md-8">
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
                                          type="file"
                                          onChange={imageHandler}
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
                                            <line
                                              x1={12}
                                              y1={12}
                                              x2={12}
                                              y2={21}
                                            />
                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                            <polyline points="16 16 12 12 8 16" />
                                          </svg>
                                        </span>
                                        <p className="text-sm mt-2">
                                          Drag your images here
                                        </p>
                                        <em className="text-xs text-gray-400">
                                          (Only *.jpeg, *.webp and *.png images
                                          will be accepted)
                                        </em>
                                      </div>
                                      <div className="text-green-500" />
                                      <aside className="flex flex-row flex-wrap mt-4" />
                                    </div>
                                  </div>
                                  <div className="col-md-12 d-flex gap-2 my-3">
                                    {images &&
                                      images?.map((i) => {
                                        return (
                                          <>
                                            <div className="col-md-2  position-relative">
                                              <img
                                                src={URL.createObjectURL(i)}
                                                width="90px"
                                                height="90px"
                                                className="border rounded-3"
                                              />
                                              <span
                                                className="border position-absolute p-1 py-0 rounded-circle bg-dark text-white"
                                                style={{
                                                  left: "80px",
                                                  lineHeight: "15px",
                                                  fontSize: "x-small",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  handleRemoveItem(i)
                                                }
                                              >
                                                x
                                              </span>
                                            </div>
                                          </>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    product Detail
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="productDetails"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="product Detail"
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
                                    name="status"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                  >
                                    <option value="1">Active</option>
                                    <option value="1">Inactive</option>
                                  </select>
                                </div>
                              </div>
                              <div className="offcanvas-footer px-5 py-3">
                                <div className="content-footer">
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
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div
                          class="tab-pane fade"
                          id="pills-profile"
                          role="tabpanel"
                          aria-labelledby="pills-profile-tab"
                        >
                          <div className="text-end   me-3 pt-4">
                            <button
                              id="All_Btn"
                              onClick={() => {
                                setSelectCategory("New Product");
                                document.getElementById(
                                  "All_Btn"
                                ).style.backgroundColor = "green";

                                document.getElementById(
                                  "all_btn"
                                ).style.backgroundColor = "#eee";
                              }}
                              className="  product_button "
                              type="button"
                            >
                              <span className="px-1">New Product</span>
                            </button>

                            <button
                              id="all_btn"
                              onClick={() => {
                                setSelectCategory("Second hand");

                                document.getElementById(
                                  "all_btn"
                                ).style.backgroundColor = "green";

                                document.getElementById(
                                  "All_Btn"
                                ).style.backgroundColor = "#eee";
                              }}
                              className="ms-3 product_button "
                              type="button"
                            >
                              <span className="px-1">Second hand</span>
                            </button>
                          </div>

                          <div className="wrap-data p-5">
                            <form
                              onSubmit={(e) => {
                                e.preventDefault();
                                sendData(e.target);
                              }}
                            >
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Category
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="categoryID"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                    defaultValue={singleStock?.categoryID}
                                  >
                                    {categories?.map((item, index) => {
                                      return (
                                        <>
                                          <option
                                            value={item?._id}
                                          >{`${item?.title} (Ambassador Commission ${item?.ambassadorCommission}% ) (Admin Commission ${item?.adminCommission}% )`}</option>
                                        </>
                                      );
                                    })}
                                  </select>
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Title
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="title"
                                    id="inputPassword6"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.title}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Youtube Video Link
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="youtubeVideoLink"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Title"
                                    defaultValue={singleStock?.youtubeVideoLink}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Product Price
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="productPrice"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                    defaultValue={singleStock?.productPrice}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Ambassador Commission
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="Ambassador"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Admin Commission
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="Admin"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Retail price
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="retailPrice"
                                    id="Retail"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder=" Product Price"
                                  />
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Unit
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="unit"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Unit"
                                    defaultValue={singleStock?.unit}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Quantity
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="inputPassword6"
                                    name="quantity"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Quantity"
                                    defaultValue={singleStock?.quantity}
                                  />
                                </div>
                              </div>
                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Currency
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    id="inputPassword6"
                                    name="currency"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="Quantity"
                                    defaultValue={singleStock?.currency}
                                  />
                                </div>
                              </div>

                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Delivery
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    name="delivery"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                    defaultValue={singleStock?.delivery}
                                  >
                                    <option value="National ">National </option>
                                    <option value="International">
                                      International{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Country
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <select
                                    class="form-control-input-2"
                                    name="country"
                                    aria-label="Default select example"
                                    defaultValue={singleStock?.country}
                                  >
                                    <option value="1">Pakistan</option>
                                    <option value="1">China</option>
                                  </select>
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    City
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="city"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="City"
                                    defaultValue={singleStock?.city}
                                  />
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Image
                                  </label>
                                </div>
                                <div className="col-md-8">
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
                                          name="image"
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
                                            <line
                                              x1={12}
                                              y1={12}
                                              x2={12}
                                              y2={21}
                                            />
                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                            <polyline points="16 16 12 12 8 16" />
                                          </svg>
                                        </span>
                                        <p className="text-sm mt-2">
                                          Drag your images here
                                        </p>
                                        <em className="text-xs text-gray-400">
                                          (Only *.jpeg, *.webp and *.png images
                                          will be accepted)
                                        </em>
                                      </div>
                                      <div className="text-green-500" />
                                      <aside className="flex flex-row flex-wrap mt-4" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row  pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    Upload multiple product images
                                  </label>
                                </div>
                                <div className="col-md-8">
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
                                          type="file"
                                          onChange={imageHandler}
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
                                            <line
                                              x1={12}
                                              y1={12}
                                              x2={12}
                                              y2={21}
                                            />
                                            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                            <polyline points="16 16 12 12 8 16" />
                                          </svg>
                                        </span>
                                        <p className="text-sm mt-2">
                                          Drag your images here
                                        </p>
                                        <em className="text-xs text-gray-400">
                                          (Only *.jpeg, *.webp and *.png images
                                          will be accepted)
                                        </em>
                                      </div>
                                      <div className="text-green-500" />
                                      <aside className="flex flex-row flex-wrap mt-4" />
                                    </div>
                                  </div>
                                  <div className="col-md-12 d-flex gap-2 my-3">
                                    {images &&
                                      images?.map((i) => {
                                        return (
                                          <>
                                            <div className="col-md-2  position-relative">
                                              <img
                                                src={URL.createObjectURL(i)}
                                                width="90px"
                                                height="90px"
                                                className="border rounded-3"
                                              />
                                              <span
                                                className="border position-absolute p-1 py-0 rounded-circle bg-dark text-white"
                                                style={{
                                                  left: "80px",
                                                  lineHeight: "15px",
                                                  fontSize: "x-small",
                                                  cursor: "pointer",
                                                }}
                                                onClick={() =>
                                                  handleRemoveItem(i)
                                                }
                                              >
                                                x
                                              </span>
                                            </div>
                                          </>
                                        );
                                      })}
                                  </div>
                                </div>
                              </div>

                              <div className="row pt-4  align-items-center">
                                <div className="col-md-4">
                                  <label
                                    for="inputPassword6"
                                    className="form-label"
                                  >
                                    product Detail
                                  </label>
                                </div>
                                <div className="col-md-8">
                                  <input
                                    type="text"
                                    name="productDetails"
                                    className="form-control-input"
                                    aria-labelledby="passwordHelpInline"
                                    placeholder="product Detail"
                                    defaultValue={singleStock?.productDetail}
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
                                    name="status"
                                    class="form-control-input-2"
                                    aria-label="Default select example"
                                    defaultValue={singleStock?.status}
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
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Canvas */}
                </div>

                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active"
                    id="pills-Recycling"
                    role="tabpanel"
                    aria-labelledby="pills-Recycling-tab"
                  >
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
                              <th>#Amb Id</th>
                              <th>Image</th>
                              <th>Category</th>
                              <th>Seller</th>
                              <th>Quantity</th>
                              <th>Price(Rs)</th>

                              {/* <th>Approved</th> */}
                              <th>Status</th>
                              <th>Approved</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allrecycling?.map((item, index) => {
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
                                    <td>MP792322</td>
                                    <td>
                                      {" "}
                                      <div className="prod-img">
                                        <img
                                          src={`${ApiUrl}/images/${item?.image}`}
                                          alt=""
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      {getcategories &&
                                        getcategories[index]?.title}
                                    </td>
                                    <td>{seller && seller[index]?.name}</td>
                                    <td>{item?.quantity}</td>
                                    <td>{item?.retailPrice}</td>

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
                                        Active
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        onClick={() => {
                                          const params = {
                                            id: item?._id,
                                            productStatus: "approved",
                                          };

                                          axios
                                            .put(
                                              `${ApiUrl}/recycling/updateById`,
                                              params
                                            )
                                            .then((res) => {
                                              console.log(res.data);

                                              toast(
                                                "status updated successfully!"
                                              );
                                            });
                                        }}
                                        target="_blank"
                                        class="btn btn-sm btn-primary py-1"
                                      >
                                        Approved
                                      </button>
                                    </td>
                                    <td>
                                      <div className="actions d-flex">
                                        <span
                                          onClick={() => {
                                            // navigate(`/seller_details/${id}/${item?._id}`);
                                            setProductID(item?._id);

                                            axios
                                              .get(
                                                `${ApiUrl}/recycling/getById?id=` +
                                                  item?._id
                                              )
                                              .then((res) => {
                                                console.log(
                                                  res.data,
                                                  "singleStock"
                                                );

                                                setSingleStock(res.data);
                                              });
                                          }}
                                          data-bs-toggle="offcanvas"
                                          data-bs-target="#offcanvasRight"
                                          aria-controls="offcanvasRight"
                                          style={{ fontSize: 21 }}
                                        >
                                          <FiEdit />
                                        </span>
                                        <span
                                          onClick={() => {
                                            onDeleteRecycling(item?._id);
                                          }}
                                          style={{ fontSize: 21 }}
                                          className="px-3"
                                        >
                                          <RiDeleteBinLine />
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade"
                    id="pills-Selling"
                    role="tabpanel"
                    aria-labelledby="pills-Selling-tab"
                  >
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
                              <th>#Amb Id</th>
                              <th>Image</th>
                              <th>Category</th>
                              <th>Seller</th>
                              <th>Quantity</th>
                              <th>Price(Rs)</th>
                              <th>Featured</th>

                              <th>Approved</th>
                              <th>Status</th>
                              <th>ACTIONS</th>
                            </tr>
                          </thead>
                          <tbody>
                            {allproduct?.map((item, index) => {
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
                                    <td>MP792322</td>
                                    <td>
                                      {" "}
                                      <div className="prod-img">
                                        <img
                                          src={`${ApiUrl}/images/${item?.image}`}
                                          alt=""
                                        />
                                      </div>
                                    </td>
                                    <td>
                                      {getcategories &&
                                        getcategories[index]?.title}
                                    </td>
                                    {seller && seller[index]?.name}
                                    <td>{item?.quantity}</td>
                                    <td>{item?.retailPrice}</td>

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
                                        {item?.state}
                                      </span>
                                    </td>

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
                                        Active
                                      </span>
                                    </td>
                                    <td>
                                      <button
                                        onClick={() => {
                                          const params = {
                                            id: item?._id,
                                            productStatus: "approved",
                                          };

                                          axios
                                            .put(
                                              `${ApiUrl}/productSelling/updateById`,
                                              params
                                            )
                                            .then((res) => {
                                              console.log(res.data);

                                              toast(
                                                "status updated successfully!"
                                              );
                                            });
                                        }}
                                        target="_blank"
                                        class="btn btn-sm btn-primary py-1"
                                      >
                                        Approved
                                      </button>
                                    </td>
                                    <td>
                                      <div className="actions d-flex">
                                        <span
                                          onClick={() => {
                                            // navigate(`/seller_details/${id}/${item?._id}`);
                                            setProductID(item?._id);
                                            setSellerID(item?.sellerID);

                                            axios
                                              .get(
                                                `${ApiUrl}/productSelling/getById?id=` +
                                                  item?._id
                                              )
                                              .then((res) => {
                                                console.log(
                                                  res.data,
                                                  "singleStock"
                                                );

                                                setSingleStock(res.data);
                                              });
                                          }}
                                          data-bs-toggle="offcanvas"
                                          data-bs-target="#offcanvasRight"
                                          aria-controls="offcanvasRight"
                                          style={{ fontSize: 21 }}
                                        >
                                          <FiEdit />
                                        </span>
                                        <span
                                          onClick={() => {
                                            onDeleteStudent(item?._id);
                                          }}
                                          style={{ fontSize: 21 }}
                                          className="px-3"
                                        >
                                          <RiDeleteBinLine />
                                        </span>
                                      </div>
                                    </td>
                                  </tr>
                                </>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
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

export default Product;
