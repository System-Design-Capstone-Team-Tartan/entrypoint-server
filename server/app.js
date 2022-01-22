const express = require('express');
const request = require('request');
const config = require('../config');
const morgan = require('morgan');

const app = express();

// Product Overview
app.use('/products', (req, res) => {
  var url = config.serviceIPs.products + req.originalUrl;
  req.pipe(request({ qs: req.query, uri: url })).pipe(res);
});

// Reviews
app.use('/reviews', (req, res) => {
  var url = config.serviceIPs.reviews + req.originalUrl;
  req.pipe(request({ qs: req.query, uri: url, json: true})).pipe(res);
});

// Q&A
app.use('/qa', (req, res) => {
  var url = config.serviceIPs.questions1 + req.originalUrl;
  req.pipe(request({ qs: req.query, uri: url, json: true})).pipe(res);
});

app.get('/favicon.ico', (req, res) => res.status(204));

app.use(function (req, res, next) {
  res.status(404).send("Page not found")
})

module.exports = app;
