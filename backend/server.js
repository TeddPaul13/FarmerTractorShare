let express = require("express");

let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

//for JWT
const createError = require('http-errors');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use(bodyParser.json());
 
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


//Set Router
const farmerRouters = require("./routes/farmerRoutes");
app.use("/api/farmers", farmerRouters);

const tractorRouters = require("./routes/tractorRoutes");
app.use("/api/tractors", tractorRouters);

const bookingRouters = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRouters);

// Handling Errors
app.use((err, req, res, next) => {
  // console.log(err);
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
      message: err.message,
  });
});


app.listen(port, () => {
    console.log("Listening on port ", port);
  });
  