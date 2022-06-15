/* eslint-disable no-sequences */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.jpg";
import { AnimatePresence } from "framer-motion";
import Loader from "./Loader";
import { useUserContext } from "../context/UserContextProvider";
import Swal from "sweetalert2";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPasssword, setCpassword] = useState("");
  const { registerUser } = useUserContext();

  const { loading } = useUserContext();

  const handleRegister = async (e) => {
    e.preventDefault();

    const clearData = () => {
      setName('');
      setEmail('');
      setPassword('');
      setCpassword('')
    }

    if (password !== cPasssword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Do not Match",
      });
    }

    try {
      if (!name || !email || !password || !cPasssword) {
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please Fill the Data",
        });
      } else {
        await registerUser(name, email, password);
        clearData();
      }
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err,
      });
     
    }

  };
  return (
    <>
      <AnimatePresence>
        <div className="py-6">
          <form onSubmit={handleRegister}>
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
              <div className="hidden lg:block lg:w-1/2 bg-cover">
                <img src={register} alt=""></img>
              </div>
              <div className="w-full p-8 lg:w-1/2">
                <h2 className="text-2xl font-semibold text-gray-700 text-center">
                  Foodie
                </h2>
                <p className="text-xl text-gray-600 text-center">
                  Welcome To Foodie Zone!
                </p>
             

                <div className="mt-4 flex items-center justify-between">
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                  <Link
                    to="/login"
                    className="text-xs text-center text-gray-500 uppercase"
                  >
                    or login with email
                  </Link>
                  <span className="border-b w-1/5 lg:w-1/4"></span>
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    required
                  />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Password
                    </label>
                  </div>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type="password"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    Confirm Password
                  </label>
                  <input
                    className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                    name="cPassword"
                    value={cPasssword}
                    onChange={(e) => {
                      setCpassword(e.target.value);
                    }}
                    type="password"
                    required
                  />
                </div>
                <div className="mt-8">
           
                  <button
                    type="submit"
                    className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                  >
                    Sign Up  {loading && <Loader />}
                  </button>
              
                </div>
              </div>
            </div>
          </form>
        </div>
      </AnimatePresence>
    </>
  );
};

export default Register;
