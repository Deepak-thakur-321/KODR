const mongoose = require("mongoose")

function connectDB (){
   mongoose.connect("mongodb+srv://KODR2:U9veNfYIxSP6olaR@cluster0.l83zuvu.mongodb.net/ImagePost")

   .then(()=>{
      console.log("Database connected successfully");
   }).catch((err)=>{
      console.log(err);
   }) 
}

module.exports = connectDB