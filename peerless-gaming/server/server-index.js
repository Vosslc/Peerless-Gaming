require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");

const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;

const app = express();

// massive(CONNECTION_STRING).then(database => {
//   app.set("db", database);
// });

app.listen(SERVER_PORT, () =>
  console.log(`listening on port ${SERVER_PORT}`)
);