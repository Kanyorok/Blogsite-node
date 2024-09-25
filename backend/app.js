const express = require('express');
const app = express();
const auth = require('./routes/auth');

app.use('/api/v1', auth);

module.exports = app;


