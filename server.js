const express = require("express");
const dotenv = require("dotenv").config();

console.log("test");

const app = express();

const port = process.env.PORT || 5000;

// app.get("/api/contacts", (req, res) => {
//   // res.send("Get all contacts");
//   res.status(200).res.json({ message: "Get all contacts" });
// });      insteaduse

app.use("/api/contacts", require("./routes/contactRoutes")); //middleware

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
