const mongoose = require("mongoose")

async function connectDB() {
   await mongoose.connect("mongodb+srv://KODR2:U9veNfYIxSP6olaR@cluster0.l83zuvu.mongodb.net/NewData")

      .then(() => {
         console.log("Connected");

      }).catch((error) => {
         console.log(error);

      })
}

module.exports = connectDB