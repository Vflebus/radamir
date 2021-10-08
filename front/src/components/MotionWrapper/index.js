import { motion } from "framer-motion";

const MotionWrapper = ({ children }) => {
  const pageVariants = {
      in: {
        opacity: 1
      },
      out: {
        opacity: 0
      }
  };

  const pageTransitions = {
      transition: "linear",
      duration: 1
  };

  return (
    <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransitions}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;