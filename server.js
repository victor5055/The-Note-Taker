// Series of npm packages that we will use to give our server useful functionality//
const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

// This sets up the basic properties for our express server//

// Tells node that we are creating an "express" server//
const app = express();
// Sets an initial port.//
const PORT = process.env.PORT || 8080;
// Sets up the Express app to handle data parsing//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to serve static assets directly//
app.use(express.static('public'));


// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.//

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


// The below code starts the server//

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });


