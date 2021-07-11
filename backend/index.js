require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

//db file
require("./src/db/mongoose");

app.use(express.json());

//import model
const Contact = require("./src/model/contact");

/*[Deployment: to heroku] */
const buildPath = path.join(__dirname, "..", "build");
app.use(express.static(buildPath));

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

//endpoints
app.post("/api/add-contact", async (req, res) => {
  try {
    const { firstname, lastname, email, address } = req.body;

    if (!firstname || !lastname || !email || !address) {
      return res.status(400).send({ error: "All fields are required." });
    }

    const contact = new Contact({
      firstname,
      lastname,
      email,
      address,
    });

    await contact
      .save()
      .then((res) => console.log("Contact saved."))
      .catch((error) => console.log(error));
    res.status(201).send({ msg: "Contact added successfully." });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.get("/api/get-contacts", async (req, res) => {
  try {
    const contacts = await Contact.find({});

    res.status(201).send(contacts);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});
