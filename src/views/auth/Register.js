import React, { useState } from "react";
import axios from "axios";
import rvalidation from "views/validations/register-validation";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { API } from "config/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setCPassword] = useState("");

  const [errors, setError] = useState({});

  const passwordsMatch = () => {
    return password === c_password;
  };

  const handleSubmit = (event) => {
    let item = { name, email, password, c_password };
    event.preventDefault();
    // console.log(item);
    setError(rvalidation(item));

    axios.post(API.BASE_URL+"api/register", item).then(
      (res) => {
        // this only runs on success
         console.log("RESPONSE FROM POST", res.data);
        toast.success("Register success Please verify your email ");
        // window.location.href = "/admin/dashboard"; // Redirect to dashboard page
      },
      (err) => {
        // console.log("Error While Posting Data", err);
        toast.error("Register error ");
      }
    );
  };
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
      <div className="container mx-auto px-4 h-full"
      style={{marginTop:'20px'}}
      >
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign Up
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form action="" rvalidation onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter name"
                    />
                    {errors.name && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        {errors.name}{" "}
                      </p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={email}
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                    {errors.email && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        {errors.email}{" "}
                      </p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={password}
                      name="password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                    {errors.password && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        {errors.password}{" "}
                      </p>
                    )}
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="c_password"
                      value={c_password}
                      onChange={(e) => setCPassword(e.target.value)}
                      placeholder="Confirm Password"
                    />
                    {!passwordsMatch() && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        Passwords do not match!
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember Me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
