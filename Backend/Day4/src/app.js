const express = require("express")
const multer = require("multer")

const uploadFile = require("../src/services/storage.service")
const postModel = require("../src/models/models")

const upload = multer({ storage: multer.memoryStorage() })

const app = express()

app.use(express.json())

app.post("/posts", upload.single("post Image"), async (req, res) => {

   const post = await postModel.create({
      caption: caption,
      url: result.url
   })

   res.json({
      message: "Post created successfully",
      post
   })

})

app.get("/posts", async (req, res) => {
   const posts = await postModel.find()
   res.json({
      message: "Posts fetched successfully",
      posts: posts
   })
})

module.exports = app


