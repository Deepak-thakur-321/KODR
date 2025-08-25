const express = require("express");
const authRouter = require("../src/routes/auth.routes")

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
   res.send("Hello World");
});

module.exports = app