require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

// Controllers 
const trnApexCtrl = require("./controllers/trnApexCtrl")


const app = express();

app.use(express.json());

app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: SECRET,
    cookie: { secure: false }
  })
);

// Apex Tracker Endpoints
// app.get("public-api.tracker.gg/v2/apex/standard/profile", trnApexCtrl.getProfileStats);

massive(CONNECTION_STRING).then(database => {
  app.set("db", database);
  app.listen(SERVER_PORT, () =>
  console.log(`peerless gamers running in ${process.env.NODE_ENV} mode on port ${SERVER_PORT}`)
  );
});