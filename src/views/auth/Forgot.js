import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import validation from "views/validations/login-validations";
import { useHistory } from "react-router-dom";
import { API } from "config/api";
export default function Forgot() {
  const [email, setEmail] = useState("");
  const [c_password, setCPassword] = useState("");
  const [password, setPassword] = useState("");
  // const [validated, setValidated] = useState(false);
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    let item = { email, password, c_password };
    console.log(item);
    axios.post(API.BASE_URL+"api/forget-password", item).then(
      (res) => {
        console.log("RESPONSE FROM POST", res.data);
        toast.success("Password Reset success");
        history.push("/login");
      },
      (err) => {
        console.log("Error While Posting Data", err);
        toast.error("Invalid Credentials");
      }
    );
  };
  const passwordsMatch = () => {
    return password === c_password;
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
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Forgot Password
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form validation onSubmit={handleSubmit}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* {errors.email && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        {errors.email}{" "}
                      </p>
                    )} */}
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* {errors.password && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        {errors.password}{" "}
                      </p>
                    )} */}
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
                      name="password"
                      value={c_password}
                      onChange={(e) => setCPassword(e.target.value)}
                    />

                    {!passwordsMatch() && (
                      <p className="text-white px-4 py-2 border-0 rounded relative my-4 bg-red-500">
                        {" "}
                        Passwords do not match!
                      </p>
                    )}
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-full text-right">
                <Link to="/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
