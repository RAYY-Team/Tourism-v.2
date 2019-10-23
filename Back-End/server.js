const express = require("express");
const cors = require("cors");
const DB = require("./database");
const app = express();
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

//=================== GET =====================//
app.get("/places", (req, res) => {
  DB.getPlaces(result => {
    console.log("CALL BACK FROM SERVER");
    res.json(result);
  });
});


//=================== POST =====================//
app.post("/addPlace", (req, res) => {
  let inputs=req.body;
  console.log("BODY:", inputs);
  DB.addPlace(result => {
    console.log("CALL BACK FROM SERVER");
    res.json(result);
  }, inputs);
});

const PORT = 7000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
