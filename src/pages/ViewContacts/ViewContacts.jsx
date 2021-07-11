import ContactCard from "../../components/ContactCard/ContactCard";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./viewcontacts.css";

const ViewContacts = () => {
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const contacts = await axios.get("/api/get-contacts");
      setData(contacts.data);
    };
    fetchData();
    console.log(data);
  }, []);

  const handleBackBtn = () => {
    history.push("/");
  };

  return (
    <>
      <div className="heading">
        <h1>View Contacts</h1>
      </div>
      <div className="card__main">
        {data &&
          data.map((contact, i) => <ContactCard key={i} contact={contact} />)}
      </div>
      <div style={{ textAlign: "center", margin: "30px 0" }}>
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
