import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/stateProvision";
import CheckOut from "./CheckOut";
let store = [];

const CartItems = ({ items, flag, setFlag }) => {
  const [{ cartsItems }, dispatch] = useStateValue();
  console.log("cartsItems",cartsItems)

  const [qty, setQty] = useState(items.qty);


  const dispatchCart = () => {
    localStorage.setItem("cartsItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CARTS_ITEMS,
      cartsItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
      // eslint-disable-next-line array-callback-return
      // cartsItems.map((item) =>  {
      //   if (item.data.id === id) {
      //     item.data.quantity += 1;
      //     // setFlag(flag + 1);
         
      //   }
      // });

      cartsItems.map((item) => {
        if(item.data.id === id) {
          item.data.quantity += 1;
      
        }
      })
      dispatchCart();
    } else {
     
     
      if (qty === 1) {
        store = cartsItems.filter((item) => item.data.id !== id);
        setFlag(flag+1)
        dispatchCart();
      } else {
        setQty(qty - 1);
        cartsItems.map((item) => {
          if (item.data.id === id) {
            item.data.quantity -= 1;
            // setFlag(flag +1)
          }
        });
        dispatchCart();
      }
    
  };

}

  useEffect(() => {
    store = cartsItems;
  }, [store,qty]);

  return (
    <>
    <div className="w-full p-1 px-2 rounded-lg bg-violet-200 flex items-center gap-2">
      <img
        src={items.data?.imageUrl}
        alt=""
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
      />
      {/* Name Section  */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-black-50">{items.data?.title}</p>
        <p className="text-sm block text-black-300 font-semibold">
          ₹<span className="px-1">{parseFloat(items.data?.price) * qty}</span>
        </p>
      </div>

      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", items.data?.id)}
        >
          <BiMinus className="text-black-50"></BiMinus>
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-white text-black-100 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", items.data?.id)}
        >
          <BiPlus className="text-black-50"></BiPlus>
        </motion.div>
      </div>

    </div>

    </>

  );
};



export default CartItems;
