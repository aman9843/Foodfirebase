import React from "react";
import { motion } from "framer-motion";
import { AiOutlineBackward } from "react-icons/ai";
import {BiMinus,BiPlus} from 'react-icons/bi'
import { RiRefreshFill } from "react-icons/ri";
import pizza from '../assets/pizza.jpg'
import { useStateValue } from "../context/stateProvision";
import { actionType } from "../context/reducer";

const Cart = () => {
  const [{cartItems},dispatch] = useStateValue()
  const showCart = () => {
    dispatch({
      type:actionType.SET_CART_ITEMS,
      cartItems: !cartItems
    })
  }
  
  return (
    <div className="fixed w-full top-0 right-0 md:w-375 h-screen drop-shadow-md flex flex-col z-[101] bg-violet-50">
     
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
          <AiOutlineBackward className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p whileTap={{scale:0.75}} className="flex items-center gap-2 p-1 px-2 my-2 bg-violet-200 rounded-md hov:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base">Clear <RiRefreshFill /> {" "} </motion.p>
      </div>

      <div className="w-full h-full bg-cartBg
       rounded-t-[2rem] flex flex-col">
         {/* cart Items Section */}
        <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
          <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">

            <img src={pizza} alt="" className="w-20 h-20 max-w-[60px] rounded-full object-contain" />
           {/* Name Section  */}
            <div className="flex flex-col gap-2">

              <p className="text-base text-gray-50">Pizza</p>
              <p className="text-sm block text-gray-300 font-semibold">200</p>
            </div>

            <div className="group flex items-center gap-2 ml-auto cursor-pointer">

              <motion.div whileTap={{scale:0.75}}>
                <BiMinus className="text-gray-50">


                </BiMinus>
                

              </motion.div>

              <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
                1
              </p>

              <motion.div whileTap={{scale:0.75}}>

                 <BiPlus className="text-gray-50">

                 </BiPlus>

              </motion.div>
            </div>




          </div>
          
          
          

        </div>

        {/* cart Total */}

        <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Sub Total</p>
            <p className="text-gray-400 text-lg">200</p>
          </div>
          <div className="w-full flex items-center justify-between">
            <p className="text-gray-400 text-lg">Delivery</p>
            <p className="text-gray-400 text-lg">2.5</p>

          </div>

          <div className="w-full border-b border-gray-600 my-2"></div>

          <div className="w-full flex items-center justify-between">
            <p className="text-gray-200 text-xl font-semifold">Total</p>
            <p className="text-gray-200 text-xl font-semifold">11.5</p>
          </div>

          <motion.button
          whileTap={{scale:0.8}}
          type='button'
          className="w-full p-2 rounded-full bg-gradient-to-tr from-violet-300 to-violet-500 text-black-50 text-lg my-2 hover:shadow-lg transition-all duration-150 ease-out">
            Check Out

          </motion.button>
        </div>




      </div>
      
    </div>
  );
};

export default Cart;
