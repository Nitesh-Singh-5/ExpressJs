"use strict";

// Setup Babel with express js
// import express from "express"
var express = require('express');

var app = express();
var port = 3000;
app.get('/', function (req, res) {
  res.send('Hello everyone');
});
app.listen(port, function () {
  console.log("Example app listening at http://localhost:".concat(port));
});