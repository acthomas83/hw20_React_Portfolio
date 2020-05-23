//port, start server, connect to database, static, routes, middleware
const express = require("express");
// const mongoose = require("mongoose");
// const routes = require("./routes");

// const app = express();
// app.set('port', process.env.PORT || 3000);

// var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// use port 3000 un less there exists a preconfigured port
var PORT = process.env.port || 3000;

app.listen(PORT);
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
// app.use(routes);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
