import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineBackward } from "react-icons/ai";
import { RiRefreshFill } from "react-icons/ri";
import sorry from "../assets/sorry.png";
import { useStateValue } from "../context/stateProvision";
import { actionType } from "../context/reducer";
import CartItems from "./CartItems";
import CheckOut from "./CheckOut";

const Cart = () => {
  const [{ cartItems, cartsItems }, dispatch] = useStateValue();
  // const [flag, setFlag] = useState(1);
  const [chek, setCheck] = useState(false);

  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: !cartItems,
    });
  };

  const checkOut = () => {
    setCheck(true);
  };
    

  

  return (
    <>


         <motion.div
         initial={{ opacity: 0, x: 200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         className="fixed w-full top-0 right-0 md:w-375 h-screen drop-shadow-md flex flex-col z-[101] bg-violet-50"
       >
         <div className="w-full flex items-center justify-between p-4 cursor-pointer">
           <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
             <AiOutlineBackward className="text-textColor text-3xl" />
           </motion.div>
           <p className="text-textColor text-lg font-semibold">Cart</p>
   
           <motion.p
             whileTap={{ scale: 0.75 }}
             className="flex items-center gap-2 p-1 px-2 my-2 bg-violet-200 rounded-md hov:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-textColor text-base"
           >
             Clear <RiRefreshFill />{" "}
           </motion.p>
         </div>
         <CheckOut/>
         {/* {cartsItems && cartsItems.length > 0 ? (
           <div
             className="w-full h-full bg-violet-50
              rounded-t-[2rem] flex flex-col"
           > */}
             {/* cart Items Section */}
             {/* <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none"> */}
               {/* cart Item */}
{/*    
               {cartsItems &&
                 cartsItems.map((items) => (
                   <CartItems key={items.data.id} items={items} />
                 ))}
             </div>
    */}
             {/* cart Total */}
   
             {/* <div className="w-full flex-1 bg-violet-200 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
               <div className="w-full flex items-center justify-between">
                 <p className="text-black-400 text-lg">Sub Total</p>
                 <p className="text-black-400 text-lg">200</p>
               </div>
               <div className="w-full flex items-center justify-between">
                 <p className="text-black-400 text-lg">Delivery</p>
                 <p className="text-black-400 text-lg">2.5</p>
               </div>
   
               <div className="w-full border-b border-violet-600 my-2"></div>
   
               <div className="w-full flex items-center justify-between">
                 <p className="text-black-200 text-xl font-semifold">Total</p>
                 <p className="text-black-200 text-xl font-semifold">11.5</p>
               </div>
   
               <motion.button
                 whileTap={{ scale: 0.8 }}
                 type="button"
                 onClick={checkOut}
                 className="w-full p-2 rounded-full bg-gradient-to-tr from-violet-300 to-violet-500 text-black-50 text-lg my-2 hover:shadow-lg"
               >
                 Check Out
               </motion.button>
             </div>
           </div>
         ) : (
           <div className="w-full h-full flex flex-col items-center justify-center gap-6">
             <p className="text-xl text-textColor font-semibold">
               <img src={sorry} className="w-300" alt="" />
               Add Some Items to the cart
             </p>
           </div>
         )} */}
       </motion.div>

    
 
    </>
  );
};

export default Cart;
