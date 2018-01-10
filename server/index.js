const express = require("express"),
  cors = require("cors"),
  { json } = require("body-parser"),
  axios = require("axios"),
  taxController = require("./controllers/taxController");

const app = express();

app.use(cors());
app.use(json());

const port = 3005;

app.post("/api/incomeTax", taxController.computeTax);
app.get("/api/getTaxes", taxController.getTaxes);

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
