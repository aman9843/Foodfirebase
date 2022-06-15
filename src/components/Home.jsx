import React from "react";
import delivery from "../assets/food.png";
import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
import data from '../utils/data'
import Loader from "./Loader";
import { UserContext } from "../context/UserContextProvider";

const HomeComponents = () => {

  const {loading} = UserContext
  return (
    <>
    {loading && <Loader/>}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full ">
        <div className="py-2 flex-1 flex  flex-col items-start justify-center gap-6">
          <div className="flex items-center gap-2 bg-violet-200 justify-center px-4 py-1 rounded-full">
            <p className="text-base text-black-500 font-semibold">
              Food Delivery
            </p>

            <div className="w-12 h-12 overflow-hidden rounded-full drop-shadow-xl">
              <motion.img
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                src={delivery}
                alt="Delivery Service"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
            The Fastest Food Delivery{" "}
            <span className="text-blue-600 text-[3rem] lg:text-[5rem]">
              in Your City
            </span>
          </p>


          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
            Hello! Welcome to Foddie Zone...
            <br />
            If You are Foddie you are at the right Place...
            <br />
            Best Food Service at affordable Price.
          </p>

          <button
            type="button"
            className="bg-gradient-to-br bg-violet-200  hover:bg-violet-400 w-auto md: px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
          >
            Order Now
          </button>
        </div>
        <div className="py-2 flex-1 flex bg-violet-200 items-center rounded-3xl drop-shadow-lg relative">
          
          <div className="w-full h-full lg:grid grid-cols-4 divide-y absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-4 flex-wrap">
            {data && data.map((n) => (
              <div
              key={n.id}
              className="lg:w-190 p-4 bg-cardOverLay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
            >
              <img
                src={n.imagesrc}
                className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                alt="icecream"
              />
              <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                {n.name}
              </p>
              <p className="text-[12px] lg:text-sm  text-pink-600 font-semibold my-1 lg:my-3">
                {n.desc}
              </p>
              <p className="text-sm font-semibold text-headingColor">
                <span className="text-xs text-textColor">₹</span>{n.price}
              </p>
            </div>
            ))}
          </div>
        </div>
      </section>
 


    </>
  );
};

export default HomeComponents;
