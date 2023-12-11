const express = require("express");
const app = express();
const PORT = 3000;
const morgan = require("morgan");
const { engine } = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const hbs = create({
  extname: 'hbs',
  defaultLayout: 'main',
  partialsDir: 'views/partials',
  helpers: require('./utils/helpers')
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport');

// app.js
// ...

app.use(session({
    secret: 'tu_clave_secreta',
    resave: false,
    saveUninitialized: false
  }));
  
  // ...