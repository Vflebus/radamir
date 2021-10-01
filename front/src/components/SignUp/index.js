import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import Menu from "../Menu";
import FormField from "../FormField";

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
        <form className="signup__form" autoComplete="ofFormFieldf" onSubmit={handleSubmit}>
          <FormField inputId="username" label="Identifiant" />
          <FormField inputId="email" label="Adresse e-mail" type="email" />
          <FormField inputId="password" label="Mot de passe" type="password" />
          <FormField inputId="passwordConfirm" label="Confirmer mot de passe" type="password" />
          <button type="submit">Inscription</button>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;