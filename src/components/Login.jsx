import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import loginJpg from "../assets/login.jpg";
import { useUserContext } from "../context/UserContextProvider";
import Loader from "./Loader";


// Login & Sign Up Components
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const navigate = useNavigate();
  const { signInUser,googleSignIn } = useUserContext();
  const { loading} = useUserContext();
  const clearData = () => {
    
    setEmail('');
    setPassword('');
    
  }

  

  // Google Authorization

  const google = async (e) => {
    e.preventDefault();
    try{
      await googleSignIn();
      clearData();
      navigate('/main')
    } catch(err) {
      console.log(err)
    }
  };

  // facebook authorization

  // const facebook = () => {};

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInUser(email,password);
    } catch (err) {
      console.log(err.message)

    }
   
  };

  const handleForgetPassword = (e) => {};
  return (
    <>
      <div className="py-6">
        <form onSubmit={handleLogin}>
      

          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="hidden lg:block lg:w-1/2 bg-cover">
              <img src={loginJpg} alt=""></img>
            </div>
            <div className="w-full p-8 lg:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-700 text-center">
                Foodie
              </h2>
              <p className="text-xl text-gray-600 text-center">Welcome back!</p>
              <Link
                to="#"
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg className="h-6 w-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                </div>
                <h1
                  onClick={google}
                  className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
                >
                  Sign in with Google 
                </h1>
              </Link>
              {/* <Link
                to="#"
                className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
              >
                <div className="px-4 py-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    color="blue"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </div>
                <h1
                  onClick={facebook}
                  className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold"
                >
                  Sign in with Facebook
                </h1>
              </Link> */}

              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 lg:w-1/4"></span>
                <Link
                  to="#"
                  className="text-xs text-center text-gray-500 uppercase"
                >
                  or login with email    
                </Link>
                <span className="border-b w-1/5 lg:w-1/4"></span>
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
                  <Link
                    to="#"
                    onClick={handleForgetPassword}
                    className="text-xs text-gray-500"
                  >
                    Forget Password?
                  </Link>
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
              <div className="mt-8">
                <button
                  type="submit"
                  className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600"
                >
                  Login  {loading && <Loader/>}
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="border-b w-1/5 md:w-1/4"></span>
                <Link
                  to="/register"
                  className="text-xs text-gray-500 uppercase"
                >
                  or sign up
                </Link>
                <span className="border-b w-1/5 md:w-1/4"></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
