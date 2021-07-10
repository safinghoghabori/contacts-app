import ContactCard from "../../components/ContactCard/ContactCard";
import { useHistory } from "react-router-dom";

import "./viewcontacts.css";

const ViewContacts = () => {
  const history = useHistory();
  const data = [
    {
      firstname: "john",
      lastname: "doe",
      email: "johndoe@gmail.com",
      address: "san fransisco, CA",
    },
    {
      firstname: "mike",
      lastname: "kala",
      email: "mikekala@gmail.com",
      address: "san fransisco, CA",
    },
    {
      firstname: "rastu",
      lastname: "doe",
      email: "rastudoe@gmail.com",
      address: "san fransisco, CA",
    },
    {
      firstname: "kapil",
      lastname: "sharma",
      email: "kapilsharma@gmail.com",
      address: "san fransisco, CA",
    },
    {
      firstname: "andrew",
      lastname: "mid",
      email: "andrewmid@gmail.com",
      address: "san fransisco, CA",
    },
  ];

  const handleBackBtn = () => {
    history.push("/");
  };

  return (
    // <></>
    <>
      <div className="heading">
        <h1>View Contacts</h1>
      </div>
      <div className="card__main">
        {data &&
          data.map((contact, i) => <ContactCard key={i} contact={contact} />)}
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          className="backbtn btn"
          style={{ background: "wheat" }}
          onClick={handleBackBtn}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ViewContacts;
