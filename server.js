/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
// set port to 8080
app.set('port', 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// read the build folder when server is running
app.use('/build', express.static(__dirname + '/build'));
app.use('/public', express.static(__dirname + '/public'));

/**
 * Get / route
 */
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

/**
 * show 404 page if no route has been hit
 */
app.get('*', function(req, res) {
  res.send('404');
});

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});
