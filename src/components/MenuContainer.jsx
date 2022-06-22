import React, {useState} from "react";
import { categories } from "../utils/data";
import { MdOutlineFoodBank } from "react-icons/md";
import { motion } from "framer-motion";

import { useStateValue } from "../context/stateProvision";
import RowContainer from "./RowContainer";
import CheckOut from "./CheckOut";


const MenuContainer = () => {
  const [filters, setFilters] = useState('chicken')
  const [{ foodItems }, dispatch] = useStateValue();



  
  
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col  justify-start">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-violet-300 to-violet-400 transition-all ease-in-out duration-100">
          Our Best Dishes
        </p>
  
      
      <div className="w-full flex  items-center justify-start lg:justify-center gap-8 py-8 overflow-x-scroll scrollbar-none">
        {categories && categories.map(category => (

       
        <motion.div whileTap={{scale:0.75}} key={category.id} className={`group ${filters === category.urlParamName ? 'bg-violet-400' : 'bg-white'} hover:bg-violet-400 w-24 min-w-[94px] h-28 min cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-violet-4500 duration-150 transition-all ease-in-out`} onClick={() => setFilters(category.urlParamName)}>
          <div className={`w-10 h-10 rounded-full ${filters === category.urlParamName ? 'bg-white': 'bg-violet-300'} flex items-center justify-center`}>
            <MdOutlineFoodBank className=" group-hover:text-textColor text-lg" />
          </div>
          <p className="text-sm text-textColor group-hover:text-black">
            {category.name}
          </p>
        </motion.div>
         ))}
      </div>
      <div className="w-full">
        
           <RowContainer flag={false} data={foodItems?.filter(n => n.data.category === filters)} />
           <CheckOut/>
           
      </div>
      </div>
    </section>
  );
};

export default MenuContainer;
