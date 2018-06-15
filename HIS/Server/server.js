const express = require("express");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/database");

const userRoutes = require("./routes/api/user");


const externalTransfer = require("./routes/api/externalTransferroute");
const internalTransfer = require("./routes/api/internalTransferroute");
const diabeticsRouter =require("./routes/api/dibeticsChartroute");
const fvrRouter = require("./routes/api/fvrChartroutes");
const lbRouter = require("./routes/api/liquidBalanceChartroute");

const patientRoutes = require("./routes/api/patient");


const patient = require("./routes/api/patient");





const lab = require("./routes/api/lab");
const prescription=require("./routes/api/prescription");

const allergies = require("./routes/api/allergies");


mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log(`connected to database ${config.database}`);
});
mongoose.connection.on("error", err => {
  console.log(`database connection failed ${err}`);
});

const app = express();

//passport middleware
app.use(passport.initialize());

//passport config
require("./config/passport")(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const port = 5000;

app.get("/sample", (req, res) => {
  res.send("Hello World");
});

app.use("/api/users", userRoutes);



app.use("/api/externalTransfer",externalTransfer);
app.use("/api/internalTransfer",internalTransfer);
app.use("/api/diabeticschart",diabeticsRouter);
app.use("/api/feverchart",fvrRouter);
app.use("/api/lbchart",lbRouter);

app.use("/api/patients", patientRoutes);


app.use("/api/", patient);




app.use("/api/",lab);
app.use("/api/",prescription);

app.use("/api/", allergies);


// app.use("/api/order", orderRoutes);
// app.use("/api/payment", paymentRoutes);

app.listen(port, () => {
  console.log(`listning to port ${port}`);
});
