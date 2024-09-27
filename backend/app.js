const express = require('express');
const app = express();
const auth = require('./routes/auth');
const home = require('./routes/homepage');
const cors = require('cors');
app.use(express.json());

const corsOptions = {
    origin: function (origin, callback) {
      const allowedOrigins = ['http://localhost:3000'];
  
      if (!origin || allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
    optionsSuccessStatus: 200,
  };
  
app.use(cors(corsOptions))


app.use('/api/v1', auth);
app.use(home);

module.exports = app;


