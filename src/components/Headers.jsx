import React, { useState } from "react";
import logo from "../assets/logo.png";
import profile from "../assets/profile.png";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { HiOutlineLogin } from "react-icons/hi";
import { MdOutlineAppRegistration, MdAdd } from "react-icons/md";
import { useUserContext } from "../context/UserContextProvider";
import { useStateValue } from "../context/stateProvision";
import { actionType } from "../context/reducer";
const Headers = () => {
  const email = "amanprasad9843@gmail.com";
  let { user } = useUserContext();
  const [{cartItems},dispatch] = useStateValue()
  const [menu, isMenu] = useState(false);
  user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const navigate = useNavigate();
  const imageClick = () => {
    isMenu(!menu);
  };
  const { logOut } = useUserContext();

  const login = async () => {
    navigate("/");
  };

  const regsiter = () => {
    navigate("/register");
  };

  const logOutHandler = async () => {
    try {
      await logOut();
      navigate("/");
      localStorage.removeItem("user");
    } catch (error) {
      console.log(error.message);
    }
  };


  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: !cartItems,
    })
  }

  return (
    <header className="fixed z-50  w-screen bg-violet-100 p-3 px-4 md:p-6 md:px-16">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full">
        {user ? (
          <Link to={"/main"} className="flex  item-center gap-2 s ">
            <img
              src={logo}
              className="w-9 h-9 object-cover shadow-lg"
              alt="logo"
            />

            <p className="text-headingColor text-xl font-bold">Foodie</p>
          </Link>
        ) : (
          <Link to={"/"} className="flex  item-center gap-2 s ">
            <img
              src={logo}
              className="w-9 h-9 object-cover shadow-lg"
              alt="logo"
            />

            <p className="text-headingColor text-xl font-bold">Foodie</p>
          </Link>
        )}

        {user ? (
          <>
            <motion.ul
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              className="flex items-center gap-8 ml-auto"
            >
              <Link
                to="/main"
                className="text-base text-textColor hover:duration-100 transition-all ease-in-out cursor-pointer"
                onClick={imageClick}
              >
                Home
              </Link>
              <li
                className="text-base text-textColor hover:duration-100 transition-all ease-in-out cursor-pointer"
                onClick={imageClick}
              >
                Menu
              </li>
              <li
                className="text-base text-textColor hover:duration-100 transition-all ease-in-out cursor-pointer"
                onClick={imageClick}
              >
                Service
              </li>
              <li
                className="text-base text-textColor hover:duration-100 transition-all ease-in-out cursor-pointer"
                onClick={imageClick}
              >
                About Us
              </li>
            </motion.ul>
            <div className="relative flex text-center justify-center" onClick={showCart}>
              <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
              <div className="absolute -top-2  w-5 h-5 rounded-full bg-red-600">
                <p className="text-xs text-white font-semibold">2</p>
              </div>
            </div>

            <div className="relative">
              <motion.img
                src={profile}
                whileTap={{ scale: 0.6 }}
                className="w-12 min-w-[40px] h-10 min-h-[40px] shadow-md cursor-pointer rounded-full"
                alt="avtaar"
                onClick={imageClick}
             
              />
             

              {menu && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className="w-40 bg bg-violet-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                >

<p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out">{user.user.displayName}</p>
                  {user && user.user.email === "amanprasad9843@gmail.com" && (
                    <Link to={"/create"}>
                      <p
                        className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                        onClick={imageClick}
                      >
                        New Item <MdAdd />
                      </p>
                      
                    </Link>
                  )}

                    

                  <p
                    className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={logOutHandler}
                  >
                    logout <FiLogOut />
                  </p>
                </motion.div>
              )}
            </div>
          </>
        ) : (
          <>
            <ul className="flex items-center gap-8 ml-auto">
              <HiOutlineLogin
                className="h-10 w-8 min-h-[40px] ml-5"
                onClick={login}
              ></HiOutlineLogin>
              <MdOutlineAppRegistration
                onClick={regsiter}
                className="h-10 w-8 min-h-[40px] mr-5"
              ></MdOutlineAppRegistration>
            </ul>
          </>
        )}
      </div>

      <div className="flex md:hidden items-center justify-between w-full h-full ">
        <div className="relative flex text-center justify-center " onClick={showCart}>
          <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
          <div className="absolute -top-2  w-5 h-5 rounded-full bg-red-600">
            <p className="text-xs text-white font-semibold">2</p>
          </div>
        </div>
        {user ? (
          <Link to={"/main"} className="flex  item-center gap-2 s ">
            <img
              src={logo}
              className="w-9 h-9 object-cover shadow-lg"
              alt="logo"
            />

            <p className="text-headingColor text-xl font-bold">Foodie</p>
          </Link>
        ) : (
          <Link to={"/"} className="flex  item-center gap-2 s ">
            <img
              src={logo}
              className="w-9 h-9 object-cover shadow-lg"
              alt="logo"
            />

            <p className="text-headingColor text-xl font-bold">Foodie</p>
          </Link>
        )}
        <div className="relative">
          <motion.img
            src={profile}
            whileTap={{ scale: 0.6 }}
            className="w-12 min-w-[40px] h-10 min-h-[40px] shadow-md cursor-pointer rounded-full"
            alt="avtaar"
            onClick={imageClick}
          />

          {menu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              className="w-40 bg bg-violet-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
            >
              {user && email === "amanprasad9843@gmail.com" && (
                <Link to={"/create"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col px-4 py-2 gap-8 ">
                <li className="text-base text-textColor hover:duration-100 transition-all hover:bg-slate-200 ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="text-base text-textColor hover:duration-100 transition-all hover:bg-slate-200 ease-in-out cursor-pointer">
                  Menu
                </li>
                <li className="text-base text-textColor hover:duration-100 transition-all hover:bg-slate-200 ease-in-out cursor-pointer">
                  Service
                </li>
                <li className="text-base text-textColor hover:duration-100 transition-all hover:bg-slate-200 ease-in-out cursor-pointer">
                  About Us
                </li>
              </ul>
              <p
                className="px-4 py-2 rounded-md shadow-md flex items-center gap-3 cursor-pointer bg-slate-300 transition-all duration-100 ease-in-out text-textColor text-base hover:bg-slate-300"
                onClick={logOutHandler}
              >
                logout <FiLogOut />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Headers;
