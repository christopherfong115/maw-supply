import React from "react";
import { motion } from "framer-motion";

const Title = () => {
  return (
    <div className="grid grid-cols-3 place-items-center mb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-black h-1 rounded-2xl"
      ></motion.div>
      <div className="text-center text-7xl font-bold font-serif">
        Maw Supply
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full bg-black h-1 rounded-2xl"
      ></motion.div>
    </div>
  );
};

export default Title;
