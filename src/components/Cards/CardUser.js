import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import PropTypes from "prop-types";
import { API } from "config/api";
// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardUser({ color }) {
  const [publish, setPublish] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  //const handleShow1 = () => setShow1(true);

  const fields = {
    name: "",
    description: "",
    id: 0,
  };
  const [form, setForm] = useState(fields);

  const handleShow1 = (data) => () => {
    // console.log(data);
    setForm({
      name: data.name,
      email: data.email,
      id: data.id,
    });
    setShow1(true);
  };

  /**--------------------------------------------Edit Users-------------------------------------------------- */

  const editUser = (event) => {
    // console.log(form);
    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("email", form.email);
    event.preventDefault();
    axios
      .post(API.BASE_URL+"api/edit-user/" + form.id, fd)
      .then((res) => {
        // console.log(res);
        toast.success(res.data.message);
        get_users();
        setShow1(false);
      });
  };

  /**-------------------------------------------------------Edit User--------------------------------------------- */

  const onChange = (event) => {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(value);
    setForm((prevState) => ({
      ...prevState, // shallow copy all previous state
      [name]: value, // update specific key/value
    }));
  };

  //const [show2, setShow2] = useState(false);

  const [show2, setShow2] = useState(false, {
    // initial values set to false and null
    id: null,
  });

  const handleSwitch = (id) => (e) => {
    const fd = new FormData();
    fd.append("grant", e.currentTarget.checked == true ? 1 : 0);
    axios
      .post(API.BASE_URL+"api/edit-grant/" + id, fd)
      .then((res) => {
        // console.log(res);
        toast.success(res.data.message);
        get_users();
      });
  };
  const handleClose2 = () => setShow2(false);
  const handleShow2 = (id) => () => {
    setShow2({
      show: true,
      id,
    });
  };
  const get_users = (event) => {
    fetch(API.BASE_URL+"api/user_info")
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setUsers(data.users);
      })
      .catch((err) => {
        // console.log(err.message);
        toast.error("Register error ");
      });
  };
  const [users, setUsers] = useState([]);
  // console.log(users);
  const handleDeleteTrue = (event) => {
    // console.log(show2.id)
    axios
      .delete(API.BASE_URL+"api/delete-user/" + show2.id)
      .then(
        (response) => {
          // this only runs on success
          // console.log("RESPONSE FROM POST", response.data);
          toast.success(response.data.Message);
          setShow2(false, {
            id: null,
          });
          get_users();
        },
        (err) => {
          toast.error("Register error ");
          // console.log("Error While Posting Data", err);
        }
      );
  };

  useEffect(() => {
    get_users();
  }, []);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
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
          "relative flex flex-col min-w-0 break-words w-full mb-6 rounded " +
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
                User Table
              </h3>
            </div>
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
                  User Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  User Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                  }
                >
                  Grant Access
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
              {users &&
                users.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.name}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        {item.email}
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="grant"
                            checked={item.grant == 1 ? true : false}
                            onChange={handleSwitch(item.id)}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
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
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>

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
                      Delete User
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
                      Are you sure you want to delete this User?
                    </h3>
                    <button
                      data-modal-hide="popup-modal"
                      onClick={handleDeleteTrue}
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-6 py-2 mb-12 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      data-modal-hide="popup-modal"
                      onClick={handleClose2}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-6 py-2 mb-12 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* edit Product Modal  */}

          {show1 && (
            <div
              id="authentication-modal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-95-px left-50  z-50  w-1/2 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      User edit
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
                    <form className="space-y-6" action="#" onSubmit={editUser}>
                      <div className="mb-4">
                        <label
                          for="name"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={onChange}
                          id="name"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          for="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={onChange}
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                          placeholder="name@company.com"
                          required
                        />
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
        </div>
      </div>
    </>
  );
}

CardUser.defaultProps = {
  color: "light",
};

CardUser.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
