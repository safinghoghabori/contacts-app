import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./addcontact.css";

const AddContact = () => {
  const history = useHistory();

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [msg, setMsg] = useState(false);

  const handleBackBtn = () => {
    history.push("/");
  };

  const handleSubmit = (e) => e.preventDefault();

  const handleAddBtn = async () => {
    await axios.post("/api/add-contact", {
      firstname,
      lastname,
      email,
      address,
    });

    setMsg(true);

    setTimeout(() => {
      history.push("/view-contacts");
    }, 1000);
  };

  return (
    <div className="container">
      <div className="contact__form">
        <div className="form__heading">
          <h1>Add Contact Form</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="field__area">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="field__area">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="field__area">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field__area">
            <label htmlFor="address">Address</label>
            <textarea
              name="address"
              rows="5"
              onChange={(e) => setAddress(e.target.value)}
              required
            ></textarea>
          </div>

          {msg && <div className="success">Contact added successfully...</div>}

          <div className="form__btn">
            <button className="backbtn btn" onClick={handleBackBtn}>
              Back
            </button>
            <button className="addbtn btn" onClick={handleAddBtn}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
