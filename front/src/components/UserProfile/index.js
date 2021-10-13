import { useSelector, useDispatch } from "react-redux";

import ProfileCategory from "./ProfileCategory";
import MotionWrapper from "../MotionWrapper";

import "./userProfile.scss";

import { updateUser, deleteUser } from "../../actions/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(({ user }) => user.loggedUser);
  const { email } = useSelector(({ user }) => user.loggedUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser());
  };

  const onDelete = () => {
    dispatch(deleteUser());
  };

  return (
    <MotionWrapper>
      <div className="profile">
        <div className="profile-container">
          <h1 className="profile__title">Compte de {username}</h1>
          <form className="profile__infos" onSubmit={handleSubmit}>
            <ProfileCategory
              title="Pseudonyme :"
              content={username}
              inputId="username"
              label="Modifier pseudonyme"
            />
            <ProfileCategory
              title="Adresse e-mail :"
              content={email}
              inputId="email"
              label="Modifier adresse e-mail"
              type="email"
            />
            <button type="submit">Modifier</button>
            <button type="button" onClick={onDelete}>
              Supprimer utilisateur
            </button>
          </form>
        </div>
      </div>
    </MotionWrapper>
  );
};

export default UserProfile;
