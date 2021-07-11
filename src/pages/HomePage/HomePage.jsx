import { Link } from "react-router-dom";

import "./homepage.css";

const HomePage = () => {
  return (
    <>
      <div className="heading">
        <h1>Contacts App</h1>
        <p>#DPSCHALLENGE</p>
      </div>
      <div className="container">
        <Link to="/add-contact" className="link__buttons">
          Add Contact
        </Link>
        <Link to="/view-contacts" className="link__buttons">
          View Contacts
        </Link>
      </div>
    </>
  );
};

export default HomePage;
