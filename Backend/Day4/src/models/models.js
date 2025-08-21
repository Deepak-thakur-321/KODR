const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
   caption: String,
   Url: String
})

const postModel = mongoose.model("post", postSchema)

module.exports = postModel