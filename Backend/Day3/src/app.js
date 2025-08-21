const express = require("express")
const noteModel = require("../src/models/notes.models")

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
   res.send("Hello World")
})

app.post("/notes", async (req, res) => {
   try {
      const { title, description } = req.body // frontened se data aara hai  object ke format me req.body me

      // Use object shorthand
      const note = await noteModel.create({ title, description })

      // Send back the created note with a 201 status code
      res.status(201).send(note)
   } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error.message })
   }
})

app.get("/notes", async (req, res) => {
   try {
      const notes = await noteModel.find()
      res.status(200).send(notes)
   } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error.message })
   }
})

app.delete("/notes/:id", async (req, res) => {
   try {
      const note = await noteModel.findOneAndDelete({
         _id: req.params.id
      })

      if (!note) {
         return res.status(404).send({ message: "Note not found" })
      }

      res.status(200).send({ message: "Note deleted successfully" })
   } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error.message })
   }
})


app.patch("/notes/:id", async (req, res) => {
   try {
      const id = req.params.id
      const { title, description } = req.body

      // Use { new: true } to get the updated document back
      const updatedNote = await noteModel.findOneAndUpdate({ _id: id }, { title, description }, { new: true })

      if (!updatedNote) {
         return res.status(404).send({ message: "Note not found" })
      }

      res.status(200).send({ message: "Note updated successfully", note: updatedNote })
   } catch (error) {
      res.status(500).send({ message: "Something went wrong", error: error.message })
   }
})

module.exports = app