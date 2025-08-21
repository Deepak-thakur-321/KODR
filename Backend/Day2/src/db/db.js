const mongoose = require("mongoose")

function connectData() {
   mongoose.connect("mongodb+srv://KODR2:U9veNfYIxSP6olaR@cluster0.l83zuvu.mongodb.net/NewData")

      .then(() => {
         console.log("Connected Successfully");

      }).catch((err) => {
         console.log(err);

      })
}

module.exports = connectData