import "./contactcard.css";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="card">
        <p>
          First Name: <span>{contact.firstname}</span>
        </p>
        <p>
          Last Name: <span>{contact.lastname}</span>
        </p>
        <p>
          Email: <span>{contact.email}</span>
        </p>
        <p>
          Address: <span>{contact.address}</span>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
