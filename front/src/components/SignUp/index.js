import { motion } from "framer-motion";

import Menu from "../Menu";
import Input from "./Input";

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

const SignUp = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransitions}
    >
      <Menu />

      <div className="signup">
        <h1>Inscription</h1>
        <form>
          <Input forId="username" label="Identifiant" />
          <Input forId="email" label="Adresse e-mail" type="email" />
          <Input forId="password" label="Mot de passe" type="password" />
          <Input forId="passwordConfirm" label="Confirmer mot de passe" type="password" />
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;