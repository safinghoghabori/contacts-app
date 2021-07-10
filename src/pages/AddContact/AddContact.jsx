const AddContact = () => {
  return (
    <div className="container">
      <div className="form__heading">
        <h1>Add Contact Form</h1>
      </div>
      <form>
        <div className="field__area">
          <label htmlFor="firstname">First Name</label>
          <input type="text" name="firstname" />
        </div>

        <div className="field__area">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" />
        </div>

        <div className="field__area">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
        </div>

        <div className="field__area">
          <label htmlFor="address">Address</label>
          <input type="textarea" name="address" />
        </div>

        <div className="form__btn">
          <button className="backbtn">Back</button>
          <button className="addbtn">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;
