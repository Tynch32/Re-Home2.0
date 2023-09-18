// Requires
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const userSessionCheck = require("./middlewares/userSessionCheck")
const cookieCheck = require('./middlewares/cookieCheck');
// Require de routes
const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');

const app = express();

// View engine setup



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));


app.use(session({
  secret : "grupoReHome10",
  resave : true,
  saveUninitialized : true
}));

//Validators
app.use(cookieCheck);
app.use(userSessionCheck)

// Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
