import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import Menu from "../Menu";
import Input from "./Input";

import { signUp } from "../../actions/user";

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
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp());
  };

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
        <form autoComplete="off" onSubmit={handleSubmit}>
          <Input inputId="username" label="Identifiant" />
          <Input inputId="email" label="Adresse e-mail" type="email" />
          <Input inputId="password" label="Mot de passe" type="password" />
          <Input inputId="passwordConfirm" label="Confirmer mot de passe" type="password" />
          <button type="submit">Inscription</button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;