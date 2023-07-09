let express = require("express");
let app = express();
let dbConnect = require("./dbConnect");
dbConnect.connectMysql()

const port = process.env.PORT || 8080;
app.use(express.json());

//Set Router
const farmerRouters = require("./routes/farmerRoutes");
app.use("/api/farmers", farmerRouters);

const tractorRouters = require("./routes/farmerRoutes");
app.use("/api/tractors", tractorRouters);

const tractorOwnerRouters = require("./routes/tractorOwnerRoutes");
app.use("/api/tractorowners", tractorOwnerRouters);

const bookingRouters = require("./routes/bookingRoutes");
app.use("/api/bookings", bookingRouters);

app.listen(port, () => {
    console.log("Listening on port ", port);
  });
  