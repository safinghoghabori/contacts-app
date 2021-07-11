const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//check connection
mongoose.connection.on("connected", () => {
  console.log("Database connected successfully...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Database error ${error}`);
});
