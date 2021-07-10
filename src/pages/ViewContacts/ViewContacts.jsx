import ContactCard from "../../components/ContactCard/ContactCard";

const ViewContacts = () => {
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

  return (
    // <>{data && data.map((contact) => <ContactCard contact={contact} />)}</>
    <>
      {" "}
      <ContactCard />
    </>
  );
};

export default ViewContacts;
