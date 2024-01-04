const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const favicon = require('serve-favicon');
const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');
const productsRouter = require('./routes/products.routes');
const userSessionCheck = require('./middlewares/userSessionCheck');
const cookieCheck = require('./middlewares/cookieCheck');
const app = express();
const cors = require('cors')
const paginate= require('express-paginate')

//
app.use(paginate.middleware(8,50));
app.use(cors())
app.use(express.urlencoded({ extended: false }));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..', 'public')));
app.use(favicon(path.join(__dirname,'..','public','img','favicon','favicon.ico')))
app.use(methodOverride('_method'));
app.use(session({
  secret : "grupoReHome10",
  resave : true,
  saveUninitialized : true
}));

app.use(cookieCheck);
app.use(userSessionCheck);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products',productsRouter)
app.use('/api/users',require('./routes/api/users.routes'));
app.use('/api/products',require('./routes/api/products.routes'));
app.use('/api/category',require('./routes/api/categories.routes'));

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

//Apis


module.exports = app;
