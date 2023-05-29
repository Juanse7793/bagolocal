import PropTypes from "prop-types";
import user from "../assets/user.png";

export const MyCard = ({ name, birthday, email, phone, position }) => {
  return (
    <div className="card flex align-items-center justify-content-center gap-4 border-card">
      <div className="card-header">
        <img src={user} alt="user" width="100px" />
      </div>
      <div>
        <h2 className="bago-primary">{name}</h2>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-calendar bago-primary" />
          <p>{birthday}</p>
        </div>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-envelope bago-primary" />
          <p>{email}</p>
        </div>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-phone bago-primary" />
          <p>{phone}</p>
        </div>
        <div className="flex align-items-center gap-2">
          <i className="pi pi-briefcase bago-primary" />
          <p>{position}</p>
        </div>
      </div>
    </div>
  );
};

MyCard.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
