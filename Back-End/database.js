const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tourism-places", {
  useNewUrlParser: true
});
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

//================== SCHEMA ===================//
let placesSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

let Places = mongoose.model("places", placesSchema);

//=================== GET =====================//
let getPlaces = callBack => {
  console.log("GET PLACES FROM DATABASE");
  Places.find({}, function(err, docs) {
    if (err) {
      console.log("ERR:", err);
    }
    console.log("DOCS:", docs);
    callBack(docs);
  });
};

//=================== ADD =====================//
let addPlace = (callBack, obj) => {
  console.log("INSERT DATA TO DATABASE");
  Places.insertMany(
  [
      { title: obj.title, description: obj.description, imageUrl: obj.imageUrl }
   ] ,
    function(err, newPlace) {
      if (err) {
        console.log("ERR:", err);
      }
      console.log("NEW PLACE:", newPlace);
      getPlaces(callBack);
    }
  );
};

//=========== EXPORT MODULES =================//
module.exports = {
  getPlaces,
  addPlace
};
