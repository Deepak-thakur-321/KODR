const app = require("../Day4/src/app")

const connectDB = require("../Day4/src/db/DB")

connectDB()

app.listen(3000, () => {
   console.log("server is running in port 3000");
})

