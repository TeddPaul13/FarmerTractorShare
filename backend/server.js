
let dbConnect = require("./dbConnect");
const express = require("express");
const app = express();
require("dotenv").config();
// parse requests of content-type -application/json
app.use(express.json());

let tractorRoutes = require('./routes/tractorRoutes')
app.use('/api/tractors', tractorRoutes)


app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on
port ${PORT}.`);
});