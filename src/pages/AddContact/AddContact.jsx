import { useHistory } from "react-router-dom";

import "./addcontact.css";

const AddContact = () => {
  const history = useHistory();

  const handleBackBtn = () => {
    history.push("/");
  };

  const handleAddBtn = () => {};

  return (
    <div className="container">
      <div className="contact__form">
        <div className="form__heading">
          <h1>Add Contact Form</h1>
        </div>
        <form>
          <div className="field__area">
            <label htmlFor="firstname">First Name</label>
            <input type="text" name="firstname" required />
          </div>

          <div className="field__area">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" name="lastname" required />
          </div>

          <div className="field__area">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
          </div>

          <div className="field__area">
            <label htmlFor="address">Address</label>
            <textarea name="address" rows="5" required></textarea>
          </div>

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
