
// Require Express
const express = require('express');
const app = express();

// Use body parser to send JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Add HTML & API routes
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes')(app);

// Set up port & open server
const PORT = process.env.PORT || 3000;
app.listen(PORT);