import "./contactcard.css";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="card">
        <p>
          First Name: <span className="contact__data">{contact.firstname}</span>
        </p>
        <p>
          Last Name: <span className="contact__data">{contact.lastname}</span>
        </p>
        <p>
          Email: <span>{contact.email}</span>
        </p>
        <p>
          Address: <span className="contact__data">{contact.address}</span>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
