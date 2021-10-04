import ProfileCategory from "./ProfileCategory";

const UserProfile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Compte de "Blistoufe"</h1>
      <form className="profile__infos">
        <ProfileCategory
          title="Pseudonyme"
          content="Blistoufe"
          inputId="username"
          label="Nouveau pseudonyme"
        />
        <ProfileCategory
          title="Adresse e-mail"
          content="blistoufe@gmail.com"
          inputId="email"
          label="Nouvelle adresse e-mail"
          type="email"
        />
        <button type="submit">Modifier</button>
      </form>
    </div>
  );
};

export default UserProfile;