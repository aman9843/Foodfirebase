import React, {useState} from "react";
import HomeComponents from "./Home";
import { motion } from "framer-motion";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import RowContainer from "./RowContainer";
import { useStateValue } from '../context/stateProvision';
import MenuContainer from "./MenuContainer";
import Cart from "./Cart";
import { useEffect } from "react";



const MainContainer = () => {
  const [{foodItems,cartItems},dispatch] =useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {},[scrollValue,cartItems])

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
    <HomeComponents />

    <section className="w-full my-6">
      <div className="w-full flex items-center justify-between">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-violet-300 to-violet-400 transition-all ease-in-out duration-100">
                   Our Fresh & Healthy Food Services 
        </p>

        <div className="hidden md:flex gap-3 items-center">
          <motion.div whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-violet-500  cursor-pointer  hover:shadow-xl flex items-center" onClick={() => setScrollValue(-1000)}>
           <MdChevronLeft className="text-lg text-white"/>

          </motion.div>
          <motion.div whileTap={{scale:0.75}} className="w-8 h-8 rounded-lg bg-violet-500 cursor-pointer  hover:shadow-xl flex items-center" onClick={() => setScrollValue(1000)}>
           <MdChevronRight className="text-lg  text-white"/>
        </motion.div>
    
        </div>
 

      </div>

    <RowContainer scrollValue={scrollValue} flag={true} data={foodItems}/>
    </section>
    <MenuContainer/>

    {cartItems && (
  <Cart/>
    )}
  
    </div>
   
  );
};

export default MainContainer;
