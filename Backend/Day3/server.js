const app = require("../Day3/src/app")

const connectDB = require("../Day3/src/db/Db")

connectDB()

app.listen(3000, () => {
   console.log("port is Running in 3000");

})