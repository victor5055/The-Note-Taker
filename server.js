const express = require("express");
const path = require("path");
const fs = require("fs")

// Express App set up

const app = express();
const PORT = process.env.PORT || 3000;

//  Gets the Express app to handle the data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));