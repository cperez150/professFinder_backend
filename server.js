/*=========================
       DEPENDENCIES
===========================*/
const express = require("express");
const app = express();
const port = process.env.PORT || 3003;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/profiles";
const mongoose = require("mongoose");
const cors = require("cors");

/*=========================
        CONTROLLERS
===========================*/
//CONTROLLERS
const profilesController = require("./controllers/profile.js");

/*=========================
        WHITELIST
===========================*/
const whitelist = ["http://localhost:3000"];

const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};

/*=========================
        MIDDLEWARE
===========================*/
app.use(express.json());
app.use(cors(corsOptions));
app.use("/profiles", profilesController);

/*=========================
        MONGOOSE
===========================*/
mongoose.connection.on("error", err =>
  console.log(err.message + " is Mongod not running?")
);

mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

/*=========================
          LISTEN
===========================*/
app.listen(port, () => {
  console.log("listening on port", port);
});
