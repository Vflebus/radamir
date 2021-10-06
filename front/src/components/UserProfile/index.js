import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import ProfileCategory from "./ProfileCategory";

import { updateUser } from "../../actions/user";

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

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(({ user }) => user);
  const { email } = useSelector(({ user }) => user);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser());
  };

  return (
    <motion.div
    initial="out"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransitions}
    >
      <div className="profile">
        <h1 className="profile__title">Compte de {username}</h1>
        <form className="profile__infos" onSubmit={handleSubmit}>
          <ProfileCategory
            title="Pseudonyme"
            content={username}
            inputId="username"
            label="Modifier pseudonyme"
          />
          <ProfileCategory
            title="Adresse e-mail"
            content={email}
            inputId="email"
            label="Modifier adresse e-mail"
            type="email"
          />
          <button type="submit">Modifier</button>
        </form>
      </div>
    </motion.div>
  );
};

export default UserProfile;