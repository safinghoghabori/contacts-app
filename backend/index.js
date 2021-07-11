const express = require("express");

const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

app.post("/api/add-contact", async (req, res) => {
  try {
    console.log(req.body);
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});

app.get("/api/get-contacts", async (req, res) => {
  try {
    console.log("working...");
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
});
