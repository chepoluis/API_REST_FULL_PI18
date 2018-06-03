const express = require('express'),
    pug = require('pug'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    restFul = require('express-method-override')('_method'),
    routes = require('./routes/team_router'),
    favicon = require('serve-favicon')(`${__dirname}/public/favicon.ico`),
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000 );

// Alertas y manejo de sesiones
let flash = require('connect-flash');
let session = require('express-session');
let passport = require('passport');
require('./passport/passport')(passport);

let app = express();

// app.use(cookieParser());
// middleware
app.use(session({
  // Variables de sesion
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());

// passport
app.use(passport.initialize());
app.use(passport.session());

app
    .set('views', viewDir)
    .set('view engine', 'pug')
    .set('port', port )

    // Middleware - quita y pone funciones
    .use( bodyParser.json() )
    .use( bodyParser.urlencoded( {extended: false } ))
    .use( publicDir )
    .use( favicon )
    .use( morgan('dev') )
    .use( restFul )
    .use( routes );

module.exports = app;
