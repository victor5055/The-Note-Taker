const express = require("express");
// Creating an express server thorugh node//
const app = express();
const path = require("path");
// Setting an initial port.
const PORT = process.env.PORT || 8080;
// Setting up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

const htmlRoutes = require("./routes/apiRoutes.js");
app.use(htmlRoutes);
const apiRoutes = require("./routes/htmlRoutes.js");
app.use(apiRoutes);


app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});