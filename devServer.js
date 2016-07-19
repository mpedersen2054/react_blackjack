var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/dist'));
app.use(webpackMiddleware(compiler));

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// took me so long to find this error for pushing to production...
// was originally: app.listen(app.get('port'), localhost, function(err) {...}
// needed to remove localhost
app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:5000');
});
