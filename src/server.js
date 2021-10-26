'use strict';

const express = require('express');
const app = express();
const signUpRouter = require('./routes/signup.js');
const signInRouter = require('./routes/sign-in.js');

app.use(express.json());

app.use(signInRouter);
app.use(signUpRouter);


module.exports = {
  server: app,
  start: (PORT) => {
    app.listen(PORT, () => {
      console.log(`Running on PORT ${PORT}`)
    });
  }
}