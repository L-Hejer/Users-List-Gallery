const mongoose = require("mongoose");
const config = require("config");

const MONGO_URI = config.get("MONGOURI");

const connectDB = () => {
  mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify:false , 
      useCreateIndex: true
    })
    .then(() => console.log("Mongo DB Connected..."))
    .catch(err => console.log(err));
};

module.exports = connectDB