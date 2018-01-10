const express = require("express"),
  cors = require("cors"),
  { json } = require("body-parser"),
  axios = require("axios"),
  taxController = require("./controllers/taxController");
dataController = require("./controllers/dataController");

const app = express();

app.use(cors());
app.use(json());

const port = 3005;

app.post("/api/incomeTax", taxController.computeTax);
app.get("/api/getTaxes", taxController.getTaxes);

app.get("/api/getCentralOne", dataController.getCentralOne);
app.get("/api/getCentralThree", dataController.getCentralThree);
app.get("/api/getOuterOne", dataController.getOuterOne);
app.get("/api/getOuterThree", dataController.getOuterThree);
app.get("/api/getAvgUtil", dataController.getAvgUtil);
app.get("/api/getInternet", dataController.getInternet);
app.get("/api/getGas", dataController.getGas);

app.listen(port, () => {
  console.log(`I'll be right by your side till ${port}`);
});
