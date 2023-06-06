import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import pvalidation from "views/validations/product-validation";
import PropTypes from "prop-types";
import { API } from "config/api";
// components

export default function CardTable({ color }) {
  const [name, setName] = useState("");
  const [publish, setPublish] = useState(false);
  const [title, setTitle] = useState("");
  const [increament, setIncreament] = useState(0);
  const [toggle, setSwitch] = useState(0);
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [embed_code, setEmbed_code] = useState("");
  const [tag, setTag] = useState("");
  const [product, setProduct] = useState([]);
  const [file, setCSV] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showpopup, setshowpopup] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModal1 = () => {
    setshowpopup(true);
  };

  const closepopup = () => {
    setshowpopup(false);
  };

  const [show1, setShowModal1] = useState(false);

  const closeModal1 = () => {
    setShowModal1(false);
  };

  const [showModal2, setShowModal2] = useState(false);

  const fields = {
    name: "",
    title: "",
    tag: "",
    embed_title: "",
    image: "",
    publish: "",
    description: "",
  };
  const [form, setForm] = useState(fields);
  const [errors, setError] = useState({});
  const [show2, setShow2] = useState(false, {
    id: null,
  });

  const handleClose2 = () => setShow2(false);

  const handleSubmit = (event) => {
    let published = publish ? 1 : 0;
    let item = { name, title, image, description, embed_code, tag, published };
    const fd = new FormData();
    fd.append("name", name);
    fd.append("title", title);
    fd.append("image", image);
    fd.append("description", description);
    fd.append("embed_code", embed_code);
    fd.append("tag", tag);
    fd.append("published", published);
    event.preventDefault();
    setError(pvalidation(item));

    axios
      .post(API.BASE_URL+"api/add-product", fd)
      .then((res) => {
        toast.success("Product Saved Successfully!");
        get_products();
        setShowModal(false);
      });
  };

  const handleSubmit1 = (event) => {
    let item = { file };
    event.preventDefault();
    const fd = new FormData();
    fd.append("file", file);

    axios.post(API.BASE_URL+"api/csv_file", fd).then((res) => {
      toast.success("CSV Saved Successfully!");
      get_products();
      setshowpopup(false);
    });
  };

  //  const handleView = (id) => (e) => {

  //  }

  const handleSwitch = (id) => (e) => {
    const fd = new FormData();
    fd.append("published", e.currentTarget.checked == true ? 1 : 0);
    axios
      .post(API.BASE_URL+"api/edit-publish/" + id, fd)
      .then((res) => {
        toast.success(res.data.message);
        get_products();
        // setSwitch(id);
        // setPublish(e.currentTarget.checked)
      });
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setForm((prevState) => ({
      ...prevState, // shallow copy all previous state
      [name]: value, // update specific key/value
    }));
  };

  const handleShow1 = (data) => () => {
    // console.log(data);
    setForm({
      name: data.name,
      title: data.title,
      tag: data.tag,
      embed_title: data.embed_code,
      image: data.title,
      publish: data.publish == 1 ? 1 : 0,
      description: data.description,
    });
    setIncreament(data.id);
    setShowModal2(true);
  };

  /** -------------------------------------------Edit Product------------------------------------------ */
  const editInfo = (event) => {
    // console.log(form.publish);
    // console.log(publish);
    let published = publish == true ? 1 : 0;
    const fd = new FormData();

    fd.append("name", form.name);
    fd.append("title", form.title);
    fd.append("image", image);
    fd.append("description", form.description);
    fd.append("embed_code", form.embed_title);
    fd.append("tag", form.tag);
    fd.append("published", publish ? publish : form.publish);
    event.preventDefault();
    // return false;
    axios
      .post(API.BASE_URL+"api/edit-products/" + increament, fd)
      .then((res) => {
        // console.log(res);
        toast.success(res.data.message);
        get_products();
        setShowModal2(false);
      });
  };

  const handleDeleteTrue = (e) => {
    axios
      .delete(API.BASE_URL+"api/delete-products/" + show2.id)
      .then(
        (response) => {
          // this only runs on success
          // console.log("RESPONSE FROM POST", response.data);
          toast.success(response.data.Message);
          setShow2(false, {
            id: null,
          });
          get_products();
        },
        (err) => {
          console.log("Error While Posting Data", err);
          toast.warning(err);
        }
      );
  };
  const handleClose1 = () => setShowModal2(false);

  /**------------------------------------------------------Get Products----------------------------------------------- */

  const get_products = (event) => {
    fetch(API.BASE_URL+"api/get-products")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setProduct(data.products);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    get_products();
  }, []);

  var ProductList = "";

  const Product = ({ products }) => {};

  const handleShow2 = (id) => () => {
    setShow2({
      show: true,
      id,
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }
              >
                Product Table
              </h3>
            </div>
            {/* Add Product Modal  */}
            <button
              onClick={openModal}
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Add Product
            </button>
            <button
              onClick={openModal1}
              className="bg-lightBlue-500 text-white active:bg-lightBlue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Upload CSV
            </button>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Product ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Product Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Product Title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Product Description
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Publish
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {product &&
                product.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {index + 1}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.name}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.title}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.description}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        <label className="switch">
                          <input
                            type="checkbox"
                            checked={item.publish == 1 ? true : false}
                            onChange={handleSwitch(item.id)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td className="border-t-0 text-lg px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        <button
                          onClick={handleShow2(item.id)}
                          className="text-white bg-red-600 p-2 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-indigo-500 focus:outline-none dark:focus:ring-blue-800"
                          type="button"
                        >
                          <i
                            className={"fas fa-trash-alt text-sm text-white"}
                          ></i>{" "}
                        </button>
                        <button
                          onClick={handleShow1(item)}
                          className="text-white p-2 bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-indigo-500 focus:outline-none dark:focus:ring-blue-800"
                          type="button"
                        >
                          <i
                            className={"fas fa-pencil-alt text-sm text-white"}
                          ></i>{" "}
                        </button>
                        <button
                          // onClick={handleView(item.id)}
                          className="text-white p-2 bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-indigo-500 focus:outline-none dark:focus:ring-blue-800"
                          type="button"
                        >
                          <i className={"fas fa-eye text-sm text-white"}></i>{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      {/* Add Product Modal  */}

      {showModal && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 left-50 z-50  w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add Product
                </h3>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form
                className="space-y-6 p-5"
                action="#"
                onSubmit={handleSubmit}
                pvalidation
              >
                <div className="flex">
                  <div className="mb-4 w-1/2 mr-4">
                    <label
                      for="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Name"
                      required
                    />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Title
                    </label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Product Title"
                      required
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="mb-4 w-1/2 mr-4">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Tag
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Tag "
                      autoFocus
                      value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="mb-4 w-1/2">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Embed code
                    </label>
                    <input
                      type="text"
                      placeholder="Product embed_code"
                      autoFocus
                      value={embed_code}
                      onChange={(e) => setEmbed_code(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Image
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Publish
                  </label>
                  <label className="switch">
                    <input
                      type="checkbox"
                      value={publish}
                      onChange={(e) => setPublish(e.currentTarget.checked)}
                    />
                    <span className="slider round"></span>
                  </label>
                </div>
                <div className="mb-4">
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Description
                  </label>
                  <textarea
                    type="text"
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="Enter description"
                  >
                    {" "}
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Add CSV Product Modal  */}

      {showpopup && (
        <div
          id="defaultModal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-95-px left-50 z-50  w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add Product
                </h3>
                <button
                  type="button"
                  onClick={closepopup}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <form
                className="space-y-6 p-5"
                action="#"
                onSubmit={handleSubmit1}
                pvalidation
              >
                <div className="mb-4 mr-4">
                  <label
                    for="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Upload CSV
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setCSV(e.target.files[0])}
                    name="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"
                >
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {/* Delete Product Modal  */}

      {show2 && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-95-px left-50 z-50  w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Delete Product
                </h3>
                <button
                  type="button"
                  onClick={handleClose2}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              <div className="p-6 text-center">
                <svg
                  aria-hidden="true"
                  className="mx-auto my-4 text-gray-400 h-16 w-16 dark:text-gray-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Are you sure you want to delete this product?
                </h3>
                <button
                  data-modal-hide="popup-modal"
                  onClick={handleDeleteTrue}
                  type="button"
                  className=" mb-4 text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-6 py-2 text-center mr-2"
                >
                  Yes, I'm sure
                </button>
                <button
                  data-modal-hide="popup-modal"
                  onClick={handleClose2}
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-6 py-2 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                  No, cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* edit Product Modal  */}

      {showModal2 && (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-95-px left-50 z-50  w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full max-w-md max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Product
                </h3>
                <button
                  type="button"
                  onClick={handleClose1}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="px-6 py-6 lg:px-8">
                <form className="space-y-6 p-6" action="#" onSubmit={editInfo}>
                  <div className="flex">
                    <div className="mb-4 w-1/2 mr-4">
                      <label
                        for="name"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Name
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        name="name"
                        onChange={onChange}
                        id="name"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Product Name"
                        required
                      />
                    </div>
                    <div className="mb-4 w-1/2">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Product Title
                      </label>
                      <input
                        type="text"
                        value={form.title}
                        name="title"
                        onChange={onChange}
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Product Title"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mb-4 w-full">
                      <label
                        for="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Embeded Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Tag "
                        name="embed_title"
                        autoFocus
                        value={form.embed_title}
                        onChange={onChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Image
                    </label>
                    <input
                      type="file"
                      value={""}
                      name="image"
                      onChange={(e) => setImage(e.target.files[0])}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Product Description
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      value={form.description}
                      onChange={onChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="Enter description"
                    >
                      {" "}
                    </textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-white bg-indigo-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"
                  >
                    Save Changes
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
