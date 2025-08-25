const app = require("../Day5/src/app")
const connectDb = require("../Day5/src/db/db")

connectDb()

app.listen(3000, () => console.log("Server running on port 3000"));