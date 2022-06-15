import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { MdShoppingBasket, MdOutlineEventAvailable } from "react-icons/md";
import {CgUnavailable} from 'react-icons/cg'

const RowContainer = ({ flag, scrollValue, data }) => {
  

  const rowContainer = useRef();

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);


  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 bg-violet-50 my-12 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data?.map((items) => (
          <div
            key={items.data.id}
            className="w-300 min-w-[300px] md:w-340 mf:min-w-[340px] h-auto bg-white rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={items?.data.imageUrl}
                alt="image"
                className="w-40 h-40 object-contain -mt-8 drop-shadow-2xl"
              ></motion.img>
                  <motion.div
                whileTap={{ scale: 0.75 }}
                className="w-8 h-8 bg-red-600 flex items-center rounded-full
                       justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white"/>
              </motion.div>

            </div>

              
            <div className="w-full flex flex-col items-start justify-end">
              <p className="font-semibold text-textColor text-base md:text-lg">
                {items?.data.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {items?.data.description}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                  Availabe: {items?.data.avail === "Available" ? <MdOutlineEventAvailable className="text-green-600 "/> : <CgUnavailable className="text-red-600"/>}
              </p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">₹</span>
                  {items?.data.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
