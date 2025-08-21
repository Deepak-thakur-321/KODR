const app = require("./src/app")

const connectData = require("../Day2/src/db/db")

connectData()

app.listen(3000, () => {
console.log("server is running port 3000");

})