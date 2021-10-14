import { AnimatePresence, motion } from "framer-motion";

import logo from "../../assets/images/logo-decoupe.webp";

const Loading = () => {
    return (
      <AnimatePresence exitBeforeEnter>
        <motion.img
            src={logo}
            alt="logo Radamir"
            className="logo loading"
            id="logo"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transitions={{ transition: "linear", duration: 3 }}
        />
      </AnimatePresence>
  )
};

export default Loading;