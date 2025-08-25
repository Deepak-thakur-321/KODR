const mongoose = require("mongoose")
require("dotenv").config()


function connectDb() {
   mongoose.connect(process.env.MONGO_URI)
      .then(() => {
         console.log("Connected Successfully");
      }).catch((err) => {
         console.log(err);
      })
}


module.exports = connectDb