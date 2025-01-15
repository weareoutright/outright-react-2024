// components/PageTransition.js
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const PageTransition = ({ children, page, xOffset }) => {
  return (
    <AnimatePresence>
      <motion.div
        key={page}
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        // exit={{ x: -xOffset, opacity: 0 }} // Reverse offset on exit
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
