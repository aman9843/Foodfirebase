import React from "react";
import { motion } from "framer-motion";
import { AiOutlineBackward } from "react-icons/ai";
import { RiRefreshFill } from "react-icons/ri";
import pizza from '../assets/pizza.jpg'

const Cart = () => {
  return (
    <div className="fixed w-full top-0 right-0 md:w-375 h-screen drop-shadow-md flex flex-col z-[101] bg-violet-50">
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }}>
          <AiOutlineBackward className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p whileTap={{scale:0.75}} className="flex items-center gap-2 p-1 px-2 my-2 bg-violet-200 rounded-md hov:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base">Clear <RiRefreshFill /> {" "} </motion.p>
      </div>

      <div className="w-full h-full bg-cartBg
       rounded-t-[2rem] flex flex-col">
        <div className="w-full flex  items-center justify-start lg:justify-center gap-8 py-8 overflow-x-scroll scrollbar-none">

          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">

            <img src={pizza} alt="" />

          </div>

        </div>

      </div>
    </div>
  );
};

export default Cart;
